import React from 'react';

function Header() {
  return (
    <header className="crev-header2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="text f-ultra-light">
              <span>TAMZID</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-long">
              <div className="iner-img">
                <img src="assets\imgs\Tamzididrish.png" alt="Tamzid Idrish" />
              </div> 
            </div>
          </div>
          <div className="col-lg-4">
            <p>Project Director | Unreal Engine 5<br/> Senior Programmer | Blender Artist</p>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="text text-lg text-center mt-50 f-bold">
              <span>IDRISH</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
