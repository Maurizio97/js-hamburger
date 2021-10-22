// Hamburger menu: mostrare / nascondere il menu principale


let hamburgerMenu = document.querySelector(".hamburger-menu")

const openHamburgerMenu = document.querySelector(".fas")
const closeHamburgerMenu = document.querySelector(".hamburger-menu .close")

//open hamburgher menu
/* openHamburgerMenu.addEventListener("click",

    function(){
        hamburgerMenu.style.display = "block"
    }

)

//open hamburgher menu
closeHamburgerMenu.addEventListener("click",

    function(){
        hamburgerMenu.style.display = "none"
    }
 
)
 */
openHamburgerMenu.addEventListener("click",

    function(){
        hamburgerMenu.className = "hamburger-menu active"
    }

)

//open hamburgher menu
closeHamburgerMenu.addEventListener("click",

    function(){
        hamburgerMenu.className = "hamburger-menu"
    }

)

