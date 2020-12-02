//Mobile menu click
function toggleOpen() {
  console.log('Hello');
  document.querySelector(".overflow-menu").classList.toggle('open');
}

const menu = document.querySelector(".fa-mug-hot")
menu.addEventListener('click', toggleOpen);

const close_menu = document.querySelector(".navigation-mobile__close-button")
close_menu.addEventListener('click', function() {
  document.querySelector(".overflow-menu").classList.remove('open');
});

//Hide offer
const offer = document.querySelector(".offer")
offer.addEventListener("click", function() {
    offer.style.display = "none";
}); 

//Fixed navigation
window.onscroll = function() {
  addFixedPosition()
};
var header = document.querySelector(".mobile-wrapper")
var sticky = header.offsetTop;
function addFixedPosition() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
} 

var imageIndex = 1;

function plusSlides(n) {
  showGallery(imageIndex += n);
}

function currentSlide(n) {
  showGallery(imageIndex = index);
}

function showGallery(index) {
  var slides = document.getElementsByClassName("gallery-image");
  if (index > slides.length) {
    imageIndex = 1
  }
  if (index < 1) {
    imageIndex = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[imageIndex-1].style.display = "inline";
} 

//Hide arrows
const imageGallery = document.querySelector(".gallery-container")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
imageGallery.addEventListener("mouseover", function() {
  prev.style.display = "inline";
  next.style.display = "inline";
});

imageGallery.addEventListener("mouseout", function() {
  prev.style.display = "none";
  next.style.display = "none";
}); 

showGallery(imageIndex);
const interval = setInterval(function() {
  plusSlides(1);
}, 50000);

