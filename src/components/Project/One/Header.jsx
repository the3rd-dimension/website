"use client";
import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-project1">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">MMTPS</h1>
              <p>Metahuman Third Person Survival Kit for Unreal Engine 5</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>Development Kit</h6>
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
                    <h6>21 October 2026</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Tool :</span>
                    <h6>Unreal Engine 5</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img mt-100" data-background="/assets/imgs/works/projects/mmtps/MMTPS_Banner.png"></div>
    </header>
  )
}

export default Header