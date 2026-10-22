import React from 'react'

function BottomContent() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="img">
              <img src="/assets/imgs/works/projects/mythilo/mythilo_pricing.png" alt="" />
            </div>
            <div className="cont section-padding">
              <div className="row">
                <div className="col-md-3 sm-mb30">
                  <h6>The Story</h6>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="text">
                    <p>With the increasing popularity of mobile gaming, developers need a tool that can help them manage their projects, collaborate with team members, and stay organized. Mythilo's Android app aims to provide a seamless experience for mobile game development, allowing developers to access their projects, track progress, and collaborate with team members on-the-go. By porting Mythilo to Android, the development team hopes to expand the reach of their platform and make it more accessible to a wider range of game developers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="/assets/imgs/works/projects/mythilo/mythilo_tasks.png" alt="" />
            </div>
            <div className="cont section-padding">
              <div className="row">
                <div className="col-md-3 offset-lg-2 sm-mb30">
                  <h6>Approach</h6>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="text">
                    <p>Mythilo's Android app is built using Capasitor JS and React Native. The platform had a smooth and responsive user interface, making the android port easier. Firstly the web application was wrapped into android using Capasitor Js. Then added persistence to store data locally and keep the user signed in. Most importantly, took care of routing and other security aspects. Polishing it to perfection.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="/assets/imgs/works/projects/mythilo/MobileAppBanner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BottomContent