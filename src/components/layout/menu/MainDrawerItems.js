import React from 'react';
import Link from 'next/link';

const MainDrawerItems = () => {
  return (
    <div className="main-drawer">
      <ul className="drawer">
        <li className="menu-item">
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
    </div>
  );
};

export default React.memo(MainDrawerItems);
