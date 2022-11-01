import React from 'react';

const Footer = () => {
  return (
    <footer className="tm-overflow-hidden">
      <div className="tm-gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tm-footer-social">
                <h2>Follow Us</h2>
                <div className="tm-footer-social-list">
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-facebook-square"></i>
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-google-plus-square"></i>
                    <i className="fa fa-google-plus-square"></i>
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-twitter-square"></i>
                    <i className="fa fa-twitter-square"></i>
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-linkedin-square"></i>
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                  <a href="#" className="tm-social-btn blue">
                    <i className="fa fa-skype"></i>
                    <i className="fa fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tm-site-footer ">
        <div className="container">
          <div className="row row-sm-reverce">
            <div className="col-md-6 col-lg-6">
              <p className="tm-copyright">
                Copyright © 2022 TIRH | Designed by bdsProf.{' '}
              </p>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="tm-footer-hotline d-none d-lg-block">
                <div className="tm-footer-hotline-in">
                  <div className="tm-phone-icon ">
                    <img src="/assets/img/iso-9001-2015.webp" alt="" />
                  </div>
                  <h3>THE INSTITUTE OF</h3>
                  <h2>REAL HOMEOPATHY</h2>
                  <span>(91) - 7001220605 | info@tirh.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
