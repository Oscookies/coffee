//Hide offer
const offer = document.querySelector(".offer")
offer.addEventListener("click", function() {
    offer.style.display = "none";
}); 

//Fixed navigation
window.onscroll = function() {addFixedPosition()};
var header = document.querySelector("nav")
var sticky = header.offsetTop;
function addFixedPosition() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
} 