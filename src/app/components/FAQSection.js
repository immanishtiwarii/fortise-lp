"use client";
import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What should I bring with me for my medical treatment at Fortis?",
      answer:
        "It is advised to bring your medical history reports, any current medications, passport, visa, identification documents, and insurance documents.",
    },
    {
      question:
        "What kind of language support is available for non-English speaking patients?",
      answer:
        "Professional translators and interpreters are available at the hospital for non-English-speaking patients to avoid the language barrier.",
    },
    {
      question: "How can I obtain a cost estimate for my treatment?",
      answer:
        "You can share the details of your medical conditions, diagnosis, and any other medical report. The team will review the reports and provide a detailed cost estimate for the treatment.",
    },
    {
      question:
        "Are there any special dietary arrangements available for international patients?",
      answer:
        "Yes, international patients can get special dietary arrangements according to their cultural and nutritional needs.",
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
              <h3>Still have questions?</h3>
              <p>
                Our patient care team is available to answer any questions you
                may have about treatment at Fortis Hospitals.
              </p>
              <div className="faq-contact-methods">
                {/* <div className="contact-method">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span>Email us at</span>
                    <a href="mailto:info@fortishealthcare.com">
                      info@fortishealthcare.com
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z" />
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span>Call us at</span>
                    <a href="tel:+911234567890">+91 123 456 7890</a>
                  </div>
                </div> */}
              </div>
              <button className="faq-contact-btn">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
