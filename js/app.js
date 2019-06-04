const header = document.querySelector(".mainHeader");
const list = document.querySelectorAll(".menu--navigation a");


const headerStyle = () => {
    if (window.scrollY != 0){
        header.classList.add("header--scroll");
        list.forEach(function(a){
            a.style.color = "#0E1112";
        })
    } else {
        header.classList.remove("header--scroll");
        list.forEach(function(a){
            a.style.color = "#BAADA8";
        })
    }
}



window.addEventListener("scroll", headerStyle);

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:400,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $(".owl-carousel").owlCarousel();
});