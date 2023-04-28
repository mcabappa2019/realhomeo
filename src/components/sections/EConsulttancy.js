import Link from 'next/link';
import React from 'react';
import UnderConstruction from './UnderConstruction';

const EConsulttancy = () => {
  return (
    <section className="">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2 className="mb-3">
          <b>
            <span className="highlight ">REAL HOMOEO ONLINE CONSULTANCY</span>
          </b>
        </h2>
        <h3>
          <b>
            <span>PAID ONLINE CONSULTANCY SERVICE</span>
            <br />
            <span>FROM</span>
            <br />
            <span className="highlight">BEST DOCTORS OF TIRH</span>
          </b>
        </h3>
        <div className=" text-center text-uppercase mt-4">
          <h3>
            <b>
              <span className="highlight">ONLINE</span>BOOKING SYSTEM
            </b>
          </h3>
        </div>

        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>

      <div className="container">
        <UnderConstruction />
      </div>
    </section>
  );
};

export default EConsulttancy;
