import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4aBu7OEdGuYYuLYGXPjucRM3mw1hDS6E",
  authDomain: "clone-d10e6.firebaseapp.com",
  projectId: "clone-d10e6",
  storageBucket: "clone-d10e6.appspot.com",
  messagingSenderId: "531627332393",
  appId: "1:531627332393:web:0c04dfa37a5e8df0fedd38",
  measurementId: "G-9D7MSCZDE7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};
