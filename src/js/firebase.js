import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCmeaaw2VUT49d7Abl4OYfXpQfQlqk8Oqc",
    authDomain: "fir-tam-arduino.firebaseapp.com",
    databaseURL: "https://fir-tam-arduino-default-rtdb.firebaseio.com",
    projectId: "fir-tam-arduino",
    storageBucket: "fir-tam-arduino.appspot.com",
    messagingSenderId: "578061028938",
    appId: "1:578061028938:web:ff62acaa1f9504019ae0b3"
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  //export const app = initializeApp(firebaseConfig);

  //export const auth = getAuth(app)