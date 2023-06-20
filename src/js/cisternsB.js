// Include the cisternsA
document.addEventListener("DOMContentLoaded", loadCisternsB);
function loadCisternsB() {
  fetch("./html/cisternsA/cisternsB.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#cisternsBContainer").innerHTML = data;
      initForm();
    });
}

let lastValidValue = null;

export const fillB = (elementId, firebasePath, cistern_long, cistern_width) => {
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

    const valor_map = Math.round(map(data, 0, 230, 100, 0));
    const element = document.getElementById(elementId);
    const cistern_height = 2.3;
    element.style.height = `${valor_map}%`;

    element.innerHTML = `<div class="fill-value"><h4>${valor_map}%</h4><h5>${((cistern_height - data / 100) * cistern_long * cistern_width).toFixed(2)} m<sup>3</sup></h5></div>`;

    if (valor_map > 20) {
      element.style.backgroundColor = "rgb(53, 172, 228)";
    } else {
      element.style.backgroundColor = "red";
    }

  });
}

function map(valor, rango_original_min, rango_original_max, rango_destino_min, rango_destino_max) {
  return ((valor - rango_original_min) / (rango_original_max - rango_original_min)) * (rango_destino_max - rango_destino_min) + rango_destino_min;
}
