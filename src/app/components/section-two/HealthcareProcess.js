import React from "react";
import "./HealthcareProcess.css";
import ProcessForm from "../popupform/ProcessForm";

const HealthcareProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Исследуйте и сопоставляйте",
      description: "Найдите подходящую больницу и специалиста",
    },
    {
      id: 2,
      title: "Мнение врача",
      description: "Получите экспертное медицинское заключение",
    },
    {
      id: 3,
      title: "Оценка стоимости",
      description: "Получите прозрачную смету расходов",
    },
    {
      id: 4,
      title: "Медицинская виза",
      description: "Помощь в оформлении визы",
    },
    {
      id: 5,
      title: "О полевой помощи",
      description: "Поддержка проезда и проживания",
    },
    {
      id: 6,
      title: "Лечись и приводи себя в форму",
      description: "Лечение с последующим уходом",
    },
  ];

  return (
    <section className="healthcare-process-section">
      <div className="hp-container">
        <div className="hp-header">
          <h2 className="hp-title">
            Простой процесс лечения в{" "}
            <span className="hp-highlight">Нулевые затраты и ноль забот</span>
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
