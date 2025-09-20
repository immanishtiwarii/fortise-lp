import React from "react";
import "./InternationalPatientServices.css";

const InternationalPatientServices = () => {
  const services = [
    {
      id: 1,
      title: "Advance Bookings",
      description:
        "Patients can share their medical reports online to discuss their requirements and get treatment plans and quotes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "In Hospital Support",
      description:
        "Patients can share their medical reports online to discuss their requirements and get treatment plans and quotes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Language Assistance",
      description:
        "Patients can share their medical reports online to discuss their requirements and get treatment plans and quotes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Post Surgery Care",
      description:
        "Patients can share their medical reports online to discuss their requirements and get treatment plans and quotes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="international-patient-section">
      <div className="ips-container">
        <div className="ips-content">
          <div className="ips-text">
            <h2 className="ips-title">International Patient Services</h2>
            <p className="ips-subtitle">
              We provide comprehensive support for our international patients,
              ensuring a seamless healthcare experience from consultation to
              recovery.
            </p>

            <div className="ips-cards">
              {services.map((service) => (
                <div key={service.id} className="ips-card">
                  <div className="ips-card-icon">{service.icon}</div>
                  <div className="ips-card-content">
                    <h3 className="ips-card-title">{service.title}</h3>
                    <p className="ips-card-description">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="ips-cta-button">
              Get Started Today
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="ips-image">
            <img
              src="/image/doctor-team.png"
              alt="Doctor and patient"
              className="ips-main-image"
            />
            <div className="ips-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalPatientServices;
