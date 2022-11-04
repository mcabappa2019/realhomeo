import React from 'react';
import NextImageLoader from '../utils/NextImageLoader';
const UnderConstruction = () => {
  return (
    <div className="container">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8">
          <NextImageLoader src="/assets/image/under-construction.jpg" />
          <div className="h1 pt-5 text-uppercase text-center">
            Under Construction
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
