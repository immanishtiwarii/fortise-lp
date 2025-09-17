import React from "react";
import "./HealthcareProcess.css";
import ProcessForm from "../popupform/ProcessForm";

const HealthcareProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Explore & Match",
      description: "Find the right hospital and specialist",
    },
    {
      id: 2,
      title: "Doctor Opinion",
      description: "Get expert medical opinion",
    },
    {
      id: 3,
      title: "Cost Estimate",
      description: "Receive transparent cost estimates",
    },
    {
      id: 4,
      title: "Medical Visa",
      description: "Assistance with visa application",
    },
    {
      id: 5,
      title: "On Field Assistance",
      description: "Travel and accommodation support",
    },
    {
      id: 6,
      title: "Treat & Get Fit",
      description: "Treatment with follow-up care",
    },
  ];

  return (
    <section className="healthcare-process-section">
      <div className="hp-container">
        <div className="hp-header">
          <h2 className="hp-title">
            Simple Process for Health Treatment at
            <span className="hp-highlight"> Zero Cost & Zero Worries</span>
          </h2>
        </div>

        <div className="hp-steps-compact">
          {steps.map((step, index) => (
            <div key={step.id} className="hp-step-compact">
              <div className="hp-step-number-compact">{step.id}</div>
              <div className="hp-step-content-compact">
                <h3 className="hp-step-title-compact">{step.title}</h3>
                <p className="hp-step-description-compact">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hp-step-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#0CA854"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <ProcessForm />
      </div>
    </section>
  );
};

export default HealthcareProcess;
