import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdgyJmI77W2M1VNPyUnOHYp99Zz5KQ9r4",
  authDomain: "fir-6699e.firebaseapp.com",
  databaseURL: "https://fir-6699e.firebaseio.com",
  projectId: "fir-6699e",
  storageBucket: "fir-6699e.appspot.com",
  messagingSenderId: "124183167895",
  appId: "1:124183167895:web:2ec826397ff9455a1f7ad2",
  measurementId: "G-C8R9HN57CF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
