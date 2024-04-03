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
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,  
  pauseOnHover: true,  
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        cssEase: 'linear'

      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
      }
    }
  ]
});


// --------slider-two
$('.slider-two').slick({    
  infinite: true,
  dots: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  dotsClass: 'slick-dots',
  slidesToScroll: 1,
  // autoplay: true,      
  cssEase: 'linear',
  // dots: true,
  //   infinite: true,
  //   speed: 300,
  //   arrows: false,
    variableWidth:true,
  //   centerMode:true,
  //   autoplay: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
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
document.getElementById("year").innerHTML= year