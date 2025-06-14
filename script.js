// ============================
// Scroll to Top Button
// ============================
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================
// Fade-in Animation on Scroll
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".hero, .certifications, .testimonials");

  const revealOnScroll = () => {
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});

// ============================
// Certifications Carousel Slider
// ============================
let currentPosition = 0;
const autoSlideInterval = 3000;

function autoSlideCertificates() {
  const slider = document.querySelector(".cert-slider");
  const cards = document.querySelectorAll(".cert-card");

  if (!slider || cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth + 16; // include margin/gap
  const visibleCount = Math.floor(slider.offsetWidth / cardWidth);
  const totalSlides = cards.length - visibleCount;

  currentPosition = currentPosition >= totalSlides ? 0 : currentPosition + 1;

  const offset = currentPosition * cardWidth;
  slider.style.transition = "transform 0.6s ease";
  slider.style.transform = `translateX(-${offset}px)`;
}

setInterval(autoSlideCertificates, autoSlideInterval);
// Fade-In Animation on Scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
