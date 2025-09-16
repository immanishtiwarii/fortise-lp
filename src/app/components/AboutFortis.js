import React from "react";
import "./AboutFortis.css";

const AboutFortis = () => {
  return (
    <section className="about-fortis-section">
      <div className="af-container">
        <div className="af-content">
          <div className="af-text">
            <h2 className="af-title">About Fortis Group of Hospitals</h2>
            <p className="af-description">
              Fortis Group of Hospitals is one of India's leading healthcare
              service providers. The organization has 28 healthcare facilities,
              which are accredited by international bodies such as NABH and JCI.
              With a commitment to excellence, the hospitals are known for
              delivering high-quality medical care across various specialties.
            </p>

            <div className="af-highlights">
              <div className="af-stat">
                <span className="af-stat-number">28</span>
                <span className="af-stat-label">Healthcare Facilities</span>
              </div>
              <div className="af-stat">
                <span className="af-stat-number">200,000+</span>
                <span className="af-stat-label">International Patients</span>
              </div>
              <div className="af-stat">
                <span className="af-stat-number">175+</span>
                <span className="af-stat-label">Countries Served</span>
              </div>
            </div>

            <p className="af-description">
              The group offers comprehensive support for international patients
              including dedicated coordinators, helping with travel and
              accommodation logistics, translation assistance, etc. The hospital
              group specializes in various medical fields such as Cardiology,
              Neurology & Neurosurgery, Gastroenterology, Oncology &
              Oncosurgery, Orthopedics, Transplants, etc.
            </p>

            <p className="af-description">
              They have treated over 200,000 international patients from more
              than 175 countries and maintain partnerships with over 20
              international governments. The hospitals have a team of qualified
              and experienced medical specialists who are proficient in handling
              complex cases with the utmost care. This is the major reason why
              patients from different corners of the world prefer the Fortis
              Group of Hospitals for medical treatment.
            </p>
            {/* 
            <div className="af-services">
              <h3 className="af-services-title">Our Specialized Services</h3>
              <div className="af-services-grid">
                <div className="af-service-item">Cardiology</div>
                <div className="af-service-item">Neurology & Neurosurgery</div>
                <div className="af-service-item">Gastroenterology</div>
                <div className="af-service-item">Oncology & Oncosurgery</div>
                <div className="af-service-item">Orthopedics</div>
                <div className="af-service-item">Transplants</div>
              </div>
            </div>

            <div className="af-fitsib">
              <h3 className="af-fitsib-title">How Fitsib Can Help You</h3>
              <p className="af-fitsib-description">
                If you are seeking medical care in India at a competitive price,
                we can be your helping hand. Fitsib is a leading medical tourism
                company connecting you with top NABH and JCI-accredited
                hospitals. We also have a pool of highly qualified and
                internationally trained doctors and surgeons with more than 25
                years of experience in their field.
              </p>
              <p className="af-fitsib-description">
                We have a dedicated team to assist you with a hassle-free
                medical journey. From visa assistance to scheduling medical
                appointments, airport transfers, language assistance, getting
                cost estimates from different hospitals, and accommodation
                arrangements, we can help with everything. After treatment, we
                also provide continuous support through follow-up consultations
                to monitor the patient's recovery.
              </p>
            </div> */}

            <div className="af-actions">
              <button className="af-btn-primary">Get FREE Opinion</button>
              {/* <button className="af-btn-secondary">
                Learn More About Our Services
              </button> */}
            </div>
          </div>

          <div className="af-image">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Fortis Hospital"
              className="af-main-image"
            />
            <div className="af-accreditations">
              <div className="af-accreditation-item">
                <div className="af-accreditation-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span>NABH Accredited</span>
              </div>
              <div className="af-accreditation-item">
                <div className="af-accreditation-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span>JCI Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFortis;
