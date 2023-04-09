const menu = document.querySelector(".logo-item");
const sideNav = document.querySelector(".side-navbar");

menu.addEventListener("click", function(){
    // sideNav.classList.remove("side-navbar");
    if (sideNav.className == "side-navbar contraer" ){
        sideNav.classList.remove("contraer");
        console.log("contraer menu");
    }else{
        sideNav.classList.add("contraer");
        console.log("desplegar menu");
    }
    
} )