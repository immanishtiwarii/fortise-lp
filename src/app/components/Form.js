"use client";
import React, { useMemo, useState } from "react";
import { countries } from "./CountryList";
import Select from "react-select";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phonecode: "",
    phone: "",
    description: "",
    age: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const options = useMemo(
    () =>
      countries?.map((e) => ({
        value: e?.dialCode,
        label: e?.name,
      })),
    [countries]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption.label,
      phonecode: selectedOption.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Form submitted successfully!");
        // Reset form if needed
        setFormData({
          name: "",
          email: "",
          country: "",
          phonecode: "",
          phone: "",
          description: "",
          age: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <div className="HeroSection_formSection__mv8cV">
        <h2
          className="HeroSection_formTitle__v2xOK"
          style={{ color: "#0CA854" }}
        >
          Get in Touch with Our Medical Experts
        </h2>

        <form
          className="ContactForm_formContainer__pUM9x"
          onSubmit={handleSubmit}
        >
          {/* Patient Name */}
          <div className="ContactForm_inputWrapper__swD0R">
            <input
              type="text"
              placeholder="Patient Name"
              className="ContactForm_input__bYj0J"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="ContactForm_inputWrapper__swD0R">
            <input
              type="email"
              placeholder="Enter Your Email-ID"
              className="ContactForm_input__bYj0J"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <Select
            options={options}
            value={options.find((option) => option.label === formData?.country)}
            onChange={handleCountryChange}
            placeholder="Select Your Country..."
          />

          <div style={{ display: "flex", gap: "5px" }}>
            <div style={{ width: "40%" }}>
              <input
                type="text"
                placeholder="Country Code"
                name="pcode"
                value={formData?.phonecode}
                readOnly
                className="ContactForm_input__bYj0J"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={formData?.phone}
                autoComplete="off"
                onChange={handleChange}
                className="ContactForm_input__bYj0J"
              />
            </div>
          </div>

          {/* Age */}
          <div className="ContactForm_inputWrapper__swD0R">
            <input
              type="text"
              placeholder="Age"
              className="ContactForm_input__bYj0J"
              name="age"
              value={formData?.age}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            value={formData?.description}
            onChange={handleChange}
            placeholder="Describe the current medical problem"
            className="ContactForm_input__bYj0J"
            rows="4"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="ContactForm_submitButton__HTHGx"
            style={{
              backgroundColor: "#0CA854",
              opacity: 1,
              cursor: "pointer",
            }}
          >
            Get FREE Opinion
          </button>

          {/* Response Time Text */}
          <p className="ContactForm_responseTime__Uak0U">
            Get First Response Within 4hrs.
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
