import React from 'react';

const Header = () => {
  return (
    <header className="tm-header3">
      <div className="tm-site-header">
        <div className="tm-header-info-wrap">
          <div className="container tm-header-info">
            <a href="#">
              <i className="fa fa-phone"></i>1-800-915-6270
            </a>
            <a href="#">
              <i className="fa fa-envelope"></i>info@trustlife.com
            </a>
          </div>
        </div>
        <div className="tm-header-menu">
          <div className="container tm-header-menu-container">
            <div className="tm-site-branding">
              {/* <!-- For Image Logo --> */}
              <a href="index.html" className="tm-logo-link">
                <img src="assets/img/logo.png" alt="" className="tm-logo" />
              </a>
              {/* <!-- For Site Title --> */}
              {/* <!-- <span className="tm-site-title">
                        <a href="index.html">Trustlife</a>
                        </span> --> */}
            </div>
            <nav className="tm-primary-nav tm-onepage-nav">
              <ul className="tm-primary-nav-list">
                <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent">
                  <a href="#home" className="nav-link tm-smooth-move">
                    HOME
                  </a>
                  <ul>
                    <li className="menu-item current-menu-item">
                      <a href="index.html">Home1 (Default Version)</a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-2.html">
                        Home2 (Animation Version)
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-3.html">
                        Home3 (Full Width Banner)
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-4.html">Home4 (Ripple Version)</a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-5.html">Home5 (Parallax Version)</a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-6.html">Home6 (Slider Version)</a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-7.html">
                        Home7 (Youtube Background)
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="home-version-8.html">Home8 (Minimal Version)</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#about" className="nav-link tm-smooth-move">
                    ABOUT
                  </a>
                </li>
                {/* <li className="menu-item">
                  <a href="#department" className="nav-link tm-smooth-move">
                    DEPARTMENT
                  </a>
                </li> */}
                <li className="menu-item">
                  <a href="#doctor" className="nav-link tm-smooth-move">
                    DOCTOR
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#gallery" className="nav-link tm-smooth-move">
                    GALLERY
                  </a>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#blog" className="nav-link tm-smooth-move">
                    BLOG
                  </a>
                  <ul>
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
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#contact" className="nav-link tm-smooth-move">
                    CONTACT
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#appointment" className="nav-link tm-smooth-move">
                    APPOINTMENT
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
