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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.log(">> user data successfully created!")
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
