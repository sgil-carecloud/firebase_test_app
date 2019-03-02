import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAvUzJm09QoE0VLenWq3Qzpy4ERDmJceCw",
  authDomain: "development-231516.firebaseapp.com",
  databaseURL: "https://development-231516.firebaseio.com",
  projectId: "development-231516",
  storageBucket: "development-231516.appspot.com",
  messagingSenderId: "781493903741"
};

firebase.initializeApp(config);

export default firebase;
