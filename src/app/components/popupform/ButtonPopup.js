"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

const ButtonPopup = ({ className = "", titile = "" }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button className={className} onClick={() => setShowForm(true)}>
        {titile}
      </button>
      <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default ButtonPopup;
