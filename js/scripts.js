//Hide offer
const offer = document.querySelector(".offer")
offer.addEventListener("click", function() {
    offer.style.display = "none";
}); 

//Fixed navigation
window.onscroll = function() {
  addFixedPosition()
};
var header = document.querySelector("nav")
var sticky = header.offsetTop;
function addFixedPosition() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
} 

var imageIndex = 1;
showGallery(imageIndex);

// Next/previous controls
function plusSlides(n) {
  showGallery(imageIndex += n);
}

// Thumbnail image controls
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
  var i;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[imageIndex-1].style.display = "inline";
} 

//Hide offer
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