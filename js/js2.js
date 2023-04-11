let content2_slideIndex = 1;
content2_showSlides(content2_slideIndex);

function content2_plusSlides(n) {
  content2_showSlides(content2_slideIndex += n);
}

function content2_currentSlide(n) {
  content2_showSlides(content2_slideIndex = n);
}

function content2_showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("content2-slide");
  const dots = document.getElementsByClassName("content2-dot");
  if (n > slides.length) {
    content2_slideIndex = 1;
  }
  if (n < 1) {
    content2_slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].style.left = (i - content2_slideIndex + 1) * 100 + "%";
  }
  slides[content2_slideIndex - 1].classList.add("active");
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[content2_slideIndex - 1].classList.add("active");
}

let timer = setInterval(() => content2_plusSlides(1), 3000);

const slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseenter", () => clearInterval(timer));
slideshowContainer.addEventListener("mouseleave", () => timer = setInterval(() => content2_plusSlides(1), 3000));
