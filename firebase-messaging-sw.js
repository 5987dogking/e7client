// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyAdrX-nUOw1PP9MFZr__LMNRDJfLc2AXqY",
  authDomain: "review-clean02.firebaseapp.com",
  databaseURL: "https://review-clean02.firebaseio.com",
  projectId: "review-clean02",
  storageBucket: "review-clean02.appspot.com",
  messagingSenderId: "420897161487",
  appId: "1:420897161487:web:4342cbd08774260f"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// messaging.usePublicVapidKey("APA91bE6dhB55k4OdlPOtEADoHFYPa7HEkJO3dsuqyGf04XoBntfH3DKWkCKn_CBwQgTwuXLMu2aPVFB2g54Iso8hlzuhA6MUTQ96P_NufpK0wkRqIxUMjg");

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    // icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
