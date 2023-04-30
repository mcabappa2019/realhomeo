/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import validator from 'validator';

const EclinicApplicationForm = ({ setDisplayForm }) => {
  const [name, setName] = useState('');
  const [mailId, setMailId] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tirhRegId, setTirhRegId] = useState('');

  const [resp, setResp] = useState(null);
  const [sending, setSending] = useState(false);

  const resetForm = () => {
    setMailId('');
    setName('');
    setPhone('');
    setAddress('');
  };

  const submitRequest = async () => {
    try {
      if (
        !validator.isEmail(mailId) ||
        validator.isEmpty(name) ||
        validator.isEmpty(address) ||
        address.length < 20 ||
        name.length < 5 ||
        phone.length > 12
      ) {
        return;
      }
      setSending(true);
      const data = {
        name: name,
        email: mailId,
        phone: phone,
        address: address,
        tirhRegId: tirhRegId,
      };
      await fetch('/api/emails/eclinicApplication', {
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
      {/* <div className="empty-space col-md-b100 col-xs-b70"></div> */}
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
                    <span className="highlight">e-Clinic</span>
                    <br />
                  </h2>
                  <h4>
                    <span>Application Form</span>
                  </h4>
                  {/* <div className="tm-section-seperator">
                  <span></span>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="empty-space col-md-b60 col-xs-b40"></div>
              <form
                className="row eclinic-form tm-contact-form"
                id="contact-form"
              >
                <div id="tm-alert1"></div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uname"
                    name="uname"
                    // placeholder="Full Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <label>Full Name *</label>
                  {/* <span className="bar"></span> */}
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uemail"
                    name="uemail"
                    required
                    onChange={(e) => setMailId(e.target.value)}
                    value={mailId}
                  />
                  <label>Email Address *</label>
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="unumber"
                    name="unumber"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  <label>Phone Number *</label>
                  {/* <span className="bar"></span> */}
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="rnumber"
                    name="rnumber"
                    required
                    onChange={(e) => setTirhRegId(e.target.value)}
                    value={tirhRegId}
                  />
                  <label>TIRH Reg. Number (Roll) *</label>
                  {/* <span className="bar"></span> */}
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
                    id="address"
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                  <label>Full Address * (Minimum 20 Character)</label>
                </div>

                <div className="empty-space col-xs-b10"></div>
                <div className="tm-form-field justify-content-around d-flex">
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
                      onClick={submitRequest}
                      disabled={sending}
                    >
                      <span>SEND REQUEST</span>
                    </button>
                  )}
                  <button
                    className="tm-btn1 tm-reverse"
                    id="btnCancel"
                    name="btnCancel"
                    onClick={() => setDisplayForm(false)}
                  >
                    <span>CANCLE</span>
                  </button>
                </div>

                {resp && (
                  <span className="h6 py-4 ">
                    Thanks, We will contact you soon.
                  </span>
                )}
                {/* <div style={{ backgroundColor: '#fff', height: '30px' }}>
                  <div className="py-4 px-4" style={{ color: '#2caee2' }}>
                    Thanks, We will contact you soon.
                  </div>
                </div> */}
              </form>

              <div className="empty-space col-md-b60 col-xs-b70"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(EclinicApplicationForm);
