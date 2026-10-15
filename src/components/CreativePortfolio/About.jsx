"use client";
import React from 'react';
//= Static Data
import data from '@/data/CreativePortfolio/about.json';

function About() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="intro section-padding pb-0">
      <div className="container">
        <div className="row pb-100 bord-thin-bottom mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title fz-20 md-mb50">What I do.</h6>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div>
              <h3 className="text-u text-indent">My software experience encompasses diverse geographies, cultures, industries, and business objectives.</h3>
              <div className="text mt-30">
                <p>I have a versatile skill set that includes web development, game development, and front-end development for interactive and embedded products. Whether it's building responsive websites, creating immersive gaming experiences, or designing user interfaces for cutting-edge devices, I bring a broad spectrum of technical expertise and creativity to every project. This diverse background enables me to adapt to various challenges and deliver solutions that meet the unique needs of each client and project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About