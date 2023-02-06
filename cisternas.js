const firebaseConfig = {
  apiKey: "AIzaSyCmeaaw2VUT49d7Abl4OYfXpQfQlqk8Oqc",
  authDomain: "fir-tam-arduino.firebaseapp.com",
  databaseURL: "https://fir-tam-arduino-default-rtdb.firebaseio.com",
  projectId: "fir-tam-arduino",
  storageBucket: "fir-tam-arduino.appspot.com",
  messagingSenderId: "578061028938",
  appId: "1:578061028938:web:ff62acaa1f9504019ae0b3"
};

firebase.initializeApp(firebaseConfig);

var firebaseRef2 = firebase.database().ref("SalaA");
function createCircle(elementName) {
  var containerId = "#container2_" + elementName;
  var bar = new ProgressBar.Circle(containerId, {
      color: "blue",
      strokeWidth: 5,
      trailWidth: 5,
      duration: 1500,
      text: {
          value: "0"
      },
      step: function (state, bar) {
          bar.setText((bar.value() * 100).toFixed(0));
      }
  });

  firebaseRef2.child(elementName).on("value", function (snapshot) {
      bar.animate(snapshot.val() / 100);
  });
}

createCircle("cisterna1");
createCircle("cisterna2");
createCircle("cisterna3");


// Include the navbar
function loadNavbar() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#navbarContainer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadNavbar);