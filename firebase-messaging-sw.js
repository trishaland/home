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

// 🔔 Tangani pesan background FCM
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Dapat pesan background:", payload);

  // ✅ Ambil title/body dari notification ATAU data
  const notificationTitle =
    (payload.notification && payload.notification.title) ||
    (payload.data && payload.data.title) ||
    "Pesan Baru 💙";

  const notificationBody =
    (payload.notification && payload.notification.body) ||
    (payload.data && payload.data.body) ||
    "Trisha nyapa kamu dari jauh!";

  const notificationOptions = {
    body: notificationBody,
    icon: payload.notification?.image || "TrishaLand.webp",
    data: { url: "https://trishaland.github.io/home/" },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 🔗 Biar bisa diklik dan buka situs kamu
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
