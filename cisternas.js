const firebaseConfig = {
    apiKey: "AIzaSyCmeaaw2VUT49d7Abl4OYfXpQfQlqk8Oqc",
    authDomain: "fir-tam-arduino.firebaseapp.com",
    databaseURL: "https://fir-tam-arduino-default-rtdb.firebaseio.com",
    projectId: "fir-tam-arduino",
    storageBucket: "fir-tam-arduino.appspot.com",
    messagingSenderId: "578061028938",
    appId: "1:578061028938:web:ff62acaa1f9504019ae0b3"
  };
 
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

var firebaseRef = firebase.database().ref("temperatureReal");
firebaseRef.on("value", function(snapshot){
    var data = snapshot.val();
    snapshot.forEach(function(element){
        document.querySelector('#root').innerHTML =`
            <div>${element.val()}</div>
        `
        //console.log(data[i]);
    });
})

