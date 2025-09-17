"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

const ProcessForm = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="hp-cta-compact">
        <button
          className="hp-cta-button-compact"
          onClick={() => setShowForm(true)}
        >
          Start Your Journey
          <svg
            width="14"
            height="14"
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
      <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default ProcessForm;
