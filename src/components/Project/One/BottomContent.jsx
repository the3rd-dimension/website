import React from 'react';

function BottomContent() {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text">
              <h2 className="mb-50">The Outcome</h2>
              <h5 className="mb-30 fw-400">MMTPS got a mega update in version 3.4  with complete visual remap, new features, system reworks and bug fixes.</h5>
              <p className="fz-18">New showcase environment, new mission level and story, swimming system preview, weapon scopes remastered with modularity, zooming system and more. The blueprint codes are now more commented and easy to understand. I'm still working on next updates alongside soriox to bring new features to this project for developers. </p>
            </div>
            <a href="https://www.patreon.com/cw/Soriox" target="_blank" className="btn-curve btn-bord radius-30 mt-50">
              <span><h5> Download from Patreon</h5></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BottomContent