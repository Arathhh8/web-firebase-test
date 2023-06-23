// Include the cisternsA
document.addEventListener("DOMContentLoaded", loadCisternsC);
function loadCisternsC() {
  fetch("./html/cisternsA/cisternsC.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#cisternsCContainer").innerHTML = data;
      initForm();
    });
}