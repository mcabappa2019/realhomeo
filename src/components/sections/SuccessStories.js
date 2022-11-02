import React from 'react';

const SuccessStories = () => {
  return (
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
                      <img src="/assets/img/success-story-img.webp" alt="" />
                    </div>
                  </div> */}
                {/* <!-- .col --> */}
                <div className="col-lg-12">
                  <div className="tm-dept-details-wrap">
                    <div className="tm-about tm-gray-bg">
                      <div className="h3 text-uppercase text-end ">
                        <span className="highlight">The Real Homoeopathy</span>
                      </div>
                      <div className="tm-about-text">
                        <img
                          src="/assets/img/success-story-img-2.webp"
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
                          their present complaints considering present sign and
                          symptoms and also different pathological reports. As a
                          result, patients recover from their present sufferings
                          very soon. <br />
                          Whereas, in the “GO BACK” procedure of Real
                          Homoeopathic therapeutic system, patients are treated
                          for their present complaints by considering the
                          “origin” of present complaints; never depending on
                          present signs and symptoms and different pathological
                          reports. Hence, “origin” means the individual’s
                          genetic makeup which is controlled by different groups
                          of harmful genes and one group of beneficial genes.
                          The genetic makeup of the individual is the only
                          factor responsible for the present sufferings, which
                          are inherited from our ancestors.
                          <br />
                          In Real Homoeopathy, the patient is treated for the
                          present complaints i.e. medicine is prescribed
                          considering only philosophy of early life, which is
                          created by individual’s genetic makeup. Present signs
                          and symptoms and pathological reports for present
                          complaints never help in selecting appropriate
                          medicine, rather, superficially selected medicines
                          suppress the present complaints instead of curing
                          them, as “origin” of present complaints is not
                          considered.
                          <br />
                          According to James Tyler Kent, present complaints are
                          considered as “results of different true diseases”. In
                          different therapeutic systems, treatment is done only
                          for present complaints, neglecting the “origin” i.e.
                          true diseases.
                          <br />
                          Superficial procedure of treatment is done considering
                          only signs and symptoms and pathological reports of
                          present complaints. It causes suppression as well as
                          palliation with which different deviations,
                          distortions and perversions are created.
                          <br />
                          “Prescribing for the results of disease causes changes
                          in the results of disease, but not in the sickness
                          except to hurry its progress.” –
                          <br />
                          Ref- [“Lectures on Homoeopathic Philosophy” by James
                          Tyler Kent, Chapter: ‘The Sick’, Page 23]
                          <br />
                          In Real Homoeopathic therapeutic system, medicine is
                          prescribed after construction of six cycles following
                          philosophy of early life i.e. considering six true
                          diseases which are controlled by six groups of harmful
                          genes. Change of medicine, potency, cycle and
                          repetition of six cycles are done after consideration
                          of consciousness and freedom of the individual.
                          Strictly following the instructions of “GO BACK”
                          procedure of Real Homoeopathic therapeutic system when
                          the medicine is administered, the active and
                          overactive harmful genes will become inactive
                          permanently.
                          <br />
                          <b>
                            Then, the apparently healthy individual will become
                            absolutely or perfectly healthy and there will be no
                            deviations, distortions and perversions. Now the
                            individual will enjoy freedom till last breath.
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
          </div>
          {/* <!-- .tm-tab-content --> */}
        </div>
        {/* <!-- .tab --> */}
      </div>
      <div className="empty-space col-md-b100 col-xs-b70"></div>
    </section>
  );
};

export default SuccessStories;
