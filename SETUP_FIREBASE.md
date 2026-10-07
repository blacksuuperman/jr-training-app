# Setting Up Real Push Alerts For Mom (Firebase)

This is a one-time setup, done once from any computer or phone browser. Budget about 20–30 minutes the first time. Nothing here touches the app's existing behavior — until you finish this, both `index.html` and `approver.html` keep working exactly as they do today, fully local, on each device separately.

**Important — I could not test any of the Firebase-specific pieces myself.** Every other round of this app was tested step-by-step before being sent to you. This round's network couldn't reach Google/Firebase at all from where I was working, so the sync code below is carefully written but genuinely unverified. Everything else in the app (every task, every approval, every strike/Screen-Time rule) was fully tested as usual and is unaffected whether or not you ever finish this setup. Go through the checks at the bottom once you deploy — that's the real first test.

## 1. Create the Firebase project

1. Go to `https://console.firebase.google.com` and sign in with any Google account.
2. Click **Add project**. Name it anything (e.g. "Jr Level 13 Athlete Hub"). Google Analytics isn't needed — you can turn it off.
3. Once it's created, you'll land on the project dashboard.

## 2. Turn on Firestore (the shared database)

1. In the left sidebar, click **Build → Firestore Database**.
2. Click **Create database**. Choose **Production mode**. Pick any region close to you (e.g. `us-central`) — this can't be changed later, but it doesn't matter much for a small family app.

## 3. Upgrade to the Blaze plan (needed for the push-notification function)

1. Click the gear icon → **Usage and billing**, or the "Upgrade" prompt.
2. Switch to the **Blaze (pay as you go)** plan and add a card.
3. **Set a budget alert right away** so you'd know immediately if anything ever ran up a real bill: Billing → Budgets & alerts → Create budget → something like $5/month. For an app this size (a handful of approvals a day for one family), the real Firestore/Functions/FCM usage should land at **$0/month**, inside Google's permanent free tier (50,000 Firestore reads/day, 20,000 writes/day, 2,000,000 Cloud Function invocations/month, FCM is always free). The budget alert is just a safety net, not an expectation of being charged.

## 4. Install the Firebase CLI and deploy the rules + function

On a computer with Node.js installed:

```
npm install -g firebase-tools
firebase login
cd firebase          # the folder with firestore.rules, firebase.json, functions/
```

Open `.firebaserc` in that folder and replace `REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID` with your actual project ID (shown at the top of the Firebase console, next to the project name — it's the short slug, not the display name).

Then:

```
firebase deploy --only firestore:rules
cd functions
npm install
cd ..
firebase deploy --only functions
```

The first `functions` deploy can take a few minutes. If it fails asking you to enable an API (Cloud Build, Artifact Registry, Eventarc), click the link it gives you, enable it, and run the deploy again.

## 5. Get your web app config

1. In the Firebase console, click the gear icon → **Project settings**.
2. Scroll to **Your apps**, click the **</>** (Web) icon to register a new web app. Any nickname is fine. You do **not** need Firebase Hosting for this — skip that step if asked (this app is already deployed on Vercel).
3. You'll be shown a `firebaseConfig` object with `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`. Copy these.

## 6. Get your VAPID key (needed for push notifications specifically)

1. Still in Project settings, click the **Cloud Messaging** tab.
2. Under **Web configuration → Web Push certificates**, click **Generate key pair** if one isn't already there.
3. Copy the long key shown — this is `FIREBASE_VAPID_KEY`.

## 7. Paste your config into three files

Open each of these in the deployed app folder and replace every `REPLACE_WITH_YOUR_*` placeholder with the real values from steps 5 and 6. The six config fields and the VAPID key are the same values in all three places:

- `index.html` — near the bottom, in the `<script>` block right before `FIREBASE CROSS-DEVICE SYNC`, look for `window.FIREBASE_CONFIG = {...}` and `window.FIREBASE_VAPID_KEY`.
- `approver.html` — same two variables, near the top of its `<script>` block.
- `sw.js` — look for `SW_FIREBASE_CONFIG` near the bottom. This one does **not** need the VAPID key, just the six config fields.

Save, commit, and push — Vercel will redeploy automatically the same way every other round has.

## 8. Pair the two phones

1. On Dad's/Jr's phone (the main app), open **Settings → Sync With Mom → Connect With Mom's Phone**. This shows a 6-character code that's good for about 10 minutes.
2. On Mom's phone, open `https://<your-site>/approver.html` in Safari, type in that code, tap **Connect**.
3. On Mom's phone, tap **Enable Notifications On This Phone**. Say yes to the permission prompt.
4. Optional but recommended for a real iPhone push alert: on Mom's phone, use Safari's Share icon → **Add to Home Screen** for `approver.html`, same as the main app — then open it from that Home Screen icon at least once so the notification permission sticks properly on iOS.
5. Back on Dad's/Jr's phone, you can also tap **Enable Notifications On This Device** in the same Settings panel if you want this phone to get alerted too (for example, when Mom resolves something).

## What to check once this is live (since I couldn't check it myself)

- Submit a task for approval on Jr's phone → within a few seconds, does Mom's phone get a notification? If her phone is locked, does it still show up?
- Tap the notification — does it open `approver.html` (not just unlock the phone)?
- On `approver.html`, tap **Good** on that task — does Jr's phone, if open, immediately show it as approved (and add Screen Time, assuming it wasn't already voided)?
- Tap **Deny** with a note — does it show up as a correction needed on Jr's phone with that same note, and log a real strike?
- Turn off WiFi/data on one phone for a minute, submit a task, turn it back on — does the approval still arrive once it reconnects?
- With Firebase **not yet set up** (fresh install, placeholders still in the files) — does everything in the main app still work completely normally, with no errors? (This part I verified myself — it should already be solid.)

## If something doesn't work

The most common causes, in order of likelihood:
1. A config value was mistyped in one of the three files, or the VAPID key is missing from `sw.js` (it shouldn't be there — only index.html and approver.html need it).
2. The Cloud Function deploy didn't actually finish (check **Build → Functions** in the console — you should see `notifyApprovalPending` and `notifyApprovalResolved` both listed as "Healthy").
3. iOS specifically requires the page to be opened from its **Home Screen icon**, not just a Safari tab, for push notifications to work at all — this is an Apple restriction, not a bug in the app.
4. Firestore security rules weren't deployed (step 4) — check **Firestore Database → Rules** in the console matches what's in `firebase/firestore.rules`.

None of this risks losing any of Jr's actual progress, logs, or Screen Time — all of that stays saved locally on his device exactly as it always has, completely independent of whether the sync piece is working.
