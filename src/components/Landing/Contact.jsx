"use client";
import React, { useEffect } from 'react';
import ContactForm from '@/components/Contact/ContactForm';

function Contact() {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.contact-container', { yPercent: -50 })
      const cover = gsap.timeline({ paused: true })
      cover.to('.contact-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: '.main-box',
        start: 'bottom bottom',
        end: '+=50%',
        animation: cover,
        scrub: true,
      });
    }
  }

  return (
    <section className="contact section-padding">
      <div className="contact-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sec-head mb-80">
                <span className="sub-title mb-15 opacity-8">- Contact Us</span>
                <h3 className="text-u f-bold fz-50">Get In <span className="f-ultra-light">Touch</span>.</h3>
              </div>
              <div className="full-width">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact