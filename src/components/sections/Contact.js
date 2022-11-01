import React from 'react';

const Contact = () => {
  return (
    <section className="tm-gray-bg" id="contact ">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2>
          Get In <span className="highlight">Touch</span>
        </h2>
        {/* <div className="tm-section-seperator">
            <span></span>
          </div> */}
        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div id="tm-alert"></div>
            <form
              action=""
              className="row tm-contact-form"
              method="post"
              id="contact-form"
            >
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="name" name="name" required />
                  <label>Full Name</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="email" name="email" required />
                  <label>Email Address</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="subject" name="subject" required />
                  <label>Subject</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="phone" name="phone" required />
                  <label>Phone</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tm-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    id="msg"
                    name="msg"
                    required
                  ></textarea>
                  <label>Your Message</label>
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  className="tm-btn1"
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  <span>SEND MESSAGE</span>
                </button>
                <div className="empty-space col-lg-b30"></div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="empty-space col-md-b0 col-xs-b40"></div>
            <div className="tm-contact-info">
              <div className="tm-single-contact">
                <i className="fa fa-map-marker"></i> <h3>Address</h3>
                <p>
                  SURYA TORON APPARTMENT 296,PARNASHREE PALLY, <br />
                  KOL-60, INDIA
                </p>
              </div>
              <div className="empty-space col-xs-b25"></div>
              <div className="tm-single-contact">
                <i className="fa fa-whatsapp"></i> <h3>Whatsapp</h3>
                <p>
                  91-861-764-0395 <br /> 91-956-438-5818 <br /> 91-700-122-0605
                </p>
              </div>
              <div className="empty-space col-xs-b25"></div>
              <div className="tm-single-contact">
                <i className="fa fa-envelope"></i> <h3>Email</h3>
                <p>
                  info@tirh.com <br />
                </p>
              </div>
              <div className="empty-space col-xs-b25"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-md-b70 col-xs-b40"></div>
    </section>
  );
};

export default Contact;
