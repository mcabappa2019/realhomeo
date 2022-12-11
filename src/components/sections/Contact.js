import React, { useState } from 'react';
import validator from 'validator';

const Contact = () => {
  const [mailId, setMailId] = useState('');
  const [name, setName] = useState('');
  const [subjectText, setSubjectText] = useState('');
  const [msg, setMsg] = useState('');
  const [resp, setResp] = useState(null);
  const [sending, setSending] = useState(false);

  const resetForm = () => {
    setMailId('');
    setName('');
    setSubjectText('');
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
        subjectText.length < 10
      ) {
        return;
      }
      setSending(true);
      const data = {
        email: mailId,
        name: name,
        subject: subjectText,
        message: msg,
      };
      await fetch('/api/emails/contactus', {
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
      console.log(e);
      setSending(false);
    }
  };

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
              <div className="col-lg-12">
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <label>Full Name (minimum 5 letter)</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setMailId(e.target.value)}
                    value={mailId}
                  />
                  <label>Email Address</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    onChange={(e) => setSubjectText(e.target.value)}
                    value={subjectText}
                  />
                  <label>Subject (minimum 10 letter)</label>
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="phone" name="phone" required />
                  <label>Phone</label>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="tm-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    id="msg"
                    name="msg"
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                  <label>Your Message (minimum 20 letter)</label>
                </div>
              </div>
              <div className="col-lg-12">
                {sending ? (
                  <button
                    className="tm-btn1"
                    type="button"
                    id="submit"
                    name="submit"
                  >
                    <span>SENDING MESSAGE..</span>
                  </button>
                ) : (
                  <button
                    className="tm-btn1"
                    type="button"
                    id="submit"
                    name="submit"
                    onClick={submitContact}
                    disabled={sending}
                  >
                    <span>SEND MESSAGE</span>
                  </button>
                )}

                <div className="empty-space col-lg-b30"></div>
              </div>
            </form>
            {resp && (
              <label className="py-4">Thanks, We will contact you soon.</label>
            )}
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
                  91-956-438-5818 <br /> 91-700-122-0605
                </p>
              </div>
              <div className="empty-space col-xs-b25"></div>
              <div className="tm-single-contact">
                <i className="fa fa-envelope"></i> <h3>Email</h3>
                <p>
                  care@tirh.org <br />
                  care.tirh@gmail.com <br />
                  aragyavaban@gmail.com <br />
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
