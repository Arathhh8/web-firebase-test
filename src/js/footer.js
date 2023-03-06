// Include the footer
document.addEventListener("DOMContentLoaded", loadFooter);
function loadFooter() {
  fetch("./html/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("#footerContainer").innerHTML = data;
    });
}