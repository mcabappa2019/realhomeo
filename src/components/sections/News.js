import React from 'react';
import Link from 'next/link';

const News = ({ homePage = false }) => {
  return (
    <section id="blog">
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <h2>
          NEWS & <span className="highlight">ARTICLES</span>
        </h2>
        {/* <div className="tm-section-seperator">
            <span></span>
          </div> */}
        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="tm-left-post">
              <div className="tm-post tm-style1">
                <div className="tm-post-thumb">
                  <a href="#" className="tm-link-block">
                    <img src="/assets/img/blog-01.webp" alt="blog-01" />
                    <div className="tm-blog-hover">
                      <span className="tm-blog-shap"></span>
                      <i className="fa fa-link"></i>
                    </div>
                  </a>
                </div>
                <div className="empty-space col-xs-b25"></div>
                <div className="tm-blog-body">
                  <h2 className="tm-blog-heading">
                    <a href="#" className="tm-link-block">
                      Scary Thing That You Don’t Get Enough Sleep
                    </a>
                  </h2>
                  <div className="empty-space col-xs-b15"></div>
                  <div className="tm-blog-meta">
                    <span>
                      <a href="#" className="bar-link">
                        <i className="fa fa-user"></i>Admin
                      </a>
                    </span>
                    <span>
                      <i className="fa fa-calendar"></i>Jan 10, 2018
                    </span>
                  </div>
                  <div className="empty-space col-xs-b20"></div>
                  <div className="tm-blog-separator"></div>
                  <div className="tm-entry-content">
                    <p>
                      If you&apos; re tossing and turning every night,
                      there&apos; s some bad news. Your brain could be in big
                      trouble ! Turns out, there are some pretty scary side
                      effects to sleep loss, all around. (By the way, getting
                      too much sleep...
                    </p>
                    <div className="empty-space col-xs-b30"></div>
                    <a href="#" className="tm-btn1">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="empty-space col-xs-b30"></div>
          </div>
          <div className="col-xl-6">
            <div className="tm-right-post">
              <div className="tm-post tm-style2">
                <div className="tm-post-thumb">
                  <a href="#" className="tm-link-block">
                    <img src="/assets/img/blog-02.webp" alt="blog-02" />
                    <div className="tm-blog-hover small">
                      <span className="tm-blog-shap"></span>
                      <i className="fa fa-link"></i>
                    </div>
                  </a>
                </div>
                <div className="empty-space col-xs-b25"></div>
                <div className="tm-blog-body">
                  <h2 className="tm-blog-heading">
                    <a href="#" className="tm-link-block">
                      Doctors and Nurses Reveal...
                    </a>
                  </h2>
                  <div className="empty-space col-xs-b10"></div>
                  <div className="tm-blog-meta">
                    <span>
                      <a href="#" className="bar-link">
                        <i className="fa fa-user"></i>Admin
                      </a>
                    </span>
                    <span>
                      <i className="fa fa-calendar"></i>Feb 13, 2018
                    </span>
                  </div>
                  <div className="empty-space col-xs-b20"></div>
                  <div className="tm-blog-separator"></div>
                  <div className="tm-entry-content">
                    <p>
                      These tips might just save your life (or at least make it
                      a little healthier). When it comes to your...
                    </p>
                  </div>
                </div>
              </div>
              <div className="tm-post tm-style2">
                <div className="tm-post-thumb">
                  <a href="#" className="tm-link-block">
                    <img src="/assets/img/blog-03.webp" alt="blog-03" />
                    <div className="tm-blog-hover small">
                      <span className="tm-blog-shap"></span>
                      <i className="fa fa-link"></i>
                    </div>
                  </a>
                </div>
                <div className="empty-space col-xs-b25"></div>
                <div className="tm-blog-body">
                  <h2 className="tm-blog-heading">
                    <a href="#" className="tm-link-block">
                      7 Ways to market helth...
                    </a>
                  </h2>
                  <div className="empty-space col-xs-b10"></div>
                  <div className="tm-blog-meta">
                    <span>
                      <a href="#" className="bar-link">
                        <i className="fa fa-user"></i>Admin
                      </a>
                    </span>
                    <span>
                      <i className="fa fa-calendar"></i>Mar 09, 2018
                    </span>
                  </div>
                  <div className="empty-space col-xs-b20"></div>
                  <div className="tm-blog-separator"></div>
                  <div className="tm-entry-content">
                    <p>
                      Health care in the United States is provided by many
                      distinct organizations...
                    </p>
                  </div>
                </div>
              </div>
              <div className="tm-post tm-style2">
                <div className="tm-post-thumb">
                  <a href="#" className="tm-link-block">
                    <img src="/assets/img/blog-04.webp" alt="blog-04" />
                    <div className="tm-blog-hover small">
                      <span className="tm-blog-shap"></span>
                      <i className="fa fa-link"></i>
                    </div>
                  </a>
                </div>
                <div className="empty-space col-xs-b25"></div>
                <div className="tm-blog-body">
                  <h2 className="tm-blog-heading">
                    <a href="#" className="tm-link-block">
                      How to Market to Medicare...
                    </a>
                  </h2>
                  <div className="empty-space col-xs-b10"></div>
                  <div className="tm-blog-meta">
                    <span>
                      <a href="#" className="bar-link">
                        <i className="fa fa-user"></i>Admin
                      </a>
                    </span>
                    <span>
                      <i className="fa fa-calendar"></i>Mar 19, 2018
                    </span>
                  </div>
                  <div className="empty-space col-xs-b20"></div>
                  <div className="tm-blog-separator"></div>
                  <div className="tm-entry-content">
                    <p>
                      Medicare influences most of the healthcare decisions of
                      patients 65 and up. Unfortunately, original...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="empty-space col-xs-b30"></div>
          </div>
        </div>
        {homePage && (
          <div className="d-flex justify-content-end">
            <Link href="/news">
              <a className="highlight px-3 py-1">More..</a>
            </Link>
          </div>
        )}
      </div>
      <div className="empty-space col-md-b70 col-xs-b40"></div>
    </section>
  );
};

export default News;
