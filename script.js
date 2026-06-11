document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navUl = document.querySelector('nav ul');
  
  if (navToggle && navUl) {
    navToggle.addEventListener('click', function() {
      navUl.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // Form submission handling
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      if (!data.name || !data.email || !data.message) {
        e.preventDefault();
        alert('Please fill in all required fields');
        return;
      }
      
      // Form will submit normally if using formspree or similar service
      // Remove event listener to allow normal submission
      if (!form.action || form.action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      }
    });
  }

  // Active navigation link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
