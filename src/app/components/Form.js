"use client";
import React, { useMemo, useState } from "react";
import { countries } from "./CountryList";
import Select from "react-select";
import axios from "axios";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const datatosend = {
      name: formData?.name,
      email: formData?.email,
      phone: formData?.phonecode + formData?.phone,
      country: formData?.country,
      message: formData?.description,
      platform: "fortise-lp",
    };

    try {
      const response = await axios.post(
        "https://lp-backend-79l4.onrender.com/api/createlead",
        datatosend
      );

      console.log("Response:", response.data);

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
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        // Server responded with a status code other than 2xx
        alert(
          "Submission failed: " + error.response.data.message ||
            "Please try again."
        );
      } else {
        // Network error or something else
        alert("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="HeroSection_formSection__mv8cV">
        <h2
          className="HeroSection_formTitle__v2xOK"
          style={{ color: "#0CA854" }}
        >
          Свяжитесь с нашими медицинскими экспертами
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
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <Select
            options={options}
            value={options.find((option) => option.label === formData?.country)}
            onChange={handleCountryChange}
            placeholder="Select Your Country..."
          />
          {errors.country && (
            <span className="error-text">{errors.countrye}</span>
          )}

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
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>
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
            disabled={loading}
            className="ContactForm_submitButton__HTHGx"
            style={{
              backgroundColor: "#0CA854",
              opacity: 1,
              cursor: "pointer",
            }}
          >
            {loading ? "Loading..." : "Получите бесплатное мнение"}
          </button>

          {/* Response Time Text */}
          <p className="ContactForm_responseTime__Uak0U">
            Получите первый ответ в течение 4 часов.
          </p>
        </form>
      </div>
    </>
  );
};

export default Form;
