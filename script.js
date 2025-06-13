<script>
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

  setInterval(moveCarousel, 3000); // Auto-slide every 3 seconds

  // ============================
  // Filter Menu Toggle
  // ============================
  document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".filter-toggle");
    const filterMenu = document.querySelector(".filter-menu");

    filterBtn.addEventListener("click", () => {
      filterMenu.classList.toggle("show");
    });

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
        filterMenu.classList.remove("show");
      }
    });

    // Close menu on link click
    filterMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        filterMenu.classList.remove("show");
      });
    });
  });
</script>
<script>
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
</script>