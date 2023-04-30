import Link from 'next/link';
import React, { useState } from 'react';
import NextImageLoader from '../utils/NextImageLoader';
import EclinicApplicationForm from './EclinicApplicationForm';

const EClinicSection = () => {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <section className="">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        {/* <h2>
            <b>Real Homoeopathy</b>
          </h2> */}
        <h2 className="mb-3">
          <b>
            <span className="highlight ">TIRH e-Clinic ( ARAGYA VABAN )</span>
          </b>
        </h2>
        <h3>
          UNDER -{' '}
          <span className="highlight ">TIRH E-CLINIC MANAGEMENT SYSTEM</span>
        </h3>
        <div className=" text-center text-uppercase">
          <b>
            An initiative from TIRH to reach people and serve Real Homoeopathic
            Treatment
          </b>
        </div>

        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      {!displayForm ? (
        <div className="container">
          <div className="row course d-flex">
            <div className="col-md-12 col-lg-6 course-preview m-auto p-4">
              <h3>
                <b>TIRH E-CLINIC</b>
              </h3>
              <hr />
              <span className="ps-4">About TIRH e-Clinic</span>
              <hr />
              <span className="ps-4">Minimum Requirements</span>
              <hr />
              <span className="ps-4">Terms & Conditions</span>
              <hr />
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center">
              <div className="m-auto p-4 ">
                <div className="tm-about-btn details-btn">
                  <a className="tm-btn1" onClick={() => setDisplayForm(true)}>
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <EclinicApplicationForm setDisplayForm={setDisplayForm} />
        </div>
      )}
    </section>
  );
};

export default EClinicSection;
