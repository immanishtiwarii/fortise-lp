"use client";
import React from "react";

const Form = () => {
  return (
    <>
      <div className="HeroSection_formSection__mv8cV">
        <h2
          className="HeroSection_formTitle__v2xOK"
          style={{ color: "#0CA854" }}
        >
          Get in Touch with Our Medical Experts
        </h2>

        <form className="ContactForm_formContainer__pUM9x">
          {/* Patient Name */}
          <input
            type="text"
            placeholder="Patient Name"
            className="ContactForm_input__bYj0J"
            required
            name="Name"
            value=""
            onChange={() => {}}
          />

          {/* Email */}
          <div className="ContactForm_inputWrapper__swD0R">
            <input
              type="email"
              placeholder="Enter Your Email-ID"
              className="ContactForm_input__bYj0J"
              required
              name="Email"
              value=""
              onChange={() => {}}
            />
          </div>

          {/* City */}
          <input
            type="text"
            placeholder="City"
            className="ContactForm_input__bYj0J"
            name="City"
            value=""
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="City"
            className="ContactForm_input__bYj0J"
            name="City"
            value=""
            onChange={() => {}}
          />

          <input
            type="text"
            placeholder="City"
            className="ContactForm_input__bYj0J"
            name="City"
            value=""
            onChange={() => {}}
          />

          {/* Description */}
          <textarea
            name="Description"
            placeholder="Describe the current medical problem"
            className="ContactForm_input__bYj0J"
            rows="4"
          ></textarea>

          {/* Age */}
          <div className="ContactForm_inputWrapper__swD0R">
            <input
              type="text"
              placeholder="Age"
              className="ContactForm_input__bYj0J"
              name="Age"
              value=""
              onChange={() => {}}
            />
          </div>

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
