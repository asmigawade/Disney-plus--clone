import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"



const firebaseConfig = {
    apiKey: "AIzaSyBXUycsJ3uUM2-vscPJFnk6b-zCI6-qGB8",
    authDomain: "disneyplus-clone-f9fde.firebaseapp.com",
    projectId: "disneyplus-clone-f9fde",
    storageBucket: "disneyplus-clone-f9fde.appspot.com",
    messagingSenderId: "726588793569",
    appId: "1:726588793569:web:a9836597520321f80ecda0",
    measurementId: "G-BL2LSHH3QF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider , storage};
  export default db;