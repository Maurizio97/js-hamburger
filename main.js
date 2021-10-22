// Hamburger menu: mostrare / nascondere il menu principale


let hamburgerMenu = document.querySelector(".hamburger-menu")

const openHamburgerMenu = document.querySelector(".fas")
const closeHamburgerMenu = document.querySelector(".hamburger-menu .close")


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


const mediaQuery = window.matchMedia("(min-width: 1000px)")

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
      hamburgerMenu.style.display = "none"
      console.log('Media Query Matched!')
    }
 }

 mediaQuery.addListener(handleTabletChange)

 handleTabletChange(mediaQuery)
