// adding hovered class to selected list
// let list = document.querySelectorAll(".navigation li");


// function activeLink(){
//     list.forEach(item=>{
//         item.classList.remove("hovered");
//     });
//     this.classList.add("hovered");
// }

// list.forEach((item) => item.addEventlistener("mouseover", activeLink));

// Menu Toogle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let cardBox = document.querySelector(".cardBox");
let details = document.querySelector(".details");


toggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    cardBox.classList.toggle("active");
    details.classList.toggle("active");
}



 // PRELOADER
    // WEBSITE PRELOADER
    var loader = document.querySelector(".loader")


    window.addEventListener("load", vanish)
    
    function vanish() {
      loader.classList.add("disappear");
    }