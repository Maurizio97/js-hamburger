// Hamburger menu: mostrare / nascondere il menu principale


let hamburgerMenu = document.querySelector(".hamburger-menu")

const openHamburgerMenu = document.querySelector(".fas")
const closeHamburgerMenu = document.querySelector(".hamburger-menu .close")

console.log(closeHamburgerMenu);

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

