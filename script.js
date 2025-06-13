<!-- =============================
      Main JavaScript Functions
============================= -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
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
    // Reveal on Scroll Animation
    // ============================
    const revealElements = document.querySelectorAll(".hero, .certifications, .testimonials");

    const handleRevealOnScroll = () => {
      const windowHeight = window.innerHeight;

      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleRevealOnScroll);
    handleRevealOnScroll(); // Initial trigger

    // ============================
    // Certifications Carousel Slider
    // ============================
    let carouselIndex = 0;
    const moveCarousel = () => {
      const track = document.querySelector(".cert-slider");
      const cards = document.querySelectorAll(".cert-card");
      if (!track || cards.length === 0) return;

      const visibleCards = 2;
      const cardWidth = cards[0].offsetWidth + 20; // Add margin or gap
      const totalSlides = Math.ceil(cards.length / visibleCards);

      carouselIndex = (carouselIndex + 1) % totalSlides;
      const offset = carouselIndex * cardWidth * visibleCards;

      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${offset}px)`;
    };

    setInterval(moveCarousel, 3000);

    // ============================
    // Filter Menu Toggle
    // ============================
    const filterBtn = document.querySelector(".filter-toggle");
    const filterMenu = document.querySelector(".filter-menu");

    if (filterBtn && filterMenu) {
      filterBtn.addEventListener("click", () => {
        filterMenu.classList.toggle("show");
      });

      // Close on outside click
      document.addEventListener("click", (e) => {
        if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
          filterMenu.classList.remove("show");
        }
      });

      // Close on link click
      filterMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          filterMenu.classList.remove("show");
        });
      });
    }
  });

  // ============================
  // Responsive Navbar Toggle (Mobile)
  // ============================
  function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    if (nav) nav.classList.toggle('active');
  }
</script>