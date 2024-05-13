let contrastToggle = false;
let isModalOpen = false
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
    var modal = document.querySelector(".modal");
    var openEnvelopeIcon = document.querySelector(".fa-envelope-open");
    var closedEnvelopeIcon = document.querySelector(".fa-envelope");

    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
        modal.style.visibility = "hidden"; 
        openEnvelopeIcon.style.display = "none"; 
        closedEnvelopeIcon.style.display = "inline-block"; 
    } else {
        isModalOpen = true;
        document.body.classList += " modal--open";
        modal.style.visibility = "visible"; 
        openEnvelopeIcon.style.display = "inline-block"; 
        closedEnvelopeIcon.style.display = "none"; 
    }
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
  