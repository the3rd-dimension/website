import React from 'react';
import ContactForm from '@/components/Contact/ContactForm';

function Form() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="full-width">
              <div className="sec-head text-center mb-80">
                <span className="sub-title mb-15 opacity-8">- Contact Us</span>
                <h3 className="text-u fz-50">Get In Touch.</h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form