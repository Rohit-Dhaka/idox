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
  pauseOnHover: true,
  variableWidth: true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: 'linear',    
});


// --------slider-two
$('.slider-two').slick({    
  infinite: true,
  dots: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,  
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




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}