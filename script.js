let contrastToggle = false;
let isModalOpen = false;
let isLoginOpen = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }


function toggleLogin() {
    if (isLoginOpen) {
        isLoginOpen = false;
        return document.body.classList.remove("login--open");
    }
    isLoginOpen = true;
    document.body.classList += " login--open";
  }

  function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }
  