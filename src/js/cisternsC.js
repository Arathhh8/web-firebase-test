// Include the dispensers
document.addEventListener("DOMContentLoaded", loadCisternsC);
function loadCisternsC() {
  fetch("./html/cisternsA/cisternsC.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#cisternsCContainer").innerHTML = data;
      initForm();
    });
}


let lastValidValue = null;

export const fillC = (elementId, firebasePath, cistern_long, cistern_width) => {
  firebase.database().ref(firebasePath).on("value", function (snapshot) {
    const data = snapshot.val();
    if (data === 0) { //Corrección a error del sensor, en caso de que envíe un 0, el dato se mantendrá como el anterior
      if (lastValidValue !== null) {
        data = lastValidValue;
      } else {
        const element = document.getElementById(elementId);
        element.innerHTML = `<div class="fill-value"><h4>No disponible</h4><h5></h5></div>`;
        return;
      }
    } else {
      lastValidValue = data;
    }

    const valor_map = Math.round(map(data, 0, 50, 100, 0));
    const litros_disp = 50 - data;
    const element = document.getElementById(elementId);
    const cistern_height = 2.3;
    element.style.height = `${valor_map}%`;

    element.innerHTML = `<div class="fill-value"><h4>${valor_map}%</h4><h6>Litros disponibles = ${litros_disp}</h6></div>`;

    if (valor_map > 10) {
      element.style.backgroundColor = "rgb(53, 172, 228)";
    } else {
      element.style.backgroundColor = "red";
    }

  });
}

function map(valor, rango_original_min, rango_original_max, rango_destino_min, rango_destino_max) {
  return ((valor - rango_original_min) / (rango_original_max - rango_original_min)) * (rango_destino_max - rango_destino_min) + rango_destino_min;
}