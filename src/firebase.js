import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyDT8sljM33-EoMZ7lyI-n_mKxYL7kTfUw8",
  authDomain: "client-cms-1.firebaseapp.com",
  projectId: "client-cms-1",
  storageBucket: "client-cms-1.appspot.com",
  messagingSenderId: "1058307461619",
  appId: "1:1058307461619:web:2e71cecf77653d87838286"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase.database();
