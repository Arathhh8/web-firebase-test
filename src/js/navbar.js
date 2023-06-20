// Include the navbar
document.addEventListener("DOMContentLoaded", loadNavbar);
function loadNavbar() {
  fetch("/src/html/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#navbarContainer").innerHTML = data;
    });
}



