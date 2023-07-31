const acc = document.querySelectorAll(".accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("active");
    } else {
      panel.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}