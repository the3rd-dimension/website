import React from 'react';

function TopContent() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">The <br /> Project</h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">An UE5 development kit featuring advanced features for developing third person survival, horror or shooter games.</h5>
              <p className="fz-18">Mmtps was first developed by Joshua Soriox Tulloch as a survival kit dedicated to help both indie and studio game developers. Over the updates it has featured metahuman technology, vehicles, weapons, inventory, trowables, swimming, and more. The kit became considerably popular in the community due to it's modular, flexible and powerful system design. After the MMTPS 3 update there's been a need of extra maintanence and updates due to increased feature request from audiences. Thus I was hired to design the next updates and systems for mmtps as well as fixing the existing bugs in order to polish it for release.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopContent