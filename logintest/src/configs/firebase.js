import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM4Ct_JtLZommxuDiuH_UQLnM_VqsNCv8",
  authDomain: "sample-project-f8bf3.firebaseapp.com",
  projectId: "sample-project-f8bf3",
  storageBucket: "sample-project-f8bf3.appspot.com",
  messagingSenderId: "655201787573",
  appId: "1:655201787573:web:9d199d5bdf6de5d0d9e8fc",
  measurementId: "G-RRWW87GHJ8"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.ServerTimestamp;

export { projectAuth, projectFirestore, timestamp };