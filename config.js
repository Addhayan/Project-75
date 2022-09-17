import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyzrlIQHJZaAbhKis0u1yl27HEVbMHBh8",
  authDomain: "project-71-23e3f.firebaseapp.com",
  projectId: "project-71-23e3f",
  storageBucket: "project-71-23e3f.appspot.com",
  messagingSenderId: "1046460285834",
  appId: "1:1046460285834:web:431d393775095e466afe73"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
