
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBTKS7Ayu9i-HllsBtvBuBVGYiy9xSll0U",
    authDomain: "portfolio8905.firebaseapp.com",
    projectId: "portfolio8905",
    storageBucket: "portfolio8905.firebasestorage.app",
    messagingSenderId: "1094242718535",
    appId: "1:1094242718535:web:637f0e64de92945916f262",
    measurementId: "G-JGRX65NHED"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
