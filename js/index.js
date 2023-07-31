const hamburger = document.querySelector(".hamburger");
const header = document.querySelector('header');
hamburger.addEventListener("click", function() {
  const state = header.getAttribute("state") === 'close' ? "open" : "close";
  header.setAttribute("state", state);
});