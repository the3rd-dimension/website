"use client";
import React from 'react';

function TopContent() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">The <br /> Application</h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">Mythilo is a powerful tool for game development that provides a single workspace for worldbuilding, tasks, playtesting, and a public page for your game. It's free for small teams and requires no credit card.</h5>
              <p className="fz-18">Founded by Joshua Tulloch in October 2026, Mythilo has been gaining attention from the gaming community and has become a popular tool for game development. It started as an web application with features to plan, collaborate, and share your game development process with team and audience. But we wanted to allow users to manage their workspace from anywhere, anytime. So we decided to make an android port after lots of requests from audiences.</p>
              <h3><br/>Try out: <a href="https://mythilo.io" target="_blank" rel="noopener noreferrer"> <u>mythilo.io</u></a></h3>
            </div>
            <div className="accordion bord mt-100">

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".1s">
                <div className="title">
                  <h4 className="fw-300">Dream It</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Before there's a task list, there's a world. With Mythilo, you can create a roster of characters and cast, a lore bible that your team will actually open, and a moodboard that stays organized. You can also create quests, scenes, and dialogue, and manage your audio bank with ease.</p>
                </div>
              </div>

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".3s">
                <div className="title">
                  <h4 className="fw-300">Build It</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Mythilo makes it easy to keep production moving with tasks, schedules, and assets. You can track time against tasks, manage asset links, and use our AI-powered import feature to turn design docs into projects. You can also manage teams and roles, and get analytics on tasks, devlog, roadmap, and feedback.</p>
                </div>
              </div>

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".5s">
                <div className="title">
                  <h4 className="fw-300">Ship It</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Once you've built your game, Mythilo makes it easy to tell the world and listen to the players. You can create a public page for your game, share episodes with screenshots and a link to try the build, and manage playtesting, bug reports, and player feedback. You can also create custom surveys and log shipped builds.</p>
                </div>
              </div>

              <div className="item wow fadeInUp" onClick={openAccordion} data-wow-delay=".7s">
                <div className="title">
                  <h4 className="fw-300">Anywhere, Anytime</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Mythilo allows you to access your projects from anywhere, at any time. Whether you're on the go or at your desk, you can stay connected to your game development workflow. You can access your projects from your desktop, mobile, or even your browser.</p>
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