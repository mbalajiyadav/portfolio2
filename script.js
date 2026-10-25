var sidemenu = document.getElementById("navbar");
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ===== Skills Tab Interaction =====
(function () {
  const tabs = document.querySelectorAll(".skill-tab");
  const cards = document.querySelectorAll(".skill-card");

  function activateTab(category) {
    // Update tab active state
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.category === category));

    // Highlight matching cards
    cards.forEach((card) => {
      if (card.dataset.category === category) {
        card.classList.add("highlighted");
      } else {
        card.classList.remove("highlighted");
      }
    });
  }

  // Default: highlight first tab's category on load
  activateTab("programming");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.category));
    tab.addEventListener("mouseenter", () => activateTab(tab.dataset.category));
  });
})();
