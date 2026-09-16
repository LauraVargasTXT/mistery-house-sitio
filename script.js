// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const loader = document.getElementById('loader');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 15 + 'px';
  cursor.style.top = e.clientY - 15 + 'px';
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '0.8';
});

// Ocultar loader después de 2 segundos
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 2000);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// TIMELINE PROGRESS ON SCROLL
window.addEventListener('scroll', () => {
  const timelineBar = document.querySelector('.timeline-bar');
  const timelineContainer = document.querySelector('.timeline-container');
  
  if (timelineContainer) {
    const rect = timelineContainer.getBoundingClientRect();
    const scrollPercent = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
    if (timelineBar) {
      timelineBar.style.height = (scrollPercent * 100) + '%';
    }
  }
});

// FORM SUBMISSION
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto. 💕');
    contactForm.reset();
  });
}

// OBSERVE ELEMENTS FOR ANIMATION
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and elements
document.querySelectorAll('.pilar-card, .galeria-card, .equipo-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// PARALLAX EFFECT
window.addEventListener('scroll', () => {
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    const scrollY = window.scrollY;
    heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
});

// BUTTON HOVER EFFECTS
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

console.log('🎵 Mistery House - Bienvenido al sitio oficial');