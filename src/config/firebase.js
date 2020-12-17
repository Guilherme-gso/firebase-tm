import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDpfn2GYu5sKBoOGVXHG5-HIXanVStwnug",
  authDomain: "projetorn-b467c.firebaseapp.com",
  projectId: "projetorn-b467c",
  storageBucket: "projetorn-b467c.appspot.com",
  messagingSenderId: "216878017910",
  appId: "1:216878017910:web:3555381ddaa05dd7c15e57",
  measurementId: "G-1K2MXHHE0G"
}

const app = firebase.initializeApp(config);

const firestore = firebase.firestore(app);
const storage = firebase.storage(app);

export { firestore, storage };
