import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAvUzJm09QoE0VLenWq3Qzpy4ERDmJceCw",
  authDomain: "development-231516.firebaseapp.com",
  databaseURL: "https://development-231516.firebaseio.com",
  projectId: "development-231516",
  storageBucket: "development-231516.appspot.com",
  messagingSenderId: "781493903741"
};

// const qaConfig = {
//   apiKey: "AIzaSyCjb7CtATR2pVZgVV3qb_0C9y395giM8g8",
//   authDomain: "quality-assurance-231516.firebaseapp.com",
//   databaseURL: "https://quality-assurance-231516.firebaseio.com",
//   projectId: "quality-assurance-231516",
//   storageBucket: "quality-assurance-231516.appspot.com",
//   messagingSenderId: "54850902070"
// };

firebase.initializeApp(config);

export default firebase;
