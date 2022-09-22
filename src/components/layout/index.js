import React from 'react';
import Footer from './footers/Footer';
import Header from './headers/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-content">{children}</div>
      <Footer />
      <div id="scrollup" />
    </>
  );
};

export default Layout;
