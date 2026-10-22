import React from 'react';

function AuthorArea() {
  return (
    <div className="author-area mt-50 pb-50 bord-thin-bottom">
      <div className="flex">
        <div className="author-img mr-30">
          <div className="img">
            <img src="/assets/imgs/profile.jpg" alt="" className="circle-img" />
          </div>
        </div>
        <div className="cont valign">
          <div className="full-width">
            <h6 className="fw-600 mb-10">Tamzid Idrish</h6>
            <p>Learning something new every day</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorArea