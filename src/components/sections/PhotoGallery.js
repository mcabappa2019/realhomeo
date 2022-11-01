import React from 'react';

const PhotoGallery = () => {
  return (
    <section id=" gallery">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2>
          <span className="highlight">Moments</span> Captured
        </h2>

        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      {/* <!-- .tm-portfolio-filter-area --> */}
      <div className="container text-center">
        <div className="row tm-portfolio zoom-gallery tm-gutter-less d-flex">
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="/assets/img/portfolio-01-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-01.webp" alt="portfolio-01" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="/assets/img/portfolio-02-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-02.webp" alt="portfolio-02" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="assets/img/portfolio-03-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-03.webp" alt="portfolio-03" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="/assets/img/portfolio-04-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-04.webp" alt="portfolio-04" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item">
            <a href="/assets/img/portfolio-05-lg.webp" className="item-inner">
              <img src="assets/img/portfolio-05.webp" alt="portfolio-05" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="/assets/img/portfolio-06-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-06.webp" alt="portfolio-06" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="/assets/img/portfolio-07-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-07.webp" alt="portfolio-07" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
          <div className="col-lg-3 col-md-6 tm-portfolio-item ">
            <a href="assets/img/portfolio-08-lg.webp" className="item-inner">
              <img src="/assets/img/portfolio-08.webp" alt="portfolio-08" />
              <div className="tm-zoom-btn"></div>
              <i className="tm-zoom-icon icofont icofont-drag1"></i>
            </a>
          </div>
          {/* <!-- .tm-portfolio-item --> */}
        </div>
      </div>
      {/* <!-- .portfolio --> */}
    </section>
  );
};

export default PhotoGallery;
