
import React from 'react';

function Content() {
  return (
    <div className="item pb-60">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text">
            <p>
              A new game project, <strong>Farmer Run</strong>, has begun
              development under <strong>Rural Games Studio</strong>.
              Built in Unreal Engine 5.8.3, Farmer Run is a stylized
              3D side-scroller designed to offer a relaxing escape
              through simple gameplay, playful chaos, and charming
              environments.
            </p>
            <p className="mt-20">
              The concept is simple: smooth movement, soothing music,
              and fun, unpredictable levels that are easy to pick up
              and enjoyable to play. Rather than overwhelming players
              with complicated mechanics, the game aims to deliver
              a lighthearted experience that feels satisfying from
              start to finish.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mt-30">
            <h5 className="fw-600">A Small Game, Full of Character</h5>
          </div>
          <div className="text mt-20">
            <p>
              Farmer Run is planned as a short development project,
              with completion expected within the next few months.
              The team is focused on creating polished movement,
              engaging level design, a distinctive stylized look,
              and a relaxing atmosphere with just the right amount
              of chaos.
            </p>
          </div>
        </div>
      </div>

      <div className="post-qoute mt-50">
        <h6 className="fz-20">
          <span className="l-block">
            Simple to play, satisfying to master, and chaotic
            enough to keep every run interesting.
          </span>
          <span className="sub-title mt-20 mb-0">
            — Farmer Run, Development Vision
          </span>
        </h6>
      </div>

      {/* Project Images */}
      <div className="mb-50 mt-50">
        <div className="row">
          <div className="col-sm-6">
            <div className="iner-img sm-mb30">
              <img
                src="/assets/imgs/works/projects/farmer-run/fr_ss1.png"
                alt="Farmer Run stylized 3D gameplay"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="iner-img">
              <img
                src="/assets/imgs/works/projects/farmer-run/fr_ss2.png"
                alt="Farmer Run development preview"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mb-10">
            <h5 className="fw-600">Project Details</h5>
          </div>

          <div className="text mb-20">
            <p>
              Farmer Run is being developed in Unreal Engine 5.8.3
              by a small, collaborative team at Rural Games Studio.
              The project is directed by Tamzid Idrish, with the
              development team working together to bring its
              playful world and gameplay to life.
            </p>
          </div>

          <div className="unorder-list mb-30">
            <h6 className="mb-10">Project Overview</h6>
            <ul className="rest">
              <li>Studio: Rural Games Studio</li>
              <li>Genre: Stylized 3D side-scroller</li>
              <li>Engine: Unreal Engine 5.8.3</li>
              <li>Game Director: Tamzid Idrish</li>
              <li>Development Stage: Early development</li>
              <li>Expected Timeline: A few months</li>
            </ul>
          </div>

          <div className="title mt-30 mb-10">
            <h5 className="fw-600">The Development Team</h5>
          </div>

          <div className="text mb-20">
            <p>
              <strong>Directed by:</strong> Tamzid Idrish
            </p>
            <p className="mt-10">
              <strong>Development team:</strong> Khushi Kansagra, Diego Sansano,
              Hrushikesh Balaji and Mohan Kumar.
            </p>
            <p className="mt-10">
              As development progresses, the team and project
              structure may evolve alongside the game's needs.
            </p>
          </div>

          <div className="title mt-30">
            <h5 className="fw-600">The Journey Begins</h5>
          </div>

          <div className="text mt-20">
            <p>
              Farmer Run is just getting started. Over the coming
              months, the team will work toward turning this
              simple idea into a polished, relaxing, and
              delightfully chaotic gaming experience.
              More updates will follow as development continues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
