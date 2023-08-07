const acc = document.querySelectorAll(".accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const id = this.dataset.panel;
    const panel = document.querySelector(`.panel[data-panel='${id}']`);
    const container = acc[i].closest(".accordion-container");
    const activePanel = container.querySelector(".panel.active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("active");
    } else {
      panel.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";

      activePanel.classList.remove("active");
      activePanel.style.maxHeight = null;
    }
  });
}