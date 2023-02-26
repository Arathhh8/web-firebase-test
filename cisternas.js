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

const fill = (elementId, firebasePath,cistern_long, cistern_width) => {
  firebase.database().ref(firebasePath).on("value", function(snapshot) {
    const data = snapshot.val();
     valor_map = Math.round(map(data, 0, 230, 100, 0));
    const element = document.getElementById(elementId);
    const cistern_height = 2.3;
    element.style.height = `${valor_map}%`;
  
    element.innerHTML = `<div class="fill-value"><h4>${valor_map}%</h4><h5>${((cistern_height - data/100) * cistern_long * cistern_width).toFixed(2)} m<sup>3</sup></h5></div>`; //muestra valor mapeado en el contenedor de la cisterna
    
    if (valor_map > 20) {
      element.style.backgroundColor = "rgb(53, 172, 228)";
    } 
    else{
      element.style.backgroundColor = "red";
    }

  });
}

//    CSS, Ruta-Firebase ,cistern_long, cistern_width 
fill("fill1", "SalaA/cisterna1",3.3, 3.75);
fill("fill2", "SalaA/cisterna2",8.8, 4.4);
fill("fill3", "SalaA/cisterna3",3.8, 5);


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

function map(valor, rango_original_min, rango_original_max, rango_destino_min, rango_destino_max) {
  return ((valor - rango_original_min) / (rango_original_max - rango_original_min)) * (rango_destino_max - rango_destino_min) + rango_destino_min;
}








