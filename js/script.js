
// toggle navbar on mobile view
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

//carousoul for testimonial slides
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.querySelector(".left-arrow");
    const nextBtn = document.querySelector(".right-arrow");

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });

    nextBtn.addEventListener("click", () => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });

    showSlide(slideIndex); 
  });
