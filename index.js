document.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    if(window.scrollY > 100){
        header.style.backgroundColor="black";
    }else {
        header.style.backgroundColor="transparent";
    }
})

const menuHamburger = document.querySelector(".hamburger")
        
        menuHamburger.addEventListener('click', function() {
            const navbar = document.querySelector("#navbar")
            navbar.classList.toggle('mobile-menu')
        });