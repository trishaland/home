importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCZ0SutxFAcW_JEuaNDSmHPO7F2nXVxMo0",
  authDomain: "trishaland-a4295.firebaseapp.com",
  projectId: "trishaland-a4295",
  storageBucket: "trishaland-a4295.firebasestorage.app",
  messagingSenderId: "904773772791",
  appId: "1:904773772791:web:b2aa07701d406126177af2",
  measurementId: "G-GKKWMK16M9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Dapat pesan background:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "TrishaLand.webp",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
