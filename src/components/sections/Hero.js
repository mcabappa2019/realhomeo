import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="slider-text">
          <h1 className="tm-headline letters tm-rotate-text">
            world best <br /> Homoeopathy Treatment <br />
          </h1>
          <h1 className="my-2">
            <span className="highlight">
              to inactive harmful group of genes <br />
            </span>
          </h1>
          <h1>causing suffering</h1>
          <div className="empty-space col-sm-b20 col-xs-b10"></div>
          <p>
            Perfect treatment of complex mental state,
            <br /> painful physical sufferings from different results of
            disease, <br /> such as
            <b> hypertension, diabetes, chronic renal failure, </b> <br />
            <b>cardiac problem, liver problem, problem in the brain, etc.</b>
          </p>
          <div className="empty-space col-md-b55 col-sm-b35 col-xs-b25"></div>
        </div>
      </div>
      {/* <!-- .container --> */}
      <div className="tm-hero-slider owl-carousel tm-dots1" id="tm-hero-slider">
        <img
          src="/assets/image/slider.webp"
          alt="slide-01"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* <img src="/assets/image/slide-02.webp" alt="slide-02" /> */}
        {/* <img src="/assets/image/slide-03.webp" alt="slide-03" /> */}
      </div>
      <div className="hero-overlay"></div>
      {/* <img
        src="/assets/image/sweet-shap.webp"
        alt="Sweet Shap"
        className="sweet-shap"
      /> */}
    </section>
  );
};

export default Hero;
