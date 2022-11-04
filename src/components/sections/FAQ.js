import React from 'react';
import Link from 'next/link';

const FAQ = () => {
  return (
    <>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <section className="tm-gray-bg tm-overflow-hide">
        <div className="row">
          <div className="col-lg-6">
            {/* <!-- For Vimeo Video --> */}
            <div className="tm-about-video">
              <img src="/assets/image/video-bg.webp" alt="" />
              <div
                className="tm-video-button"
                data-video-id="63636954"
                data-channel="vimeo"
              >
                <i className="icofont icofont-play-alt-3"></i>
                <span className="tm-video-animaiton">
                  <span></span>
                </span>
              </div>
            </div>
            {/* <!-- For Youtube Video --> */}
            {/* <!-- <div className="tm-about-video tm-video-button" data-video-id='nImFZRtGeAQ'>
                  <img src="assets/image/tm-about-video-bg.webp" alt="">
                  <i className="video-icon"></i>
              </div> --> */}
          </div>
          <div className="col-lg-6">
            <div className="empty-space col-md-b60 col-xs-b65"></div>
            <div className="accordian-wrapper container">
              <h2 className="accordian-heading">Frequently Asked Questions</h2>
              <div className="accordian">
                <div className="single-accordian">
                  <h3 className="accordian-head">What is Real Homoeopathy?</h3>
                  <div className="accordian-body">
                    in the “GO BACK” procedure of Real Homoeopathic therapeutic
                    system, patients are treated for their present complaints by
                    considering the “origin” of present complaints; never
                    depending on present signs and symptoms and different
                    pathological reports.
                  </div>
                </div>
                <div className="single-accordian">
                  <h3 className="accordian-head">
                    How we can learn Real Homoeopathy ?
                  </h3>
                  <div className="accordian-body">
                    We have training program [e-Learning program] on “Real
                    Homoeopathy” for both medical student & professionals.
                    Anybody can join this program. For More details, visit{' '}
                    <Link href="/eLearning">
                      <a>eLearning</a>
                    </Link>
                  </div>
                </div>
                <div className="single-accordian">
                  <h3 className="accordian-head">
                    All critical diseases can be treated by Real Homoeopathy?
                  </h3>
                  <div className="accordian-body">
                    Yes, almost all minor and critical diseases can be treated
                    by Real Homoeopathy treatment system. Such as hypertension,
                    diabetes, chronic renal failure, cardiac problem, liver
                    problem, problem in the brain, genetic disordered,etc.
                  </div>
                </div>
              </div>
            </div>
            <div className="empty-space col-md-b60 col-xs-b70"></div>
          </div>
        </div>
      </section>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
    </>
  );
};

export default FAQ;
