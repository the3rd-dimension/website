"use client";
import React, { useEffect } from 'react';
import SocialLinks from '@/components/Common/SocialLinks';
import { contactDetails } from '@/data/contact';

function Footer() {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <img src="/assets/imgs/t3d_logo_light.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="column">
                <h6 className="sub-title mb-30">Social Media</h6>
                <SocialLinks
                  listClassName="rest"
                  itemClassName="cursor-pointer"
                  linkClassName="hover-this"
                  labelClassName="hover-anim"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">Based In:</h6>
                <p>{contactDetails.location}</p>
                <h5 className="mt-15 underline">
                  <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
                </h5>
                <p className="mt-15">
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container bord pt-30 pb-30 bord-thin-top">
          <div className="row">
            <div className="col-lg-6">
              <div className="links">
                <ul className="rest">
                  <li>
                    <a href="/about" className="animsition-link">FAQ</a>
                  </li>
                  <li>
                    <a href="/about" className="animsition-link">Careers</a>
                  </li>
                  <li>
                    <a href="/contact" className="animsition-link">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © 2026 Tamzid Idrish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer