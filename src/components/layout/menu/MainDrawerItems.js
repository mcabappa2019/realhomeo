import React from 'react';
import Link from 'next/link';

const MainDrawerItems = () => {
  return (
    <div className="main-drawer">
      <ul className="drawer">
        <li className="menu-item ">
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
        <li className="menu-item">
          <Link href="/eConsult">
            <a className="nav-link tm-smooth-move">E-CONSULTANCY</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/supportUs">
            <a className="nav-link tm-smooth-move">SUPPORT US</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(MainDrawerItems);
