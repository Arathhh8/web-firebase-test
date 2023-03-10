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
      const email = userForm['exampleInputEmail1'].value
      const password = userForm['exampleInputPassword1'].value
  
      // Mostrar el elemento de carga
      loading.style.display = 'block';
  
      // Validar la contraseña después de un retraso de 1 segundo
      setTimeout(function() {
        if (password.length < 6 || password != "cisternasTAM2023") {
          alert('Contraseña invalida');
          console.log("hola");
          // Ocultar el elemento de carga
          loading.style.display = 'none';
        } else {
          // Envíe el formulario si la contraseña es válida
          document.getElementById('usersContainer').style.display = 'none';
          document.getElementById('user-form').style.display = 'none';
          document.getElementById('cisternsAContainer').style.display = 'block';
        }
      }, 1000);
    });
  }
  

