// Include the navbar
document.addEventListener("DOMContentLoaded", loadNavbar);
function loadNavbar() {
  fetch("./html/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#navbarContainer").innerHTML = data;
    });
}

// Include the welcome message
document.addEventListener("DOMContentLoaded", loadWelcomeMessage);
function loadWelcomeMessage() {
  fetch("./html/welcomeMessage.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#welcomeMessage").innerHTML = data;
    });
}



