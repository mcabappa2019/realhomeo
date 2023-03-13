import React from 'react';
import NextImageLoader from '../src/components/utils/NextImageLoader';
const supportUs = () => {
  return (
    <div className="container py-5 tm-gray-bg">
      <h1 className="mb-5">
        <span className="highlight text-uppercase">Support us</span> to spread
        Real Homoeopathy & help people
      </h1>
      <div className="row d-flex" style={{ backgroundColor: '#3076a5' }}>
        <div
          className="col-md-12 col-lg-4 d-flex justify-content-center pt-5"
          style={{ backgroundColor: '#002856' }}
        >
          <h1 className="text-white">Donate Us</h1>
        </div>
        <div className="col-md-12 col-lg-8 p-5 ">
          <div className="mb-4 px-lg-5 mx-lg-5">
            <NextImageLoader src="/assets/image/UPI.png" />
          </div>
          <br />
          <br />

          <div className="mb-4 px-lg-5 mx-lg-5">
            <NextImageLoader src="/assets/image/SBI ACCOUNT.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default supportUs;
