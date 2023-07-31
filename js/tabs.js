const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    const id = tab.dataset.tab;
    const activeTab = document.querySelector('.tab.active');
    const activeContent = document.querySelector(`.tab-content.active`);
    const content = document.querySelector(`.tab-content[data-content="${id}"]`);
    activeContent.classList.remove('active');
    activeTab.classList.remove('active');

    content.classList.add('active');
    tab.classList.add('active');
  });
})