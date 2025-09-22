import React from "react";
import Form from "../Form";
import Award from "./Award";

const HeroSection = () => {
  return (
    <>
      <div className="section-full-width">
        <div className="Container_container__gCi3f">
          <div className="HeroSection_container__30_d0">
            <div className="HeroSection_mainContent__UgI5d">
              <div className="HeroSection_leftSection__OBlE9">
                <div className="HeroSection_textContent__7_GZK">
                  <h1
                    className="HeroSection_title__im1kR"
                    style={{ color: "#0CA854" }}
                  >
                    Группа больниц Фортис
                  </h1>
                  <p
                    className="HeroSection_subtitle__rwTpg"
                    style={{ color: "#0CA854" }}
                  ></p>
                </div>
                <div className="HeroSection_imageContainer__MNRwL">
                  <img
                    alt="Medical treatment image"
                    loading="lazy"
                    decoding="async"
                    src="/banner.webp"
                    className="HeroSection_mainImage__wfw_A"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
              </div>
              <Award />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
