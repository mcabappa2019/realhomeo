import React, { useState } from 'react';
import Link from 'next/link';
import MainDrawer from '../menu/MainDrawer';

const Header = () => {
  const [openMainDwr, setOpenMainDwr] = useState(false);

  return (
    <>
      <header className="tm-header3">
        <div className="tm-site-header">
          <div className="tm-header-info-wrap d-none d-lg-flex ">
            <div
              className="container tm-header-info d-flex justify-content-between"
              style={{ zIndex: '3' }}
            >
              <div className="tm-footer-social-list justify-content-end ms-5 w-25 gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100063829103833"
                  target="_blank"
                  rel="noreferrer"
                  className="tm-social-btn "
                >
                  <i className="fa fa-facebook-square"></i>
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC9CtWIECLn1G70gZk0lZZHg"
                  target="_blank"
                  rel="noreferrer"
                  className="tm-social-btn "
                >
                  <i className="fa fa-youtube-square"></i>
                  <i className="fa fa-youtube-square"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="tm-social-btn "
                >
                  <i className="fa fa-twitter-square"></i>
                  <i className="fa fa-twitter-square"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fa fa-phone"></i>(91) - 9564385818
                </a>
                <a href="#">
                  <i className="fa fa-envelope"></i>info@tirh.org
                </a>
              </div>
            </div>
          </div>
          <div className="tm-header-menu">
            <div className="container tm-header-menu-container">
              <div className="tm-site-branding">
                {/* <!-- For Image Logo --> */}
                <Link href="/">
                  <a className="tm-logo-link">
                    <img
                      src="/assets/image/logo.webp"
                      alt=""
                      className="tm-logo"
                    />
                  </a>
                </Link>
                {/* <!-- For Site Title --> */}
                {/* <!-- <span className="tm-site-title">
                        <a href="index.html">Trustlife</a>
                        </span> --> */}
              </div>
              <nav className="tm-primary-nav tm-onepage-nav d-none d-lg-block">
                <ul className="tm-primary-nav-list">
                  <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent">
                    <Link href="/">
                      <a className="nav-link tm-smooth-move">HOME</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/aboutUs">
                      <a className="nav-link tm-smooth-move">ABOUT</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/contactUs">
                      <a className="nav-link tm-smooth-move">CONTACT</a>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link href="/gallery">
                      <a className="nav-link tm-smooth-move">GALLERY</a>
                    </Link>
                  </li>

                  <li className="menu-item menu-item-has-children">
                    <Link href="/newsArticle">
                      <a className="nav-link tm-smooth-move">NEWS & ARTICLES</a>
                    </Link>
                    {/* <ul>
                    <li className="menu-item">
                      <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                    </li>
                    <li className="menu-item">
                      <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                    </li>
                    <li className="menu-item">
                      <a href="blog-full-width.html">Blog Full Width</a>
                    </li>
                    <li className="menu-item">
                      <a href="blog-details-right-sidebar.html">
                        Single Blog Image Post
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="blog-details-left-sidebar.html">
                        Single Blog Slider Post
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="blog-details-full-width.html">
                        Single Blog Video Post
                      </a>
                    </li>
                  </ul> */}
                  </li>

                  <li className="menu-item">
                    <Link href="/eLearning">
                      <a className="nav-link tm-smooth-move">E-LEARNING</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/eClinic">
                      <a className="nav-link tm-smooth-move">E-CLINIC</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className="me-4 d-block d-lg-none"
                onClick={() => {
                  setOpenMainDwr(true);
                }}
              >
                <i className="h4 icofont icofont-navigation-menu"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MainDrawer openDrawer={openMainDwr} requestToClose={setOpenMainDwr} />
    </>
  );
};

export default Header;
