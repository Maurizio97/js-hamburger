// Hamburger menu: mostrare / nascondere il menu principale


let hamburgerMenu = document.querySelector(".hamburger-menu")

const openHamburgerMenu = document.querySelector(".fas")
const closeHamburgerMenu

console.log(hamburgerMenu, bottonHamburgerMenu);

openHamburgerMenu.addEventListener("click",

    function(){
        hamburgerMenu.style.display = "block"
    }

)

closeHamburgerMenu.addEventListener("click",

    function(){
        hamburgerMenu.style.display = "none"
    }

)

