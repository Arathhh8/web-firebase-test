// Include the cisternsA
document.addEventListener("DOMContentLoaded", loadCisternsA);
function loadCisternsA() {
    fetch("./html/cisternsA/cisternsA.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("#cisternsAContainer").innerHTML = data;
            initForm();
        });
}

export const fill = (elementId, firebasePath,cistern_long, cistern_width) => {
    firebase.database().ref(firebasePath).on("value", function(snapshot) {
      const data = snapshot.val();
      const valor_map = Math.round(map(data, 0, 230, 100, 0));
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
  
  function map(valor, rango_original_min, rango_original_max, rango_destino_min, rango_destino_max) {
    return ((valor - rango_original_min) / (rango_original_max - rango_original_min)) * (rango_destino_max - rango_destino_min) + rango_destino_min;
  }