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
//   slideIndex++; //change index automatically
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // RUN showslides every 2 seconds, index goes up by one each time
// }

//MULTIPLE SLIDESHOWS

// let slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }