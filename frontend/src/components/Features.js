import React from 'react';

const Features = () => (
  <section id="features" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-3 fw-bold">Features of CO-PO Mapping</h2>
      <p className="text-center text-muted mb-5">
        Discover the key benefits of using our CO-PO Mapping tool for enhanced curriculum assessment and accreditation.
      </p>
      <div className="row">
        {/* Feature 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100 hover-shadow">
            <div className="card-body text-center">
              <div className="icon-circle bg-primary text-white mb-3 mx-auto">
                <i className="fas fa-cogs fa-2x"></i>
              </div>
              <h5 className="card-title fw-bold">Automated Mapping</h5>
              <p className="card-text">
                Automatically align Course Outcomes (COs) with Program Outcomes (POs) using advanced algorithms, saving time and ensuring accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100 hover-shadow">
            <div className="card-body text-center">
              <div className="icon-circle bg-success text-white mb-3 mx-auto">
                <i className="fas fa-chart-bar fa-2x"></i>
              </div>
              <h5 className="card-title fw-bold">Visual Reports</h5>
              <p className="card-text">
                Generate detailed visual reports, including graphs and charts, for easy evaluation, analysis, and decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100 hover-shadow">
            <div className="card-body text-center">
              <div className="icon-circle bg-danger text-white mb-3 mx-auto">
                <i className="fas fa-shield-alt fa-2x"></i>
              </div>
              <h5 className="card-title fw-bold">Accreditation Ready</h5>
              <p className="card-text">
                Ensure compliance with accreditation standards by providing structured and well-documented CO-PO mapping data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;