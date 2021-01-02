import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz6O7RHbbFB7qCp4mRQaoK8t4l9SlgJ9A",
    authDomain: "clone-76ac3.firebaseapp.com",
    projectId: "clone-76ac3",
    storageBucket: "clone-76ac3.appspot.com",
    messagingSenderId: "91574016567",
    appId: "1:91574016567:web:6254e4df378cb81f657db2",
    measurementId: "G-LKXPZLQXHV"
  };

  // to initialise the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };