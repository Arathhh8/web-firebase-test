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

const fill = (elementId, firebasePath) => {
  firebase.database().ref(firebasePath).on("value", function(snapshot) {
    const data = snapshot.val();
    const element = document.getElementById(elementId);
    element.style.height = `${data}%`;
    element.innerHTML = `<div class="fill-value"><h4>${data}%</h4></div>`;
    if (data < 20) {
      element.style.backgroundColor = "red";
    }
    else{
      element.style.backgroundColor = "rgb(53, 172, 228)";
    }

  });
}

fill("fill1", "SalaA/cisterna1");
fill("fill2", "SalaA/cisterna2");
fill("fill3", "SalaA/cisterna3");


// Include the navbar
document.addEventListener("DOMContentLoaded", loadNavbar);
function loadNavbar() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#navbarContainer").innerHTML = data;
    });
}

// Include the footer
document.addEventListener("DOMContentLoaded", loadFooter);
function loadFooter() {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#footerContainer").innerHTML = data;
    });
}








