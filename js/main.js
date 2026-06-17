document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const accordionItems = document.querySelectorAll('.accordion-item');
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const revealTargets = document.querySelectorAll('.hero, .counters, .section, .feature-card, .skill-card, .portfolio-card, .recent-card, .achievement-card, .video-card, .accordion-item');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('show');
    });
  }

  const smoothScroll = (() => {
    if (reduceMotion) {
      return {
        toElement(element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        },
      };
    }

    const scrollElement = document.scrollingElement || document.documentElement;
    const easing = 0.085;
    const wheelStrength = 1.05;
    const touchStrength = 1.35;
    const keyStep = 110;
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId = null;
    let isTouching = false;
    let lastTouchY = 0;

    const maxScroll = () => Math.max(0, scrollElement.scrollHeight - window.innerHeight);
    const clamp = (value) => Math.min(maxScroll(), Math.max(0, value));

    const tick = () => {
      currentY += (targetY - currentY) * easing;
      window.scrollTo(0, currentY);

      if (Math.abs(targetY - currentY) > 0.45) {
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      currentY = targetY;
      window.scrollTo(0, currentY);
      rafId = null;
    };

    const start = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const goTo = (value) => {
      targetY = clamp(value);
      start();
    };

    const shouldUseNativeScroll = (event) => {
      return event.target.closest('input, textarea, select, button, [data-native-scroll]');
    };

    window.addEventListener('wheel', (event) => {
      if (shouldUseNativeScroll(event)) {
        return;
      }

      event.preventDefault();
      const unit = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
      goTo(targetY + event.deltaY * unit * wheelStrength);
    }, { passive: false });

    window.addEventListener('touchstart', (event) => {
      if (shouldUseNativeScroll(event)) {
        return;
      }

      isTouching = true;
      lastTouchY = event.touches[0].clientY;
      currentY = window.scrollY;
      targetY = currentY;
    }, { passive: true });

    window.addEventListener('touchmove', (event) => {
      if (!isTouching || shouldUseNativeScroll(event)) {
        return;
      }

      event.preventDefault();
      const touchY = event.touches[0].clientY;
      const delta = (lastTouchY - touchY) * touchStrength;
      lastTouchY = touchY;
      goTo(targetY + delta);
    }, { passive: false });

    window.addEventListener('touchend', () => {
      isTouching = false;
    }, { passive: true });

    window.addEventListener('keydown', (event) => {
      if (shouldUseNativeScroll(event)) {
        return;
      }

      const keyTargets = {
        ArrowDown: targetY + keyStep,
        ArrowUp: targetY - keyStep,
        PageDown: targetY + window.innerHeight * 0.82,
        PageUp: targetY - window.innerHeight * 0.82,
        Home: 0,
        End: maxScroll(),
        ' ': targetY + (event.shiftKey ? -window.innerHeight * 0.82 : window.innerHeight * 0.82),
      };

      if (Object.prototype.hasOwnProperty.call(keyTargets, event.key)) {
        event.preventDefault();
        goTo(keyTargets[event.key]);
      }
    });

    window.addEventListener('resize', () => {
      targetY = clamp(targetY);
      currentY = clamp(window.scrollY);
    }, { passive: true });

    window.addEventListener('scroll', () => {
      if (rafId === null && !isTouching) {
        currentY = window.scrollY;
        targetY = currentY;
      }
    }, { passive: true });

    return {
      toElement(element) {
        const scrollPaddingTop = parseFloat(window.getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
        goTo(element.getBoundingClientRect().top + window.scrollY - scrollPaddingTop);
      },
    };
  })();

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          if (reduceMotion) {
            targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
          } else {
            smoothScroll.toElement(targetElement);
          }
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
