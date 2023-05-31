document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelector(".slides");
  const prevBtn = slider.querySelector(".prev-btn");
  const nextBtn = slider.querySelector(".next-btn");
  const images = slides.querySelectorAll("img");
  const slideWidth = slides.clientWidth;
  let currentIndex = 0;

  function moveSlides() {
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlides();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      moveSlides();
    }
  });

  function setCurrentSlide() {
    const savedIndex = localStorage.getItem("currentSlideIndex");
    if (savedIndex) {
      currentIndex = parseInt(savedIndex);
      moveSlides();
    }
  }

  function saveCurrentSlide() {
    localStorage.setItem("currentSlideIndex", currentIndex);
  }

  window.addEventListener("beforeunload", saveCurrentSlide);

  setCurrentSlide();
});
