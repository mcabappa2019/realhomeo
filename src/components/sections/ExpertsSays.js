import React from 'react';
import NextImageLoader from '../utils/NextImageLoader';

const ExpertsSays = () => {
  return (
    <section id="doctor">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2>
          What <span className="highlight">Experts SAY</span>
        </h2>
        {/* <div className="tm-section-seperator">
            <span></span>
          </div> */}
        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="">
              <div className="tm-team-member d-block d-lg-flex my-3">
                <div className="tm-member-hover">
                  <a href="#" className="tm-member-thumb">
                    <NextImageLoader src="/assets/img/expert-1.jpg" alt="" />
                  </a>

                  {/* <!-- .tm-member-social-btn-wrap --> */}
                </div>
                <div className="tm-member-meta tm-gray-bg text-center w-100 ">
                  <h3 className="tm-member-name">
                    <a href="#">Prof. Dr. Achal Singhal</a>
                  </h3>
                  <span className="tm-member-speciality">
                    MD DM Cardiologist, USA
                  </span>
                  <p className="mt-3" style={{ textAlign: 'justify' }}>
                    Real homeopathy is very unique that it goes to the very root
                    of Deeper mind and consciousness and Genetics to address the
                    causation of disease at Gene, Energy and consciousness
                    levels. High potency Homeopathy remedies cause Deeper
                    healing of a patient’s symptoms and diseases. The system is
                    so deep that not only present symptoms are healed but Life
                    long problems and even Genetic transmission of diseases from
                    Previous multiple generations is also healed.
                  </p>
                </div>
              </div>
              {/* <!-- .tm-team-member --> */}
              <div className="tm-team-member d-block d-lg-flex my-3">
                <div className="tm-member-hover">
                  <a href="#" className="tm-member-thumb">
                    <NextImageLoader src="/assets/img/expert-1.jpg" alt="" />
                  </a>

                  {/* <!-- .tm-member-social-btn-wrap --> */}
                </div>
                <div className="tm-member-meta tm-gray-bg text-center w-100">
                  <h3 className="tm-member-name">
                    <a href="#">Prof. Dr. Anil Singhal</a>
                  </h3>
                  <span className="tm-member-speciality">
                    MD DM Neurologist & Holistic physician - USA
                  </span>
                  <p className="mt-3" style={{ textAlign: 'justify' }}>
                    Real homeopathy is very unique that it goes to the very root
                    of Deeper mind and consciousness and Genetics to address the
                    causation of disease at Gene, Energy and consciousness
                    levels. High potency Homeopathy remedies cause Deeper
                    healing of a patient’s symptoms and diseases. The system is
                    so deep that not only present symptoms are healed but Life
                    long problems and even Genetic transmission of diseases from
                    Previous multiple generations is also healed.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- .member-carousel --> */}
          </div>
        </div>
      </div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
    </section>
  );
};

export default ExpertsSays;
