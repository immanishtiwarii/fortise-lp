import React, { useState } from "react";
import "./PopupForm.css";
import { countries } from "../CountryList";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose(); // Close after submit
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Get in Touch with Our Medical Experts</h2>
        <form onSubmit={handleSubmit} className="form-fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <textarea
            name="desc"
            placeholder="Describe your concern"
            rows={4}
            value={formData.desc}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
