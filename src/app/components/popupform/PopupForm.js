import React, { useState, useMemo } from "react";
import "./PopupForm.css";
import { countries } from "../CountryList";
import Select from "react-select";
import axios from "axios";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [loading, setLoading] = useState(false);
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

  const options = useMemo(
    () =>
      countries?.map((e) => ({
        value: e?.dialCode,
        label: e?.name,
      })),
    [countries]
  );

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
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Свяжитесь с нашими медицинскими экспертами</h2>
        <form onSubmit={handleSubmit} className="form-fields">
          <div className="popup-form-div">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="popup-form-div">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="popup-form-div">
            <Select
              options={options}
              value={options.find(
                (option) => option.label === formData?.country
              )}
              onChange={handleCountryChange}
              placeholder="Select Your Country..."
            />
            {errors.country && (
              <span className="error-text">{errors.country}</span>
            )}
          </div>

          <div
            className="popup-form-div"
            style={{ display: "flex", gap: "5px", marginTop: "10px" }}
          >
            <div style={{ width: "40%" }}>
              <input
                type="text"
                placeholder="Country Code"
                name="pcode"
                value={formData?.phonecode}
                readOnly
              />
            </div>
            <div style={{ width: "60%" }}>
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={formData?.phone}
                autoComplete="off"
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>
          </div>
          <div className="popup-form-div">
            <textarea
              name="description"
              placeholder="Describe your medical problem"
              rows={2}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Loading..." : "Получите бесплатное мнение"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
