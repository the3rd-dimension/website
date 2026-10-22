
import React from 'react';

function Content() {
  return (
    <div className="item pb-60">

      {/* Introduction */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text">
            <p>
              <strong>Farmer Run</strong>, developed under Rural Games
              Studio, is approaching the finish line. Our stylized 3D
              side-scroller is now in the QA and testing phase as we
              work toward delivering a smooth, relaxing, and
              delightfully chaotic experience.
            </p>

            <p className="mt-20">
              The game currently features six levels, with the initial
              launch planned to include four. Following release, our
              goal is to introduce four new levels every month,
              delivering one new level each week and giving players
              more reasons to return.
            </p>
          </div>
        </div>
      </div>

      {/* Testing Progress */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mt-30">
            <h5 className="fw-600">Entering the Final Stretch</h5>
          </div>

          <div className="text mt-20">
            <p>
              Recent testing has helped us identify and resolve
              several issues, including the save game system bug
              and other bugs reported in previous testing builds.
              We are continuing to test and polish the experience
              before release.
            </p>

            <p className="mt-20">
              With the core experience taking shape, our focus is
              now on stability, gameplay quality, and making sure
              Farmer Run is ready for its first players.
            </p>
          </div>
        </div>
      </div>

      {/* Development Quote */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="post-qoute mt-50">
            <h6 className="fz-20">
              <span className="l-block">
                Every level, every fix, and every late-night
                iteration brings us one step closer to launch.
              </span>
              <span className="sub-title mt-20 mb-0">
                — Farmer Run Development Team
              </span>
            </h6>
          </div>
        </div>
      </div>

      {/* Project Images */}
      <div className="mb-50 mt-50">
        <div className="row">
          <div className="col-sm-6">
            <div className="iner-img sm-mb30">
              <img
                src="/assets/imgs/works/projects/farmer-run/fr_ss3.png"
                alt="Farmer Run gameplay preview"
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="iner-img">
              <img
                src="/assets/imgs/works/projects/farmer-run/fr_ss4.png"
                alt="Farmer Run development and level preview"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Release Plan */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mb-10">
            <h5 className="fw-600">The Road to Release</h5>
          </div>

          <div className="text mb-20">
            <p>
              Our next major milestone is preparing the game's
              Steam store pages and enabling wishlists. Once the
              pages are ready, we plan to release the official
              Farmer Run trailer to introduce the game to a wider
              audience.
            </p>
          </div>

          <div className="unorder-list mb-30">
            <h6 className="mb-10">What's Next?</h6>
            <ul className="rest">
              <li>Complete QA and final gameplay testing</li>
              <li>Polish and verify fixes from previous builds</li>
              <li>Prepare Steam store pages and wishlists</li>
              <li>Release the official game trailer</li>
              <li>Launch with four levels, followed by planned weekly updates</li>
            </ul>
          </div>

          {/* Team Appreciation */}
          <div className="title mt-40">
            <h5 className="fw-600">A Thank You to My Team</h5>
          </div>

          <div className="text mt-20">
            <p>
              As the project approaches completion, I want to
              take a moment to thank the people who have been
              part of this journey.
            </p>

            <p className="mt-20">
              To Khushi Kansagra, Diego Sansano, Hrushikesh Balaji,
              and Mohan Kumar — thank you for your hard work,
              dedication, and, most importantly, for keeping
              your faith in me throughout development.
            </p>

            <p className="mt-20">
              Building a game comes with challenges, unexpected
              setbacks, and plenty of things to figure out along
              the way. Having a team that continues to believe
              in the project and work toward the same goal means
              more than words can express.
            </p>

            <p className="mt-20">
              I'm proud of what we've built together, and I'm
              grateful to have you all on this journey with me.
              We're getting closer to the finish line, and
              this is only the beginning.
            </p>
          </div>

          <div className="post-qoute mt-40">
            <h6 className="fz-20">
              <span className="l-block">
                Thank you for believing in the vision and helping
                turn it into something real.
              </span>
              <span className="sub-title mt-20 mb-0">
                — Tamzid Idrish, Game Director
              </span>
            </h6>
          </div>

          {/* Closing */}
          <div className="title mt-40">
            <h5 className="fw-600">The Countdown Begins</h5>
          </div>

          <div className="text mt-20">
            <p>
              Farmer Run is getting closer to its first release.
              With testing underway, major bugs addressed, and
              the trailer on the horizon, we're preparing to
              share our little world with players.
            </p>

            <p className="mt-20">
              Stay tuned for the Steam wishlist launch and the
              official trailer announcement. See you on the run!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Content;
