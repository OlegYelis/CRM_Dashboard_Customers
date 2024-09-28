(() => {
  const refs = {
    openMenuBtn: document.getElementById("mobile-menu-btn"),
    closeMenuBtn: document.getElementById("mobile-menu-btn-close"),
    menu: document.querySelector(".menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("visually-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function handleClickOutside(event) {
    if (
      !refs.menu.contains(event.target) &&
      !refs.openMenuBtn.contains(event.target) &&
      !refs.menu.classList.contains("visually-hidden")
    ) {
      closeMenu();
    }
  }

  function closeMenu() {
    refs.menu.classList.add("visually-hidden");
    refs.body.classList.remove("no-scroll");
  }

  document.addEventListener("click", handleClickOutside);
})();
