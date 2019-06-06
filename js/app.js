const header = document.querySelector(".mainHeader");
const list = document.querySelectorAll(".menu--navigation a");
const itemDivs = document.querySelectorAll(".item__showMore");
const carouselItem = document.querySelectorAll(".carousel__item");

console.log(carouselItem);

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

const showMoreInfoButton = function(){
    // console.log(this.itemDivs);
    console.log('działa');
    
    
}

carouselItem.forEach(element => {
    element.addEventListener("click", showMoreInfoButton)
})



window.addEventListener("scroll", headerStyle);

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:400,
        autoplay:true,
        autoplayTimeout:300000,
        autoplayHoverPause:true
    });

    $(".owl-carousel").owlCarousel();
});