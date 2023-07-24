import { auth } from './firebase.js';
import { fill } from './cisternsA.js';
import { fillB } from './cisternsB.js';
import { fillC } from './cisternsC.js';

// Include the user-login
document.addEventListener("DOMContentLoaded", loadUser);
function loadUser() {
  fetch("./html/users.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#usersContainer").innerHTML = data;
      initForm();
    });
}

function initForm() {
  // Seleccione el formulario y el elemento de carga
  const userForm = document.querySelector('#user-form');
  const loading = document.querySelector('#loading');

  // Agregue un escucha de evento en el envío del formulario
  userForm.addEventListener('submit', function (event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Obtenga los valores de correo electrónico y contraseña ingresados por el usuario
    const email = userForm['exampleInputEmail1'].value;
    const password = userForm['exampleInputPassword1'].value;

    // Mostrar el elemento de carga
    loading.style.display = 'block';

    // Iniciar sesión con correo electrónico y contraseña
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // El inicio de sesión fue exitoso, no hacer nada ya que el escucha de estado de autenticación se encargará de mostrar el contenido que requiere autenticación
      })
      .catch((error) => {
        // El inicio de sesión falló, mostrar el error al usuario
        alert(error.message);

        // Ocultar el elemento de carga
        loading.style.display = 'none';
      });
  });
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    // El usuario está autenticado, mostrar el contenido que requiere autenticación
    document.getElementById('usersContainer').style.display = 'none';
    document.getElementById('user-form').style.display = 'none';

    // Mostrar el contenido correspondiente según el enlace seleccionado en el navbar
    const salaALink = document.getElementById('salaALink');
    const salaBLink = document.getElementById('salaBLink');
    const salaCLink = document.getElementById('salaCLink');
    const cisternsAContainer = document.getElementById('cisternsAContainer');
    const cisternsBContainer = document.getElementById('cisternsBContainer');
    const cisternsCContainer = document.getElementById('cisternsCContainer');
    const welcomeMessage = document.getElementById('welcomeMessage');

    salaALink.addEventListener('click', function () {
      cisternsAContainer.style.display = 'block';
      cisternsBContainer.style.display = 'none';
      cisternsCContainer.style.display = 'none';
      welcomeMessage.style.display = 'none';
    });

    salaBLink.addEventListener('click', function () {
      cisternsAContainer.style.display = 'none';
      cisternsBContainer.style.display = 'block';
      cisternsCContainer.style.display = 'none';
      welcomeMessage.style.display = 'none';
    });

    salaCLink.addEventListener('click', function () {
      cisternsAContainer.style.display = 'none';
      cisternsBContainer.style.display = 'none';
      cisternsCContainer.style.display = 'block';
      welcomeMessage.style.display = 'none';
    });

    //    CSS, Ruta-Firebase ,cistern_long, cistern_width
    
    fill("fill1", "SalaA/cisterna1", 3.3, 3.75);
    fill("fill2", "SalaA/cisterna2", 8.8, 4.4);
    fill("fill3", "SalaA/cisterna3", 3.8, 5);

    fillB("fill4", "SalaB/cisterna_1B", 3.3, 3.75);
    fillB("fill5", "SalaB/cisterna_2B", 8.8, 4.4);


    fillC("fill6", "Dispensador/Champu", 8.8, 4.4);
    fillC("fill7", "Dispensador/Cloro", 8.8, 4.4);
    fillC("fill8", "Dispensador/Jabon", 8.8, 4.4);

  } else {
    // El usuario no está autenticado, mostrar el formulario de inicio de sesión
    document.getElementById('navbarContainer').style.display = 'block';
    document.getElementById('footerContainer').style.display = 'block';
    document.getElementById('usersContainer').style.display = 'block';
    //document.getElementById('user-form').style.display = 'block';
    document.getElementById('cisternsAContainer').style.display = 'none';
    document.getElementById('cisternsBContainer').style.display = 'none';
    document.getElementById('cisternsCContainer').style.display = 'none';
  }
});