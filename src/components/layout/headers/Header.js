import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="tm-header3">
      <div className="tm-site-header">
        <div className="tm-header-info-wrap">
          <div className="container tm-header-info">
            <a href="#">
              <i className="fa fa-phone"></i>(91) - 8617640395 | (91) -
              7001220605
            </a>
            <a href="#">
              <i className="fa fa-envelope"></i>info@tirh.com
            </a>
          </div>
        </div>
        <div className="tm-header-menu">
          <div className="container tm-header-menu-container">
            <div className="tm-site-branding">
              {/* <!-- For Image Logo --> */}
              <Link href="/">
                <a className="tm-logo-link">
                  <img src="assets/img/logo.png" alt="" className="tm-logo" />
                </a>
              </Link>
              {/* <!-- For Site Title --> */}
              {/* <!-- <span className="tm-site-title">
                        <a href="index.html">Trustlife</a>
                        </span> --> */}
            </div>
            <nav className="tm-primary-nav tm-onepage-nav">
              <ul className="tm-primary-nav-list">
                <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent">
                  <Link href="/">
                    <a className="nav-link tm-smooth-move">HOME</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <a href="#about" className="nav-link tm-smooth-move">
                    ABOUT
                  </a>
                </li>

                <li className="menu-item">
                  <a href="#doctor" className="nav-link tm-smooth-move">
                    COURSES
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#gallery" className="nav-link tm-smooth-move">
                    GALLERY
                  </a>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#blog" className="nav-link tm-smooth-move">
                    NEWS & ARTICLES
                  </a>
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
                  <a href="#contact" className="nav-link tm-smooth-move">
                    CONTACT
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#appointment" className="nav-link tm-smooth-move">
                    E-CLINIC
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
