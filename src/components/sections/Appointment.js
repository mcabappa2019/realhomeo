/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import validator from 'validator';

const Appointment = () => {
  const [mailId, setMailId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [resp, setResp] = useState(null);
  const [sending, setSending] = useState(false);

  const resetForm = () => {
    setMailId('');
    setName('');
    setPhone('');
    setMsg('');
  };

  const submitContact = async () => {
    try {
      if (
        !validator.isEmail(mailId) ||
        validator.isEmpty(name) ||
        validator.isEmpty(msg) ||
        msg.length < 20 ||
        name.length < 5 ||
        phone.length > 12
      ) {
        return;
      }
      setSending(true);
      const data = {
        email: mailId,
        name: name,
        phone: phone,
        message: msg,
      };
      await fetch('/api/emails/appointment', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((msg) => {
          setResp(msg);
        });
      setSending(false);
      resetForm();
    } catch (e) {
      // console.log(e);
      setSending(false);
    }
  };

  return (
    <>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <section className="tm-relative tm-gray-bg">
        <div className="tm-half-section-bg right">
          <img src="/assets/image/appointment-bg.webp" alt="about hafl bg" />
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
              <form>
                <div id="tm-alert1"></div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uname"
                    name="uname"
                    placeholder="Full Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    onChange={(e) => setMailId(e.target.value)}
                    value={mailId}
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
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  <span className="bar"></span>
                </div>
                {/* <div className="tm-form-field">
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
                </div> */}

                <div className="tm-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    id="umsg"
                    name="umsg"
                    placeholder="Your Message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                  <span className="bar"></span>
                </div>
                <div className="empty-space col-xs-b10"></div>
                <div className="tm-form-field">
                  {sending ? (
                    <button
                      className="tm-btn1 tm-reverse"
                      type="button"
                      id="submit"
                      name="submit"
                    >
                      <span>SENDING REQUEST..</span>
                    </button>
                  ) : (
                    <button
                      className="tm-btn1 tm-reverse"
                      type="button"
                      id="submit"
                      name="submit"
                      onClick={submitContact}
                      disabled={sending}
                    >
                      <span>SEND REQUEST</span>
                    </button>
                  )}
                </div>
              </form>
              {resp && (
                <span className="h6 py-4 text-white">
                  Thanks, We will contact you soon.
                </span>
              )}
              <div className="empty-space col-md-b60 col-xs-b70"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Appointment);
