'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30
}

function Header() {
  return (
    <header className="header-project2 section-padding pb-0">
      <div className="container mt-80 mb-80">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">Mythilo Android App</h1>
              <p>One workspace for the whole game — worldbuilding, tasks, playtests and a public page for your game.</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>Android Application</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Client :</span>
                    <h6>Joshua Soriox Tulloch</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Start Date :</span>
                    <h6>14 October 2026</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Tool :</span>
                    <h6>Capasitor JS</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="project2">
          <div id="content-carousel-container-unq-project2" className="swiper-container">
            <Swiper {...swiperOptions} className="swiper-container" id="content-carousel-container-unq-project2">
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/imgs/works/projects/mythilo/MobileAppBanner.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/imgs/works/projects/mythilo/mythilo_ss1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/imgs/works/projects/mythilo/Screenshot_1.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;