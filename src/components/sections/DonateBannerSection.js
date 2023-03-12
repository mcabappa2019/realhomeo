import React from 'react';
import NextImageLoader from '../utils/NextImageLoader';
import Link from 'next/link';

const DonateBannerSection = () => {
  return (
    <section className="highlight">
      <div className=" container text-center  py-5">
        <div className="h3 text-uppercase">SUPPORT</div>
        <div className="h1 text-uppercase mb-5 pb-5">Real Homoeopathy</div>

        <div className="h1 text-uppercase">Donate Us</div>
        <div className=" my-4 d-flex justify-content-center">
          <Link href="/supportUs">
            <a
              className="tm-btn1 rounded-0 "
              style={{ border: '1px solid #fff' }}
            >
              DONATE
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateBannerSection;
