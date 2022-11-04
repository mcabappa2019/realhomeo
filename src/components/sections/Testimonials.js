import React from 'react';

const Testimonials = () => {
  return (
    <section>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2>
          What <span className="highlight">Patients says</span>
        </h2>

        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="owl-carousel tm-testimonial tm-testimonial-1 tm-dots1">
              <div className="tm-single-testimonial">
                <div className="tm-testimonial-thumb">
                  <img src="/assets/image/test-01.webp" alt="" />
                </div>
                <div className="tm-testimonial-text">
                  <i className="fa fa-quote-right"></i>
                  <blockquote>
                    They saved my life. They didn&apos; t give up, and they
                    pushed for a treatment that would put me in remission. They
                    continue to have some of the best staffing I&apos; ve ever
                    had.
                  </blockquote>
                  <div className="tm-testimonial-meta">
                    <h3>Alex Bieniek</h3> <span>Patients</span>
                  </div>
                </div>
              </div>
              {/* <!-- testimonail slide --> */}
              <div className="tm-single-testimonial">
                <div className="tm-testimonial-thumb">
                  <img src="/assets/image/test-02.webp" alt="" />
                </div>
                <div className="tm-testimonial-text">
                  <i className="fa fa-quote-right"></i>
                  <blockquote>
                    Nothing but the best. Team medicine with top notched
                    specialists. Worth the drive to come here especially if it
                    involves your health or the health of a loved one.
                  </blockquote>
                  <div className="tm-testimonial-meta">
                    <h3>Sheri Coburn</h3> <span>Patients</span>
                  </div>
                </div>
              </div>
              {/* <!-- testimonail slide --> */}
              <div className="tm-single-testimonial">
                <div className="tm-testimonial-thumb">
                  <img src="/assets/image/test-03.webp" alt="" />
                </div>
                <div className="tm-testimonial-text">
                  <i className="fa fa-quote-right"></i>
                  <blockquote>
                    I love this hospital, I definetly think its the best in
                    Kanada, I had both of my children there, their staff is
                    really nice, and they definelty took care of me.
                  </blockquote>
                  <div className="tm-testimonial-meta">
                    <h3>Martha m.</h3> <span>Patients</span>
                  </div>
                </div>
              </div>
              {/* <!-- testimonail slide --> */}
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
    </section>
  );
};

export default Testimonials;
