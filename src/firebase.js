import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBcVYnWO6Xm9Qziizbsutw1EKUrBfgfFSk",
    authDomain: "mi-primer-e-commerce.firebaseapp.com",
    projectId: "mi-primer-e-commerce",
    storageBucket: "mi-primer-e-commerce.appspot.com",
    messagingSenderId: "15774373858",
    appId: "1:15774373858:web:02a5d050b6ea7789c98bbb"
  };
  
  const app = firebase.initializeApp(firebaseConfig);

  export const getFirestore = () => {

    return firebase.firestore(app)
  }