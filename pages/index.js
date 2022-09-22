import React from 'react';

const index = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="slider-text">
            <h1 className="tm-headline letters tm-rotate-text">
              world best <br /> homeopathy Treatment <br />
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
        <div
          className="tm-hero-slider owl-carousel tm-dots1"
          id="tm-hero-slider"
        >
          <img
            src="/assets/img/slider.png"
            alt="slide-01"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* <img src="/assets/img/slide-02.jpg" alt="slide-02" /> */}
          {/* <img src="/assets/img/slide-03.jpg" alt="slide-03" /> */}
        </div>
        <div className="hero-overlay"></div>
        <img
          src="/assets/img/sweet-shap.png"
          alt="Sweet Shap"
          className="sweet-shap"
        />
      </section>
      <section className="tm-fun-fact-wrap tm-bg">
        <div className="container">
          <div className="row d-flex">
            <div className=" col-5">
              <div className=" text-center ">
                <img src="/assets/img/DrShyamalDas.png" alt="" />
              </div>
            </div>
            <div className="col-7 ">
              <div className="banner-content d-none d-lg-block">
                <h1>The Real Homeopathy</h1>
                <p>
                  &#8220; To make perfectly healthy individual or citizen of a
                  family, a society, a country and also of the world - who can
                  establish peace everywhere that can make this world
                  Paradise.&#8221;
                </p>
                <p>- DR. SHYAMAL KUMAR DAS </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses">
        <div className="empty-space col-md-b100 col-xs-b70"></div>
        <div className="tm-section-heading text-center">
          {/* <h2>
            <b>Real Homeopathy</b>
          </h2> */}
          <h2>
            <b>
              <span className="highlight">e-Learning</span> Program
            </b>
          </h2>

          <div className="empty-space col-md-b60 col-xs-b40"></div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-3 md-6 text-center">
              <img src="/assets/img/iso-medel.png" alt="" /> <br />
            </div> */}
            <div className="col-lg-4 md-6 text-center">
              <img src="/assets/img/Logo_RH.png" alt="" />
            </div>
            {/* <div className="col-lg-3 md-6 text-center">
              <img src="/assets/img/iso-medel.png" alt="" />
            </div> */}
          </div>
          {/* <!-- .row --> */}
        </div>

        <div className="container">
          <div className="row course d-flex">
            <div className="col-md-12 col-lg-6 course-preview">
              <h5>Course For</h5>
              <h4 className="text-uppercase">All Students</h4>
              <span className="d-flex justify-content-between mt-5">
                <h5>Duration:</h5>
                <h5>2 Years</h5>
              </span>
              <span className="d-flex justify-content-between mt-1">
                <h5>Mode:</h5>
                <h5>ONLINE</h5>
              </span>
              <span className="d-flex justify-content-between my-1">
                <h5>Version:</h5>
                <h5>English & Hindi</h5>
              </span>
            </div>
            <div className="col-md-12 col-lg-6 course-info">
              <h6 className="text-end">Trusted by 1100 Students</h6>
              <h2>
                <b>DHP & M.</b>
              </h2>
              <h5>
                Diploma in Homoeopathic
                <br /> Philosophy and Medicine.
              </h5>

              <div className="tm-about-btn details-btn">
                <a href="#" className="tm-btn1">
                  APPLY NOW
                </a>
              </div>
              <div className="iso-img">
                <img src="/assets/img/iso-medel.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row course d-flex">
            <div className="col-md-12 col-lg-6 course-preview">
              <h5>Course For</h5>
              <h4 className="text-uppercase">Registered Physicians</h4>
              <span className="d-flex justify-content-between mt-5">
                <h5>Duration:</h5>
                <h5>24 Weeks</h5>
              </span>
              <span className="d-flex justify-content-between mt-1">
                <h5>Mode:</h5>
                <h5>ONLINE</h5>
              </span>
              <span className="d-flex justify-content-between my-1 ">
                <h5>Version:</h5>
                <h5>English & Hindi</h5>
              </span>
            </div>

            <div className="col-md-12 col-lg-6 course-info">
              <h6 className="text-end">Trusted by 450 Doctors</h6>
              <h2>
                <b>ACRH</b>
              </h2>
              <h5>
                Advanced Course of <br />
                Real Homoeopathy.
              </h5>
              <div className="tm-about-btn details-btn">
                <a href="#" className="tm-btn1">
                  APPLY NOW
                </a>
              </div>
              <div className="iso-img">
                <img src="/assets/img/iso-medel.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start Fun Fact Section --> */}
      {/* <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="tm-section-heading text-center">
        <div className="empty-space col-md-b60 col-xs-b40"></div>
      </div> */}
      <section className="tm-fun-fact-wrap students tm-bg">
        <div className="empty-space col-md-b100 col-xs-b70"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="tm-fun-fact text-center">
                <i
                  className="icofont icofont-briefcase-alt-2 wow fadeInDown"
                  data-wow-delay="0.2s"
                  data-wow-duration="2s"
                ></i>
                <h2 className="tm-counter">40+</h2> <h3>Years of experience</h3>
              </div>
              <div className="empty-space col-xs-b30"></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tm-fun-fact text-center">
                <i
                  className="icofont icofont-emo-simple-smile wow fadeInDown"
                  data-wow-delay="0.4s"
                  data-wow-duration="2s"
                ></i>
                <h2 className="tm-counter">9500+</h2> <h3>Happy Patients</h3>
              </div>
              <div className="empty-space col-xs-b30"></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tm-fun-fact text-center">
                <i
                  className="icofont icofont-doctor wow fadeInDown"
                  data-wow-delay="0.6s"
                  data-wow-duration="2s"
                ></i>
                <h2 className="tm-counter">1500+</h2> <h3>Happy Students</h3>
              </div>
              <div className="empty-space col-xs-b30"></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="tm-fun-fact text-center">
                <i
                  className="icofont icofont-users-social wow fadeInDown"
                  data-wow-delay="0.8s"
                  data-wow-duration="2s"
                ></i>
                <h2 className="tm-counter">45+</h2> <h3>Our Team Size</h3>
              </div>
              <div className="empty-space col-xs-b30"></div>
            </div>
          </div>
        </div>
        <div className="empty-space col-lg-b70 col-xs-b40"></div>
      </section>
      {/* <!-- End Fun Fact Section --> */}
      {/* <!-- Start Team Member --> */}
      <section id="doctor">
        <div className="empty-space col-md-b100 col-xs-b70"></div>
        <div className="tm-section-heading text-center">
          <h2>
            What <span className="highlight">Experts SAY</span>
          </h2>
          {/* <div className="tm-section-seperator">
            <span></span>
          </div> */}
          <div className="empty-space col-md-b60 col-xs-b40"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="">
                <div className="tm-team-member d-block d-lg-flex my-3">
                  <div className="tm-member-hover">
                    <a href="#" className="tm-member-thumb">
                      <img src="assets/img/doctor-01.jpg" alt="" />
                    </a>
                    <div className="tm-member-social-btn-wrap d-none d-lg-flex">
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-facebook-square"></i>
                          <i className="fa fa-facebook-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-twitter-square"></i>
                          <i className="fa fa-twitter-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-linkedin-square"></i>
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-skype"></i>
                          <i className="fa fa-skype"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- .tm-member-social-btn-wrap --> */}
                  </div>
                  <div className="tm-member-meta tm-gray-bg text-center w-100 ">
                    <h3 className="tm-member-name">
                      <a href="#">Prof. Dr. Achal Sing</a>
                    </h3>
                    <span className="tm-member-speciality">
                      MD DM Cardiologist, USA
                    </span>
                    <p className="mt-3" style={{ textAlign: 'justify' }}>
                      Real homeopathy is very unique that it goes to the very
                      root of Deeper mind and consciousness and Genetics to
                      address the causation of disease at Gene, Energy and
                      consciousness levels. High potency Homeopathy remedies
                      cause Deeper healing of a patient’s symptoms and diseases.
                      The system is so deep that not only present symptoms are
                      healed but Life long problems and even Genetic
                      transmission of diseases from Previous multiple
                      generations is also healed.
                    </p>
                  </div>
                </div>
                {/* <!-- .tm-team-member --> */}
                <div className="tm-team-member d-block d-lg-flex my-3">
                  <div className="tm-member-hover">
                    <a href="#" className="tm-member-thumb">
                      <img src="/assets/img/doctor-02.jpg" alt="" />
                    </a>
                    <div className="tm-member-social-btn-wrap d-none d-lg-flex">
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-facebook-square"></i>
                          <i className="fa fa-facebook-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-twitter-square"></i>
                          <i className="fa fa-twitter-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-linkedin-square"></i>
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-skype"></i>
                          <i className="fa fa-skype"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- .tm-member-social-btn-wrap --> */}
                  </div>
                  <div className="tm-member-meta tm-gray-bg text-center w-100">
                    <h3 className="tm-member-name">
                      <a href="#">Prof. Dr. Anil Sen</a>
                    </h3>
                    <span className="tm-member-speciality">
                      MD DM Neurologist & Holistic physician - USA
                    </span>
                    <p className="mt-3" style={{ textAlign: 'justify' }}>
                      Real homeopathy is very unique that it goes to the very
                      root of Deeper mind and consciousness and Genetics to
                      address the causation of disease at Gene, Energy and
                      consciousness levels. High potency Homeopathy remedies
                      cause Deeper healing of a patient’s symptoms and diseases.
                      The system is so deep that not only present symptoms are
                      healed but Life long problems and even Genetic
                      transmission of diseases from Previous multiple
                      generations is also healed.
                    </p>
                  </div>
                </div>
                {/* <!-- .tm-team-member --> */}
                <div className="tm-team-member d-block d-lg-flex my-3">
                  <div className="tm-member-hover">
                    <a href="#" className="tm-member-thumb">
                      <img src="/assets/img/doctor-03.jpg" alt="" />
                    </a>
                    <div className="tm-member-social-btn-wrap d-none d-lg-flex">
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-facebook-square"></i>
                          <i className="fa fa-facebook-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-twitter-square"></i>
                          <i className="fa fa-twitter-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-linkedin-square"></i>
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-skype"></i>
                          <i className="fa fa-skype"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- .tm-member-social-btn-wrap --> */}
                  </div>
                  <div className="tm-member-meta tm-gray-bg text-center w-100">
                    <h3 className="tm-member-name">
                      <a href="#">Dr. Alex Abbott</a>
                    </h3>
                    <span className="tm-member-speciality">Neurology</span>
                    <p className="mt-3" style={{ textAlign: 'justify' }}>
                      Real homeopathy is very unique that it goes to the very
                      root of Deeper mind and consciousness and Genetics to
                      address the causation of disease at Gene, Energy and
                      consciousness levels. High potency Homeopathy remedies
                      cause Deeper healing of a patient’s symptoms and diseases.
                      The system is so deep that not only present symptoms are
                      healed but Life long problems and even Genetic
                      transmission of diseases from Previous multiple
                      generations is also healed.
                    </p>
                  </div>
                </div>
                {/* <!-- .tm-team-member --> */}
                <div className="tm-team-member d-block d-lg-flex my-3">
                  <div className="tm-member-hover">
                    <a href="#" className="tm-member-thumb">
                      <img src="/assets/img/doctor-04.jpg" alt="" />
                    </a>
                    <div className="tm-member-social-btn-wrap d-none d-lg-flex">
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-facebook-square"></i>
                          <i className="fa fa-facebook-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-twitter-square"></i>
                          <i className="fa fa-twitter-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-linkedin-square"></i>
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                      </div>
                      <div className="tm-member-socila-btn">
                        <a href="#" className="tm-social-btn white">
                          <i className="fa fa-skype"></i>
                          <i className="fa fa-skype"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- .tm-member-social-btn-wrap --> */}
                  </div>
                  <div className="tm-member-meta tm-gray-bg text-center w-100">
                    <h3 className="tm-member-name">
                      <a href="#">Dr. Kay Conley</a>
                    </h3>
                    <span className="tm-member-speciality">Diagnosis</span>
                    <p className="mt-3" style={{ textAlign: 'justify' }}>
                      Real homeopathy is very unique that it goes to the very
                      root of Deeper mind and consciousness and Genetics to
                      address the causation of disease at Gene, Energy and
                      consciousness levels. High potency Homeopathy remedies
                      cause Deeper healing of a patient’s symptoms and diseases.
                      The system is so deep that not only present symptoms are
                      healed but Life long problems and even Genetic
                      transmission of diseases from Previous multiple
                      generations is also healed.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- .member-carousel --> */}
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b100 col-xs-b70"></div>
      </section>
      {/* <!-- End Team Member --> */}

      {/* <!-- Start Department Section --> */}
      <section className="tm-gray-bg" id="department">
        <div className="empty-space col-md-b100 col-xs-b70"></div>
        <div className="tm-section-heading text-center">
          <h2>
            <span className="highlight">Our Success</span> Stories
          </h2>
          {/* <div className="tm-section-seperator">
            <span></span>
          </div> */}
          <div className="empty-space col-md-b60 col-xs-b40"></div>
        </div>
        <div className="container">
          <div className="tm-tab-wrap">
            <div className="tm-tabs-wrap">
              <ul className="tabs">
                <li>
                  <i className="icofont icofont-autism"></i>AUTISM
                </li>
                <li>
                  <i className="icofont icofont-brain"></i>NEUROLOGY
                </li>
                <li>
                  <i className="icofont icofont-test-tube"></i>DIABETIES
                </li>
                <li>
                  <i className="icofont icofont-pulse"></i>CARDIOLOGY
                </li>
                <li>
                  <i className="icofont icofont-lungs"></i>LUNG
                </li>
                <li>
                  <i className="icofont icofont-dna"></i>GENETIC DISORDER
                </li>
              </ul>
              {/* <!-- .tabs --> */}
            </div>
            <div className="empty-space col-md-b60 col-xs-b40"></div>
            <div className="tm-tab-content">
              <div className="tm-tabs-item">
                <div className="row">
                  {/* <div className="col-lg-6">
                    <div className="tm-dept-img">
                      <img src="/assets/img/success-story-img.png" alt="" />
                    </div>
                  </div> */}
                  {/* <!-- .col --> */}
                  <div className="col-lg-12">
                    <div className="tm-dept-details-wrap">
                      <div className="tm-about tm-gray-bg">
                        <div className="h3 text-uppercase text-end ">
                          <span className="highlight">
                            The Real Homoeopathy
                          </span>
                        </div>
                        <div className="tm-about-text">
                          <img
                            src="/assets/img/success-story-img-2.png"
                            alt=""
                            style={{ float: 'left', marginRight: '15px' }}
                          />

                          <p
                            style={{
                              textAlign: 'justify',
                            }}
                          >
                            <b>T</b>here are different therapeutic systems all
                            over the world, each of which treats patients for
                            their present complaints considering present sign
                            and symptoms and also different pathological
                            reports. As a result, patients recover from their
                            present sufferings very soon. <br />
                            Whereas, in the “GO BACK” procedure of Real
                            Homoeopathic therapeutic system, patients are
                            treated for their present complaints by considering
                            the “origin” of present complaints; never depending
                            on present signs and symptoms and different
                            pathological reports. Hence, “origin” means the
                            individual’s genetic makeup which is controlled by
                            different groups of harmful genes and one group of
                            beneficial genes. The genetic makeup of the
                            individual is the only factor responsible for the
                            present sufferings, which are inherited from our
                            ancestors.
                            <br />
                            In Real Homoeopathy, the patient is treated for the
                            present complaints i.e. medicine is prescribed
                            considering only philosophy of early life, which is
                            created by individual’s genetic makeup. Present
                            signs and symptoms and pathological reports for
                            present complaints never help in selecting
                            appropriate medicine, rather, superficially selected
                            medicines suppress the present complaints instead of
                            curing them, as “origin” of present complaints is
                            not considered.
                            <br />
                            According to James Tyler Kent, present complaints
                            are considered as “results of different true
                            diseases”. In different therapeutic systems,
                            treatment is done only for present complaints,
                            neglecting the “origin” i.e. true diseases.
                            <br />
                            Superficial procedure of treatment is done
                            considering only signs and symptoms and pathological
                            reports of present complaints. It causes suppression
                            as well as palliation with which different
                            deviations, distortions and perversions are created.
                            <br />
                            “Prescribing for the results of disease causes
                            changes in the results of disease, but not in the
                            sickness except to hurry its progress.” –
                            <br />
                            Ref- [“Lectures on Homoeopathic Philosophy” by James
                            Tyler Kent, Chapter: ‘The Sick’, Page 23]
                            <br />
                            In Real Homoeopathic therapeutic system, medicine is
                            prescribed after construction of six cycles
                            following philosophy of early life i.e. considering
                            six true diseases which are controlled by six groups
                            of harmful genes. Change of medicine, potency, cycle
                            and repetition of six cycles are done after
                            consideration of consciousness and freedom of the
                            individual. Strictly following the instructions of
                            “GO BACK” procedure of Real Homoeopathic therapeutic
                            system when the medicine is administered, the active
                            and overactive harmful genes will become inactive
                            permanently.
                            <br />
                            <b>
                              Then, the apparently healthy individual will
                              become absolutely or perfectly healthy and there
                              will be no deviations, distortions and
                              perversions. Now the individual will enjoy freedom
                              till last breath.
                            </b>
                          </p>
                        </div>
                        <div className="empty-space col-xs-b25"></div>
                        <div className="tm-about-btn">
                          <a href="#" className="tm-btn1">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                </div>
              </div>
              {/* <!-- .tabs_item --> */}
              <div className="tm-tabs-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tm-dept-img">
                      <img src="/assets/img/2.neurology.jpg" alt="" />
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                  <div className="col-lg-6">
                    <div className="tm-dept-details-wrap">
                      <div className="tm-about tm-gray-bg">
                        <h3 className="tm-about-title">
                          Welcome to our <span>NEUROLOGY</span>
                        </h3>
                        <div className="tm-about-text">
                          <p>
                            Our Neurology deparment of Trustlife Hospital serves
                            as the receiving point for the most seriously
                            injured people from across the country and treats
                            patients with brain and spine.
                          </p>
                          <p>
                            In addition to being a centre of excellence, the
                            Neurology deparment aims to be an asset to national
                            and international communities.
                          </p>
                        </div>
                        <div className="empty-space col-xs-b25"></div>
                        <div className="tm-about-btn">
                          <a href="#" className="tm-btn1">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                </div>
              </div>
              {/* <!-- .tabs_item --> */}
              <div className="tm-tabs-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tm-dept-img">
                      <img src="/assets/img/3.crutches.jpg" alt="" />
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                  <div className="col-lg-6">
                    <div className="tm-dept-details-wrap">
                      <div className="tm-about tm-gray-bg">
                        <h3 className="tm-about-title">
                          Welcome to our <span>CRUTCHES</span>
                        </h3>
                        <div className="tm-about-text">
                          <p>
                            It is important to start walking as soon as you can
                            after your surgery. But you will need support for
                            walking while your leg heals. Trustlife may be a
                            good choice after a leg injury or surgery if you
                            only need a little help with balance and stability.
                          </p>
                          <p>
                            Crutches are also useful when your leg is only a
                            little weak or painful.
                          </p>
                        </div>
                        <div className="empty-space col-xs-b25"></div>
                        <div className="tm-about-btn">
                          <a href="#" className="tm-btn1">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                </div>
              </div>
              {/* <!-- .tabs_item --> */}
              <div className="tm-tabs-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tm-dept-img">
                      <img src="/assets/img/4.cardiology.jpg" alt="" />
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                  <div className="col-lg-6">
                    <div className="tm-dept-details-wrap">
                      <div className="tm-about tm-gray-bg">
                        <h3 className="tm-about-title">
                          Welcome to our <span>CARDIOLOGY</span>
                        </h3>
                        <div className="tm-about-text">
                          <p>
                            Cardiology department is served dedicately 24/7 and
                            it is the only hospital of Kanada where emergency
                            angioplasty can be carried out round the clock.
                          </p>
                          <p>
                            Cardiology department is operated by a strong and
                            dedicated team of 3 cardiologists, And they has more
                            then 20 years of expericnce.
                          </p>
                        </div>
                        <div className="empty-space col-xs-b25"></div>
                        <div className="tm-about-btn">
                          <a href="#" className="tm-btn1">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                </div>
              </div>
              {/* <!-- .tabs_item --> */}
              <div className="tm-tabs-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tm-dept-img">
                      <img src="/assets/img/5.pulmones.jpg" alt="" />
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                  <div className="col-lg-6">
                    <div className="tm-dept-details-wrap">
                      <div className="tm-about tm-gray-bg">
                        <h3 className="tm-about-title">
                          Welcome to our <span>PULMONARY</span>
                        </h3>
                        <div className="tm-about-text">
                          <p>
                            More than 15 years ago, we pioneered the first
                            hospitals in the nation to specialize in pulmonary
                            treatment, so you can feel confident when your loved
                            one is under our care.
                          </p>
                          <p>
                            Today, our expertise continues to be pulmonary
                            disease management and providing quality treatment
                            based on the latest protocols.
                          </p>
                        </div>
                        <div className="empty-space col-xs-b25"></div>
                        <div className="tm-about-btn">
                          <a href="#" className="tm-btn1">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                </div>
              </div>
              {/* <!-- .tabs_item --> */}
              <div className="tm-tabs-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tm-dept-img">
                      <img src="assets/img/6.xray.jpg" alt="" />
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                  <div className="col-lg-6">
                    <div className="tm-dept-details-wrap">
                      <div className="tm-about tm-gray-bg">
                        <h3 className="tm-about-title">
                          Welcome to our <span>X-RAY</span>
                        </h3>
                        <div className="tm-about-text">
                          <p>
                            We have the high-quality x-ray machine and our
                            technique is so much experienced. We delivered x-ray
                            report within one hour.
                          </p>
                          <p>
                            After handover x-ray report we give initial advice
                            of an experienced doctor and suggest related
                            experienced doctor.
                          </p>
                        </div>
                        <div className="empty-space col-xs-b25"></div>
                        <div className="tm-about-btn">
                          <a href="#" className="tm-btn1">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- .col --> */}
                </div>
              </div>
              {/* <!-- .tabs_item --> */}
            </div>
            {/* <!-- .tm-tab-content --> */}
          </div>
          {/* <!-- .tab --> */}
        </div>
        <div className="empty-space col-md-b100 col-xs-b70"></div>
      </section>
      {/* <!-- End Department Section --> */}

      {/* <!-- Start Testimonial Section --> */}
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
                    <img src="/assets/img/test-01.jpg" alt="" />
                  </div>
                  <div className="tm-testimonial-text">
                    <i className="fa fa-quote-right"></i>
                    <blockquote>
                      They saved my life. They didn&apos; t give up, and they
                      pushed for a treatment that would put me in remission.
                      They continue to have some of the best staffing I&apos; ve
                      ever had.
                    </blockquote>
                    <div className="tm-testimonial-meta">
                      <h3>Alex Bieniek</h3> <span>Patients</span>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonail slide --> */}
                <div className="tm-single-testimonial">
                  <div className="tm-testimonial-thumb">
                    <img src="/assets/img/test-02.jpg" alt="" />
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
                    <img src="/assets/img/test-03.jpg" alt="" />
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
      {/* <!-- End Testimonial Section --> */}

      {/* <!-- Start Gallery Section --> */}
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
              <a href="/assets/img/portfolio-01-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-01.jpg" alt="portfolio-01" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item ">
              <a href="/assets/img/portfolio-02-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-02.jpg" alt="portfolio-02" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item ">
              <a href="assets/img/portfolio-03-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-03.jpg" alt="portfolio-03" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item ">
              <a href="/assets/img/portfolio-04-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-04.jpg" alt="portfolio-04" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item">
              <a href="/assets/img/portfolio-05-lg.jpg" className="item-inner">
                <img src="assets/img/portfolio-05.jpg" alt="portfolio-05" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item ">
              <a href="/assets/img/portfolio-06-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-06.jpg" alt="portfolio-06" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item ">
              <a href="/assets/img/portfolio-07-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-07.jpg" alt="portfolio-07" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
            <div className="col-lg-3 col-md-6 tm-portfolio-item ">
              <a href="assets/img/portfolio-08-lg.jpg" className="item-inner">
                <img src="/assets/img/portfolio-08.jpg" alt="portfolio-08" />
                <div className="tm-zoom-btn"></div>
                <i className="tm-zoom-icon icofont icofont-drag1"></i>
              </a>
            </div>
            {/* <!-- .tm-portfolio-item --> */}
          </div>
        </div>
        {/* <!-- .portfolio --> */}
      </section>
      {/* <!-- End Gallery Section --> */}

      {/* <!-- Start Appointment Section --> */}
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <section className="tm-relative tm-gray-bg">
        <div className="tm-half-section-bg right">
          <img src="/assets/img/appointment-bg.jpg" alt="about hafl bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 tm-hf-hide">
              <div className="empty-space col-md-b0 col-xs-b70"></div>
              <div
                className="tm-appointment-heading tm-gray-bg wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="tm-section-heading text-center">
                  <h2>
                    <span className="highlight">APPOINTMENT</span>
                  </h2>
                  {/* <div className="tm-section-seperator">
                    <span></span>
                  </div> */}
                  <p>
                    If you wont to make an appointment with any specialist just
                    fill up the form with valid data and we will contact you via
                    phone for confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="empty-space col-md-b60 col-xs-b40"></div>
              <form
                method="POST"
                action=""
                className="tm-appointment-form"
                id="appointment-form"
              >
                <div id="tm-alert1"></div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uname"
                    name="uname"
                    placeholder="Full Name"
                    required
                  />
                  <span className="bar"></span>
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="uemail"
                    name="uemail"
                    placeholder="Email Address"
                    required
                  />
                  <span className="bar"></span>
                </div>
                <div className="tm-form-field">
                  <input
                    type="text"
                    id="unumber"
                    name="unumber"
                    placeholder="Phone Number"
                    required
                  />
                  <span className="bar"></span>
                </div>
                <div className="tm-form-field">
                  <input
                    name="udate"
                    type="text"
                    id="udate"
                    placeholder="Booking Date"
                  />
                  <span className="bar"></span>
                  <div className="date-icon">
                    <i className="fa fa-calendar"></i>
                  </div>
                </div>

                <div className="tm-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    id="umsg"
                    name="umsg"
                    placeholder="Your Message"
                  ></textarea>
                  <span className="bar"></span>
                </div>
                <div className="empty-space col-xs-b10"></div>
                <div className="tm-form-field">
                  <button
                    className="tm-btn1 tm-reverse"
                    type="submit"
                    id="appointment-submit"
                    name="submit"
                  >
                    SEND REQUEST
                  </button>
                </div>
              </form>
              <div className="empty-space col-md-b60 col-xs-b70"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Appointment Section --> */}

      {/* <!-- Start FAQ Section --> */}
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
      <section className="tm-gray-bg tm-overflow-hide">
        <div className="row">
          <div className="col-lg-6">
            {/* <!-- For Vimeo Video --> */}
            <div className="tm-about-video">
              <img src="/assets/img/video-bg.jpg" alt="" />
              <div
                className="tm-video-button"
                data-video-id="63636954"
                data-channel="vimeo"
              >
                <i className="icofont icofont-play-alt-3"></i>
                <span className="tm-video-animaiton">
                  <span></span>
                </span>
              </div>
            </div>
            {/* <!-- For Youtube Video --> */}
            {/* <!-- <div className="tm-about-video tm-video-button" data-video-id='nImFZRtGeAQ'>
                    <img src="assets/img/tm-about-video-bg.jpg" alt="">
                    <i className="video-icon"></i>
                </div> --> */}
          </div>
          <div className="col-lg-6">
            <div className="empty-space col-md-b60 col-xs-b65"></div>
            <div className="accordian-wrapper container">
              <h2 className="accordian-heading">Frequently Asked Questions</h2>
              <div className="accordian">
                <div className="single-accordian">
                  <h3 className="accordian-head">What is dental care?</h3>
                  <div className="accordian-body">
                    Tooth valuable resources, dental care should take us
                    regularly to stay healthy. Oral Health Overview. Good dental
                    or oral care is important to maintaining healthy teeth,
                    gums, and tongue. Oral problems, including bad breath, dry
                    mouth, canker or cold sores, TMD, tooth decay, or thrush are
                    all treatable with proper diagnosis and care.
                  </div>
                </div>
                <div className="single-accordian">
                  <h3 className="accordian-head">Does offer emergency care?</h3>
                  <div className="accordian-body">
                    Urgent care centers are a relatively new addition to the
                    healthcare industry that have helped to benefit both
                    community medical services and patients. As a fast,
                    affordable alternative to emergency room care for patients
                    with non-life-threatening conditions, urgent care medical
                    clinics offer people a convenient treatment option.
                  </div>
                </div>
                <div className="single-accordian">
                  <h3 className="accordian-head">Online live support</h3>
                  <div className="accordian-body">
                    Neurology is a branch of medical science that is concerned
                    with disorders and diseases of the nervous system. The term
                    neurology comes from a combination of two words - &apos;
                    neuron&apos; meaning nerve and &apos; logia&apos; meaning
                    &apos; the study of&apos; .There are around a hundred
                    billion neurons in the brain, capable of generating their
                    own impulses and of receiving and transmitting impulses from
                    neighboring cells.
                  </div>
                </div>
              </div>
            </div>
            <div className="empty-space col-md-b60 col-xs-b70"></div>
          </div>
        </div>
      </section>
      {/* <!-- End FAQ Section --> */}
      {/* <!-- Start Blog Section --> */}
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
                      <img src="/assets/img/blog-01.jpg" alt="blog-01" />
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
                      <img src="/assets/img/blog-02.jpg" alt="blog-02" />
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
                        These tips might just save your life (or at least make
                        it a little healthier). When it comes to your...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tm-post tm-style2">
                  <div className="tm-post-thumb">
                    <a href="#" className="tm-link-block">
                      <img src="/assets/img/blog-03.jpg" alt="blog-03" />
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
                      <img src="/assets/img/blog-04.jpg" alt="blog-04" />
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
        </div>
        <div className="empty-space col-md-b70 col-xs-b40"></div>
      </section>
      {/* <!-- End Blog Section --> */}

      {/* <!-- Start Contact Section --> */}
      <section className="tm-gray-bg" id="contact ">
        <div className="empty-space col-md-b100 col-xs-b70"></div>
        <div className="tm-section-heading text-center">
          <h2>
            Get In <span className="highlight">Touch</span>
          </h2>
          {/* <div className="tm-section-seperator">
            <span></span>
          </div> */}
          <div className="empty-space col-md-b60 col-xs-b40"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div id="tm-alert"></div>
              <form
                action=""
                className="row tm-contact-form"
                method="post"
                id="contact-form"
              >
                <div className="col-lg-6">
                  <div className="tm-form-field">
                    <input type="text" id="name" name="name" required />
                    <label>Full Name</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tm-form-field">
                    <input type="text" id="email" name="email" required />
                    <label>Email Address</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tm-form-field">
                    <input type="text" id="subject" name="subject" required />
                    <label>Subject</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tm-form-field">
                    <input type="text" id="phone" name="phone" required />
                    <label>Phone</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="tm-form-field">
                    <textarea
                      cols="30"
                      rows="10"
                      id="msg"
                      name="msg"
                      required
                    ></textarea>
                    <label>Your Message</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="tm-btn1"
                    type="submit"
                    id="submit"
                    name="submit"
                  >
                    <span>SEND MESSAGE</span>
                  </button>
                  <div className="empty-space col-lg-b30"></div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="empty-space col-md-b0 col-xs-b40"></div>
              <div className="tm-contact-info">
                <div className="tm-single-contact">
                  <i className="fa fa-map-marker"></i> <h3>Address</h3>
                  <p>
                    SURYA TORON APPARTMENT 296,PARNASHREE PALLY, <br />
                    KOL-60, INDIA
                  </p>
                </div>
                <div className="empty-space col-xs-b25"></div>
                <div className="tm-single-contact">
                  <i className="fa fa-whatsapp"></i> <h3>Whatsapp</h3>
                  <p>
                    91-861-764-0395 <br /> 91-956-438-5818 <br />{' '}
                    91-700-122-0605
                  </p>
                </div>
                <div className="empty-space col-xs-b25"></div>
                <div className="tm-single-contact">
                  <i className="fa fa-envelope"></i> <h3>Email</h3>
                  <p>
                    info@tirh.com <br />
                  </p>
                </div>
                <div className="empty-space col-xs-b25"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-space col-md-b70 col-xs-b40"></div>
      </section>
      {/* <!-- End Contact Section --> */}
      {/* <!-- Start Map Section --> */}
      <div id="tm-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.4811489636602!2d88.30398535987159!3d22.507012112182874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a227b8f25eb%3A0xf1283e442cef7d2a!2sSurya%20Sangha%20Club!5e0!3m2!1sen!2sin!4v1663781112235!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <!-- End Map Section --> */}
    </>
  );
};

export default index;
