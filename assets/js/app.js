// --------nav-bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
const Navlink = document.querySelectorAll(".nav-link");
Navlink.forEach(e => e.addEventListener("click", () => {
  hamburger.classList.toggle("nav-active");
  document.body.classList.remove("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}))
function mobileMenu() {
  hamburger.classList.toggle("nav-active");
  document.body.classList.toggle("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}


// --------slider
$('.first-slider').slick({
  infinite: true,
  dots: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,  
  variableWidth: true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: 'linear',     
  pauseOnHover:true, 
});


// --------slider-two
$('.slider-two').slick({    
  infinite: true,
  dots: true,
  speed: 800,
  slidesToShow: 1,
  centerMode: true,  
  autoplay:true,
  slidesToScroll: 1,
  cssEase: 'linear',  
  variableWidth: true,          
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        cssEase: 'linear'

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
      }
    }
  ]
});




const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year




// ------------------------------back-to-top-btn
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





//------------------------pre-loder
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    },1000);
  });
});