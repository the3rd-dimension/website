"use client";
import React, { useEffect } from 'react';

function Intro() {
  useEffect(() => {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="text">
              <span className="sub-title mb-15 opacity-8">- who am I?</span>
              <div className="text-reval">
                <h2 className="fz-50 text-u mb-30">
                  <span className="text">a creative technologist</span>
                  <span className="text">| Unreal Engine 5</span>
                  <span className="text">| Blender 3D | Motion Design</span>
                </h2>
              </div>
              <p>I am a passionate software developer with expertise in Unreal Engine 5 and Blender. In my past 5 years of experience in tech field I've worked with studios around the world, clients from all over the world. I've worked with BKG, USA; Rural Games, India; Redacted Works, Poland and so on. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row mt-80">
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Web Development</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Software Development</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Game Systems</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> AI & Automation</li>
                </ul>
              </div>
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Game Development</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> 3D Modelling</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> 3D Environment Art</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> CGI & VFX for Films</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list rest">
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Unreal Engine 5</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Blueprint & C++</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Metahuman Creation</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Animation & Motion Design</li>
                </ul>
              </div>
            </div>
            <div className="row numbers mt-80">
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">15+</h3>
                  <h6 className="fz-16">Projects Served</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">5+</h3>
                  <h6 className="fz-16">Years of experience</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">6</h3>
                  <h6 className="fz-16">Total Certifications</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro