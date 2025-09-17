import React from "react";
import "./FortisBanner.css";
import Form from "./Form";

const FortisBanner = () => {
  return (
    <>
      <section id="hometop-section">
        <img
          src="https://campaign.medflick.com/fortis/images/2023/01/slider.jpg"
          alt="Fortis Hospital"
        />
        <div className="hometop-section">
          <div className="hometop-section-left">
            <div className="slider-doc">
              <h1>
                Schedule a Free Appointment at <span>Fortis Hospital</span>
                {/* Now */}
              </h1>
              <p>Special Packages for our International Patients</p>

              {/* 
        <div className="hometop-section-button">
          <a href="#" data-popup-open="popup-4">ENQUIRE NOW</a>  
        </div> 
        */}
            </div>
          </div>

          <div className="hometop-section-right">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default FortisBanner;
