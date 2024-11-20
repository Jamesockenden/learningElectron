let slideIndex = 0;

document.addEventListener('DOMContentLoaded', (event) => {
  showSlides();
});

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  console.log('Total slides:', slides.length);
  console.log('Total dots:', dots.length);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  } else {
    console.error('Slide or dot not found at index:', slideIndex - 1);
  }

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
