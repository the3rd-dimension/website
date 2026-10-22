import React from 'react';

function NextPrev() {
  return (
    <div className="next-prv-post flex mt-50">
      <div className="thumb-post">
        <a href="/blog-farmer-run-trailer">
          <span className="fz-12 text-u ls1 mb-15"><i className="pe-7s-angle-left"></i>Prev Post</span>
          <h6 className="fw-600 fz-16">Famer Run Trailer</h6>
        </a>
      </div>
      <div className="thumb-post ml-auto text-right">
        <a href="https://mythilo.io">
          <span className="fz-12 text-u ls1 mb-15">Next Post <i className="pe-7s-angle-right"></i></span>
          <h6 className="fw-600 fz-16">Mythilo Android</h6>
        </a>
      </div>
    </div>
  )
}

export default NextPrev