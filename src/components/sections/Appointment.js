import React from 'react';

const Appointment = () => {
  return (
    <>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <section className="tm-relative tm-gray-bg">
        <div className="tm-half-section-bg right">
          <img src="/assets/img/appointment-bg.webp" alt="about hafl bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 tm-hf-hide">
              <div className="empty-space col-md-b0 col-xs-b70"></div>
              <div
                className="tm-appointment-heading tm-gray-bg wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="tm-section-heading text-center">
                  <h2>
                    <span className="highlight">APPOINTMENT</span>
                  </h2>
                  {/* <div className="tm-section-seperator">
                  <span></span>
                </div> */}
                  <p>
                    If you wont to make an appointment with any specialist just
                    fill up the form with valid data and we will contact you via
                    phone for confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="empty-space col-md-b60 col-xs-b40"></div>
              <form
                method="POST"
                action=""
                className="tm-appointment-form"
                id="appointment-form"
              >
                <div id="tm-alert1"></div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uname"
                    name="uname"
                    placeholder="Full Name"
                    required
                  />
                  <span className="bar"></span>
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uemail"
                    name="uemail"
                    placeholder="Email Address"
                    required
                  />
                  <span className="bar"></span>
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="unumber"
                    name="unumber"
                    placeholder="Phone Number"
                    required
                  />
                  <span className="bar"></span>
                </div>
                <div className="tm-form-field">
                  <input
                    name="udate"
                    type="text"
                    id="udate"
                    placeholder="Booking Date"
                  />
                  <span className="bar"></span>
                  <div className="date-icon">
                    <i className="fa fa-calendar"></i>
                  </div>
                </div>

                <div className="tm-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    id="umsg"
                    name="umsg"
                    placeholder="Your Message"
                  ></textarea>
                  <span className="bar"></span>
                </div>
                <div className="empty-space col-xs-b10"></div>
                <div className="tm-form-field">
                  <button
                    className="tm-btn1 tm-reverse"
                    type="submit"
                    id="appointment-submit"
                    name="submit"
                  >
                    SEND REQUEST
                  </button>
                </div>
              </form>
              <div className="empty-space col-md-b60 col-xs-b70"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Appointment);
