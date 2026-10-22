
import React from 'react';

function Content() {
  return (
    <div className="item pb-60">

      {/* Introduction */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text">
            <p>
              As part of Rural Games Studio's Weekly Learning Sessions,
              I led a session on <strong>Unreal Engine Blueprints for
              Game Development</strong>, helping aspiring developers
              understand visual scripting and apply it to practical
              gameplay systems.
            </p>

            <p className="mt-20">
              From navigating the Unreal Engine interface and
              understanding Blueprint classes to building UI systems,
              implementing simple AI, and working with Timelines and
              Lerp nodes, the session focused on turning core concepts
              into practical development skills.
            </p>
          </div>
        </div>
      </div>

      {/* Topics Covered */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mt-40">
            <h5 className="fw-600">What We Covered</h5>
          </div>

          <div className="unorder-list mt-20 mb-30">
            <ul className="rest">
              <li>Unreal Engine navigation and Blueprint fundamentals</li>
              <li>Blueprint classes, events, and gameplay logic</li>
              <li>UI development and player interaction</li>
              <li>Simple AI behaviors and logic</li>
              <li>Timelines, Lerp nodes, and smooth transitions</li>
            </ul>
          </div>

          <div className="text">
            <p>
              My goal was to make these concepts approachable through
              practical examples, encouraging participants to
              experiment, ask questions, and build confidence in
              their own game development journey.
            </p>
          </div>
        </div>
      </div>

      {/* Student Feedback */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mt-50">
            <h5 className="fw-600">Student Feedback</h5>
          </div>

          <div className="text mt-20">
            <p>
              Teaching is more than explaining how a tool works.
              It is about helping others understand the concepts
              and giving them the confidence to apply what they learn.
            </p>
          </div>

          <div className="post-qoute mt-30">
            <h6 className="fz-20">
              <span className="l-block">
                "It was great session, ur teaching skill are very nice."
              </span>
              <span className="sub-title mt-20 mb-0">
                — Tanisha Wari
              </span>
            </h6>
          </div>

          <div className="post-qoute mt-30">
            <h6 className="fz-20">
              <span className="l-block">
                "The lecture was crazy deep "
              </span>
              <span className="sub-title mt-20 mb-0">
                — Ritesh Mohite
              </span>
            </h6>
          </div>

          <div className="post-qoute mt-30">
            <h6 className="fz-20">
              <span className="l-block">
                "It was great learning the process of creating games"
              </span>
              <span className="sub-title mt-20 mb-0">
                — Ishan Kakade
              </span>
            </h6>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="title mt-50">
            <h5 className="fw-600">
              Sharing Knowledge, Building Developers
            </h5>
          </div>

          <div className="text mt-20">
            <p>
              Through Rural Games Studio's Weekly Learning Sessions,
              I aim to share practical development knowledge, support
              aspiring game developers, and contribute to a stronger
              game development community.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Content;
