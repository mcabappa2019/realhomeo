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
        <div className="col-md-12 col-lg-8  " style={{ padding: '50px 100px' }}>
          <div className="mb-4" style={{ backgroundColor: '#fff' }}>
            <NextImageLoader src="/assets/image/UPI.png" />
          </div>
          <div
            className="mb-4"
            style={{ backgroundColor: '#fff', marginTop: '100px' }}
          >
            <NextImageLoader src="/assets/image/SBI ACCOUNT.png" />
          </div>
          <div className="mb-4" style={{ backgroundColor: '#fff' }}>
            <NextImageLoader src="/assets/image/HDFC ACCOUNT.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default supportUs;
