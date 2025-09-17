"use client";
import React, { useState } from "react";
import "./FooterWithForm.css";

const FooterWithForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted from footer:", formData);
    // Add API or backend logic here
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-content">
          <h2 className="footer-heading">
            Get in Touch with Our Medical Experts
          </h2>
          <form className="footer-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="footer-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </footer>
      
    </>
  );
};

export default FooterWithForm;
