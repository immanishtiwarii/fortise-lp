"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

const ButtonPopup = ({ className = "" }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button
        className={className}
        onClick={() => setShowForm(true)}
        style={{
          color: "#0CA854",
          borderColor: "#0CA854",
        }}
      >
        Contact Doctor
      </button>
      <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default ButtonPopup;
