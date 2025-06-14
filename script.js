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
// Certifications Carousel
// ============================
let carouselIndex = 0;

function moveCarousel() {
  const track = document.querySelector(".cert-slider");
  const cards = document.querySelectorAll(".cert-card");
  if (!track || cards.length === 0) return;

  const totalVisible = 2; // Number of visible cards
  const cardWidth = cards[0].offsetWidth + 20; // +gap between cards
  const totalSlides = Math.ceil(cards.length / totalVisible);

  carouselIndex = (carouselIndex + 1) % totalSlides;

  const offset = carouselIndex * cardWidth * totalVisible;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${offset}px)`;
}

// Start auto sliding every 3 seconds
setInterval(moveCarousel, 3000);
const scrollBtn = document.getElementById('scrollToTopBtn');
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
