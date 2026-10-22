import React from 'react';

function TopContent() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Category :</span>
                <h6>Game Development</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Studio :</span>
                <h6>Rural Games</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Start Date :</span>
                <h6>29 June, 2026</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Engine :</span>
                <h6>Unreal 5.7.4</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">01 . The Idea</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">Players investigate a devastating fire linked to the criminal organization Black Tide. Through evidence collection, witness interrogation, and theory building, every conclusion reshapes the investigation, ultimately revealing that the greatest mystery may be the investigator himself.</h5>
                  <p className="fz-18">Zero Drag is a psychological thriller set in modern-day Bihar. Players assume the role of Rupesh, a determined investigator searching for the truth behind a devastating fire.

Unlike traditional games, your deduction drives the progression. Witnesses contradict each other, evidence raises more questions, and the line between truth and memory blurs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopContent