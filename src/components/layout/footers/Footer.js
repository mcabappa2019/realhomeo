import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="tm-overflow-hidden" style={{ marginTop: '200px' }}>
      <div className="tm-gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tm-footer-social">
                <h2>Follow Us</h2>
                <div className="tm-footer-social-list">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063829103833"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-btn blue"
                  >
                    <i className="fa fa-facebook-square"></i>
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC9CtWIECLn1G70gZk0lZZHg"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-btn blue"
                  >
                    <i className="fa fa-youtube-square"></i>
                    <i className="fa fa-youtube-square"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="tm-social-btn blue"
                  >
                    <i className="fa fa-linkedin-square"></i>
                    <i className="fa fa-linkedin-square"></i>
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
              {/* <span>Quick Links</span> */}

              <hr />
              <div className="row  footer-menu d-flex">
                <div className="col-4">
                  <Link href="/">
                    <a>HOME</a>
                  </Link>
                  <Link href="/aboutUs">
                    <a>About Us</a>
                  </Link>
                  <Link href="/contactUs">
                    <a>Contact Us</a>
                  </Link>
                  <Link href="/supportUs">
                    <a>Support Us</a>
                  </Link>
                </div>
                <div className=" col-4">
                  <Link href="/eLearning">
                    <a>E-LEARNING</a>
                  </Link>
                  <Link href="/eClinic">
                    <a>E-CLINIC</a>
                  </Link>
                  <Link href="/eConsult">
                    <a>e-consultancy </a>
                  </Link>
                </div>
                <div className=" col-4">
                  <Link href="/gallery">
                    <a>GALLERY</a>
                  </Link>
                  <Link href="/newsArticle">
                    <a>NEWS & ARTICLES</a>
                  </Link>
                  {/* <Link href="/">
                    <a>Contact Us</a>
                  </Link> */}
                </div>
              </div>
              <hr />
              <p className="tm-copyright">
                Copyright © 2022 TIRH | Designed by bdsProf.{' '}
              </p>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="tm-footer-hotline d-none d-lg-block">
                <div className="tm-footer-hotline-in">
                  <div className="tm-phone-icon ">
                    <img src="/assets/image/iso-9001-2015.webp" alt="" />
                  </div>
                  <h3>THE INSTITUTE OF</h3>
                  <h2 className="text-uppercase">REAL Homoeopathy</h2>
                  <span>(91) - 9564385818 | care@tirh.org</span>
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
