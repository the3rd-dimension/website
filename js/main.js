document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const accordionItems = document.querySelectorAll('.accordion-item');
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const revealTargets = document.querySelectorAll('.hero:not(.no-reveal), .counters:not(.no-reveal), .section:not(.no-reveal), .feature-card:not(.no-reveal), .skill-card:not(.no-reveal), .portfolio-card:not(.no-reveal), .recent-card:not(.no-reveal), .achievement-card:not(.no-reveal), .video-card:not(.no-reveal), .accordion-item:not(.no-reveal)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('show');
    });
  }

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          if (siteNav && siteNav.classList.contains('show')) {
            siteNav.classList.remove('show');
          }
        }
      }
    });
  });

  accordionItems.forEach(item => {
    const toggle = item.querySelector('.accordion-toggle');
    toggle.addEventListener('click', () => {
      accordionItems.forEach(i => i.classList.remove('active'));
      item.classList.toggle('active');
    });
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px',
    });

    revealTargets.forEach(element => {
      element.classList.add('reveal');
      revealObserver.observe(element);
    });
  } else {
    revealTargets.forEach(element => element.classList.add('is-visible'));
  }
});
