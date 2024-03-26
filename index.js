document.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    if(window.scrollY > 100){
        header.style.backgroundColor="black";
    }else {
        header.style.backgroundColor="transparent";
    }
})