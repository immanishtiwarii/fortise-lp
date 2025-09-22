"use client";
import React, { useState } from "react";
import "./FAQSection.css";
import ButtonPopup from "./popupform/ButtonPopup";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Что мне нужно взять с собой для лечения в больнице Fortis?",
      answer:
        "Рекомендуется взять с собой медицинские документы, текущие назначения и лекарства, паспорт, визу, удостоверение личности и страховые документы.",
    },
    {
      question:
        "Какую языковую поддержку вы предоставляете пациентам, не говорящим на английском?",
      answer:
        "В больнице доступны профессиональные переводчики и устные переводчики для пациентов, не говорящих на английском, чтобы устранить языковой барьер.",
    },
    {
      question: "Как я могу получить предварительную стоимость лечения?",
      answer:
        "Вы можете предоставить информацию о вашем состоянии, диагнозе и другие медицинские документы. Команда изучит их и предоставит подробную смету стоимости лечения.",
    },
    {
      question:
        "Предусмотрено ли специальное питание для международных пациентов?",
      answer:
        "Да, для международных пациентов доступны специальные диетические варианты с учетом их культурных и питательных потребностей.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find answers to common questions about our medical services and
            patient care
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="faq-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        activeIndex === index ? "M5 12H19" : "M12 5V19M5 12H19"
                      }
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <div className="faq-contact-card">
              <h3>Остались вопросы?</h3>
              <p>
                Наша команда по работе с пациентами готова ответить на любые
                ваши вопросы о лечении в больницах Fortis.
              </p>

              <div className="faq-contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    {/* WhatsApp SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M16 .396C7.165.396 0 7.56 0 16.396c0 2.89.765 5.723 2.212 8.212L.06 31.94l7.482-2.123c2.423 1.325 5.166 2.018 7.938 2.018 8.835 0 16-7.165 16-16S24.835.396 16 .396zm0 29.208c-2.437 0-4.815-.652-6.895-1.886l-.496-.292-4.438 1.26 1.283-4.323-.323-.507c-1.342-2.1-2.048-4.528-2.048-7.06 0-7.297 5.94-13.239 13.24-13.239 7.297 0 13.239 5.94 13.239 13.24 0 7.297-5.942 13.238-13.24 13.238zm7.294-9.234c-.383-.192-2.266-1.118-2.616-1.243-.35-.13-.605-.192-.86.192s-.985 1.243-1.207 1.5c-.222.256-.444.288-.826.096-.383-.192-1.618-.596-3.084-1.902-1.14-1.016-1.912-2.27-2.135-2.653-.222-.383-.024-.59.168-.782.173-.172.383-.444.574-.666.192-.222.256-.383.383-.637.128-.256.064-.48-.032-.672-.096-.192-.86-2.073-1.18-2.843-.31-.745-.626-.645-.86-.657-.222-.01-.48-.012-.738-.012-.256 0-.672.096-1.024.48-.352.383-1.344 1.312-1.344 3.2s1.376 3.706 1.568 3.964c.192.256 2.71 4.14 6.568 5.808.918.396 1.632.63 2.19.81.92.294 1.756.252 2.418.153.738-.11 2.266-.922 2.586-1.815.318-.894.318-1.658.222-1.815-.096-.157-.35-.254-.73-.446z" />
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span>Chat Us</span>
                    <a
                      href="https://wa.me/918802552796"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 88025 52796
                    </a>
                  </div>
                </div>
              </div>

              <ButtonPopup className="ips-cta-button" titile="Contact Us" />
              {/* <button className="faq-contact-btn">
                Contact Us
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
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
