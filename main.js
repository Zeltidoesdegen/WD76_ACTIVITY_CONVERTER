const menuButton = document.querySelector(".button-media")
const nav = document.querySelector(".nav")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  // for activation of the navbar
  nav.classList.toggle("active");
  // closing of the navbar
});  

