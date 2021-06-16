import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Ywa02TB8I3ckeIK3e1IY")
  .collection("cartItems")
  .doc("LzWPL9D3NeURYanntCSK");

firestore.doc("/users/Ywa02TB8I3ckeIK3e1IY/cartItems/LzWPL9D3NeURYanntCSK");
firestore.collection("/users/Ywa02TB8I3ckeIK3e1IY/cartItems");
