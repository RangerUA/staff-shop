import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTiGCvxVRc86sP71_EAMRXl29wkI6pG3s",
  authDomain: "clothes-db-1st.firebaseapp.com",
  projectId: "clothes-db-1st",
  storageBucket: "clothes-db-1st.appspot.com",
  messagingSenderId: "967701175587",
  appId: "1:967701175587:web:bda490530f4c531f504096",
  measurementId: "G-XX4CP272ZZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
