import React from 'react';
import Link from 'next/link';
import NextImageLoader from '../utils/NextImageLoader';

const AdvBanner = () => {
  return (
    <section className="highlight">
      <div className=" container text-center  py-5">
        <div className="h3 text-uppercase">Real Homoeopathy</div>
        <div className="h1 text-uppercase">e-Learning Program</div>
        <div className="h4 text-uppercase mb-3">Session 2023-2024</div>
        <div className="row justify-content-center mb-4">
          {/* <div className="col-lg-3 md-6 text-center">
              <img src="/assets/image/iso-medel.webp" alt="" /> <br />
            </div> */}
          <div className="col-lg-2 md-3 text-center">
            <NextImageLoader src="/assets/image/Logo_RH.webp" alt="" />
          </div>
          {/* <div className="col-lg-3 md-6 text-center">
              <img src="/assets/image/iso-medel.webp" alt="" />
            </div> */}
        </div>

        <div className="h1 text-uppercase">Admission is going on</div>
        <div className=" my-4 d-flex justify-content-center">
          <Link href="/eLearning">
            <a
              className="tm-btn1 rounded-0 "
              style={{ border: '1px solid #fff' }}
            >
              APPLY NOW
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvBanner;
