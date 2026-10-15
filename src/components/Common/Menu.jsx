"use client";
import React from 'react';

function Menu() {
  function closeMenu() {
    document.querySelector('.hamenu').classList.remove("open");
  }

  function handleMouseEnter(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
    event.currentTarget.style.opacity = "1";
  }

  function handleMouseLeave(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
  }

  function handleOpenDMenu(event) {
    document.querySelector(".main-menu").classList.add("gosub");
    event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
  }

  function handleCloseDMenu() {
    document.querySelector(".main-menu").classList.remove("gosub");
    document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
  }

  return (
    <div className="hamenu valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/" className="link animsition-link" onClick={closeMenu}><span className="nm">01.</span>Intro</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/about" className="link animsition-link" onClick={closeMenu}><span className="nm">02.</span>About</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/work" className="link animsition-link" onClick={closeMenu}><span className="nm">03.</span>Experiences</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="cont-info">
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">Based In</h6>
                <p className="fw-400 fz-18">United States</p>
              </div>
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">How to Connect</h6>
                <p className="fw-400 fz-18">hello@soriox.com</p>
              </div>
              <div className="bottom">
                <h6 className="text-u fw-600 mb-20">Follow Us</h6>
                <ul className="rest social-text d-flex fz-13">
                  <li className="mr-20">
                    <a href="https://www.youtube.com/channel/UCJJ2v-f2pCZAkeo2pLEhkww" className="hover-this"><span className="hover-anim">YouTube</span></a>
                  </li>
                  <li className="mr-20">
                    <a href="https://www.linkedin.com/in/soriox/" className="hover-this"><span className="hover-anim">LinkedIn</span></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/soriox.art/" className="hover-this"><span className="hover-anim">Instagram</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu