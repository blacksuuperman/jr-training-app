// Jr Level 13 Athlete Hub -- Cloud Function
//
// Why this has to live on a server at all: sending a push notification
// through Firebase Cloud Messaging requires a secret "admin" credential
// that must never be shipped inside the public app (anyone could view the
// app's source and steal it). Cloud Functions is the one piece of this
// whole system that runs on Google's servers instead of on a phone, and
// its only job is: the instant Jr submits a task for approval, look up
// Mom's device, and push her a notification.
//
// Everything else (reading the approval queue live, applying her decision,
// all of the existing strike/screen-time logic) stays exactly as it was --
// still runs locally on each phone, still untouched. This function does not
// make any decisions; it only delivers one notification.

const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

initializeApp();

exports.notifyApprovalPending = onDocumentCreated(
  'households/{householdId}/approvals/{approvalId}',
  async (event) => {
    const data = event.data && event.data.data();
    if (!data || data.status !== 'pending') return;

    const householdId = event.params.householdId;
    const db = getFirestore();

    // Push to every paired device EXCEPT the one that submitted the task --
    // so if Dad's phone and Mom's phone are both paired, both get alerted
    // unless they're the one who just submitted it.
    const devicesSnap = await db.collection(`households/${householdId}/devices`).get();
    const tokens = [];
    devicesSnap.forEach((doc) => {
      const d = doc.data();
      if (doc.id === data.submittedBy) return; // don't notify yourself
      if (d && d.fcmToken) tokens.push(d.fcmToken);
    });
    if (tokens.length === 0) return;

    const message = {
      tokens,
      notification: {
        title: 'Jr submitted a task for your check',
        body: `${data.taskName || 'A task'} is waiting -- tap to review.`
      },
      webpush: {
        fcmOptions: { link: '/approver.html' },
        notification: { requireInteraction: true }
      }
    };

    try {
      await getMessaging().sendEachForMulticast(message);
    } catch (e) {
      console.error('Failed to send approval push', e);
    }
  }
);

// A second, much simpler notification: once Mom (or Dad) resolves a
// pending approval, let the OTHER paired device know right away too --
// mainly so if both parents have the app/approver page open, they don't
// both try to act on the same task.
exports.notifyApprovalResolved = require('firebase-functions/v2/firestore').onDocumentUpdated(
  'households/{householdId}/approvals/{approvalId}',
  async (event) => {
    const before = event.data && event.data.before.data();
    const after = event.data && event.data.after.data();
    if (!before || !after) return;
    if (before.status !== 'pending' || after.status === 'pending') return;

    const householdId = event.params.householdId;
    const db = getFirestore();
    const devicesSnap = await db.collection(`households/${householdId}/devices`).get();
    const tokens = [];
    devicesSnap.forEach((doc) => {
      if (doc.id === after.resolvedBy) return;
      const d = doc.data();
      if (d && d.fcmToken) tokens.push(d.fcmToken);
    });
    if (tokens.length === 0) return;

    const verb = after.status === 'approved' ? 'approved' : 'sent back for a fix';
    const message = {
      tokens,
      notification: {
        title: `${after.taskName || 'A task'} was ${verb}`,
        body: after.status === 'approved' ? 'Nice work -- all good.' : (after.rejectNote || 'Needs another look.')
      },
      webpush: { fcmOptions: { link: '/index.html' } }
    };

    try {
      await getMessaging().sendEachForMulticast(message);
    } catch (e) {
      console.error('Failed to send resolution push', e);
    }
  }
);
