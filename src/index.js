import "./styles.css";

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    // if you're at a higher number, go back to first slide
    if (n > slides.length) {slideIndex = 1}
    // if you go below first slide, go back to first slide
    if (n < 1) {slideIndex = slides.length}
    // hiding each slide that you add
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //take slides array (start at 0, the first one), at slide index and unhide it
    slides[slideIndex-1].style.display = "block";
    //take dots array at slide index and make it active
    dots[slideIndex-1].className += " active";
}

nextButton.addEventListener("click", () => {
    plusSlides(1);
})

prevButton.addEventListener("click", () => {
    plusSlides(-1);
})

// add a timer

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }