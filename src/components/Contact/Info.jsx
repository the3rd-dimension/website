import React from 'react';
import SocialLinks from '@/components/Common/SocialLinks';
import { contactDetails } from '@/data/contact';

function Info() {
  return (
    <section className="info-contact section-padding sub-bg pt-0">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <span className="sub-title mb-15 opacity-8">- Contact Info</span>
          <h3 className="text-u fz-50">Contact</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50 md-mb50">
              <span className="sub-title opacity-8 mb-5">Email :</span>
              <h6><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50">
              <span className="sub-title opacity-8 mb-5">Location :</span>
              <h6>{contactDetails.location}</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <span className="sub-title opacity-8 mb-5">Phone :</span>
              <h6><a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a></h6>
            </div>
          </div>
          <div className="col-lg-12 mt-50">
            <div className="text-center">
              <span className="sub-title opacity-8 mb-15">Follow Me</span>
              <SocialLinks
                listClassName="rest social-text d-flex justify-content-center flex-wrap mt-15"
                itemClassName="mr-20"
                linkClassName="hover-this"
                labelClassName="hover-anim"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info