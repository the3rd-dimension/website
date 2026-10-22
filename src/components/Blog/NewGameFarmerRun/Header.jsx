"use client";
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0"><span>NEW PROJECT</span></a>
              </div>
              <h1 className="fz-55 mt-30">New Game Farmer Run begins development with Rural Games Studio
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img src="/assets/imgs/profile.jpg" alt="" className="circle-img" />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">Tamzid Idrish</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="#0">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">August 27, 2026</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10"></span>
                  <span className="opacity-7">No Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background bg-img mt-80" data-background="/assets/imgs/blog/farmerRunMenu.png"></div>
    </header>
  )
}

export default Header