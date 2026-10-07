// Jr Level 13 Athlete Hub — service worker
// Bump CACHE_NAME any time index.html/approver.html or the icons change so
// devices pick up the new version instead of serving a stale offline copy.
const CACHE_NAME = 'jr-level13-shell-v14-football-iq-film-room-phase1';
const CORE_ASSETS = [
  './',
  './index.html',
  './approver.html',
  './football-data.js',
  './manifest.json',
  './manifest-approver.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Never intercept YouTube/embeds, Firestore/FCM calls, or any other
  // cross-origin request — only the app shell itself.
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-first for the HTML pages (both index.html and approver.html)
  // so a field-side edit/update shows up as soon as there's signal; falls
  // back to THIS exact page's cached copy when offline, not always
  // index.html — approver.html offline should still serve approver.html.
  if (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for everything else in the shell (icons, manifests).
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
      return res;
    }).catch(() => cached))
  );
});

/* =========================================================
   FIREBASE CLOUD MESSAGING — background push (optional)

   Everything above (install/activate/fetch) is the complete offline app
   shell and has zero dependency on anything below it. This whole block is
   wrapped in a try/catch specifically so that if Firebase can't load (no
   network, not set up yet, or the config below is still the REPLACE_*
   placeholder), the service worker still installs normally and the app
   still works fully offline exactly as it did before this feature
   existed — it just won't be able to show a notification while the app
   is closed/backgrounded.

   A service worker can't read values off the page, so these have to be
   filled in here too (same values as FIREBASE_CONFIG in index.html and
   approver.html) — see SETUP_FIREBASE.md.
   ========================================================= */
const SW_FIREBASE_CONFIG = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

try {
  if (SW_FIREBASE_CONFIG.apiKey && SW_FIREBASE_CONFIG.apiKey.indexOf('REPLACE_') !== 0) {
    importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
    firebase.initializeApp(SW_FIREBASE_CONFIG);
    const messaging = firebase.messaging();
    // A plain "notification" payload (what the Cloud Functions send) would
    // otherwise be auto-displayed with no click target wired up — this
    // takes over showing it so tapping it actually opens the right page
    // (the approver page for Mom, the app itself for everyone else).
    messaging.onBackgroundMessage((payload) => {
      const link =
        (payload.fcmOptions && payload.fcmOptions.link) ||
        (payload.webpush && payload.webpush.fcmOptions && payload.webpush.fcmOptions.link) ||
        './index.html';
      const title = (payload.notification && payload.notification.title) || 'Jr Level 13';
      const body = (payload.notification && payload.notification.body) || '';
      self.registration.showNotification(title, { body, icon: './icon-192.png', data: { link } });
    });
  }
} catch (err) {
  // Never let a Firebase/network problem break the offline app shell above.
  console.error('Service worker: Firebase messaging setup failed, continuing without push', err);
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const link = (event.notification.data && event.notification.data.link) || './index.html';
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(link.replace('./', '')) && 'focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(link);
    })
  );
});
