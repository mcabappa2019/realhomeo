import React from 'react';

const ELearning = () => {
  return (
    <section className="courses">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        {/* <h2>
            <b>Real Homeopathy</b>
          </h2> */}
        <h2>
          <b>
            <span className="highlight">e-Learning</span> Program
          </b>
        </h2>

        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-3 md-6 text-center">
              <img src="/assets/img/iso-medel.webp" alt="" /> <br />
            </div> */}
          <div className="col-lg-4 md-6 text-center">
            <img src="/assets/img/Logo_RH.webp" alt="" />
          </div>
          {/* <div className="col-lg-3 md-6 text-center">
              <img src="/assets/img/iso-medel.webp" alt="" />
            </div> */}
        </div>
        {/* <!-- .row --> */}
      </div>

      <div className="container">
        <div className="row course d-flex">
          <div className="col-md-12 col-lg-6 course-preview">
            <h5>Course For</h5>
            <h4 className="text-uppercase">All Students</h4>
            <span className="d-flex justify-content-between mt-5">
              <h5>Duration:</h5>
              <h5>2 Years</h5>
            </span>
            <span className="d-flex justify-content-between mt-1">
              <h5>Mode:</h5>
              <h5>ONLINE</h5>
            </span>
            <span className="d-flex justify-content-between my-1">
              <h5>Version:</h5>
              <h5>English & Hindi</h5>
            </span>
          </div>
          <div className="col-md-12 col-lg-6 course-info">
            <h6 className="text-end">Trusted by 1100 Students</h6>
            <h2>
              <b>DHP & M.</b>
            </h2>
            <h5>
              Diploma in Homoeopathic
              <br /> Philosophy and Medicine.
            </h5>

            <div className="tm-about-btn details-btn">
              <a href="#" className="tm-btn1">
                APPLY NOW
              </a>
            </div>
            <div className="iso-img">
              <img src="/assets/img/iso-medel.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="row course d-flex">
          <div className="col-md-12 col-lg-6 course-preview">
            <h5>Course For</h5>
            <h4 className="text-uppercase">Registered Physicians</h4>
            <span className="d-flex justify-content-between mt-5">
              <h5>Duration:</h5>
              <h5>24 Weeks</h5>
            </span>
            <span className="d-flex justify-content-between mt-1">
              <h5>Mode:</h5>
              <h5>ONLINE</h5>
            </span>
            <span className="d-flex justify-content-between my-1 ">
              <h5>Version:</h5>
              <h5>English & Hindi</h5>
            </span>
          </div>

          <div className="col-md-12 col-lg-6 course-info">
            <h6 className="text-end">Trusted by 450 Doctors</h6>
            <h2>
              <b>ACRH</b>
            </h2>
            <h5>
              Advanced Course of <br />
              Real Homoeopathy.
            </h5>
            <div className="tm-about-btn details-btn">
              <a href="#" className="tm-btn1">
                APPLY NOW
              </a>
            </div>
            <div className="iso-img">
              <img src="/assets/img/iso-medel.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELearning;
