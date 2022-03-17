$(document).ready( $(function(){
    var navbtn = $('.navbar-toggler');
    $(navbtn).click(function(){
        $(navbtn).toggleClass('active');
    })



}))
new Swiper('.swiper',{
    navigation:{
      
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    },
    
    spaceBetween:0,
    
    breakpoints:{
    320: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 3,
    },
    1440: {
        slidesPerView: 3,
    }
  },
});