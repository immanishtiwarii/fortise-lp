"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ButtonPopup from "../popupform/ButtonPopup";

const Doctors = () => {
  return (
    <>
      <div className="section-full-width">
        <div className="Container_container__gCi3f">
          <div
            className="HospitalCard_newcontainer__416s8"
            style={{
              background:
                "linear-gradient(180deg, #E2FFEF 0%, rgba(244, 247, 255, 0.4) 100%);",
            }}
          >
            <h2
              className="HospitalCard_title__64mdI"
              style={{ color: "#0CA854" }}
            >
              Meet Our Doctors
            </h2>
            <div className="HospitalCard_sliderContainer__EfsPq">
              <div className="HospitalCard_doctorsSlider__GXCgc">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  style={{
                    paddingBottom: "40px",
                    scrollBehavior: "smooth",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {[...Array(6)].map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className="HospitalCard_doctorCard__cYOJ_"
                    >
                      <img
                        alt="Dr. Vivek Vij"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        src="https://d34iaq2x6tdl4r.cloudfront.net/thumbnail_dr_vivek_vij_1016_d698ee2b19_eb80f00af9_32878b1435.webp"
                        // className="HospitalCard_doctorImage__i_8Vw"
                        style={{
                          objectFit: "cover",
                          borderRadius: "50%",
                          width: "120px",
                          height: "120px",
                          marginBottom: "1rem",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <h3 className="HospitalCard_doctorName__KmCZJ">
                        Dr. Vivek Vij
                      </h3>
                      <div style={{ textAlign: "center" }}>
                        <div
                          className="HospitalCard_chatButtonContainer__ZVKh_"
                          style={{
                            display: "inline-block",
                            marginBottom: "1rem",
                          }}
                        >
                          <button className="HospitalCard_chatButton__mk1oU no-translate">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M380.9 97.1c-42-42-97.8-65.1-157.1-65.1C101.4 32 0 133.5 0 256c0 45.5 12 89.4 34.7 128.1L0 480l99.1-34.3c36.5 20 77.7 30.6 120.7 30.6h.1c122.5 0 222.1-100.6 222.1-224 0-59.3-23.1-115.2-61.1-154.2zM241.9 403.1c-30.2 0-59.8-8.2-85.3-23.7l-6.1-3.6-63.4 22.1 21.1-61.8-4-6.3c-17.1-27.2-26.1-58.7-26.1-91.3 0-94.1 76.5-170.6 170.6-170.6 45.6 0 88.4 17.8 120.7 50.1s50.1 75.1 50.1 120.7c.1 94.1-76.5 170.7-170.6 170.7zm94.2-124.4c-5.2-2.6-30.8-15.2-35.6-16.9-4.8-1.7-8.3-2.6-11.8 2.6s-13.5 16.9-16.5 20.4c-3 3.5-6 3.9-11.1 1.3s-21.5-7.9-40.9-25.2c-15.1-13.5-25.2-30.2-28.1-35.2-2.9-5-0.3-7.7 2.2-10.2 2.3-2.3 5.2-6 7.8-9s3.5-5.2 5.2-8.7c1.7-3.5 0.9-6.5-0.4-9.1-1.3-2.6-11.8-28.5-16.1-39-4.2-10.1-8.5-8.7-11.8-8.9-3-.2-6.5-.2-9.9-.2s-9.1 1.3-13.8 6.5-18.1 17.7-18.1 43.3 18.5 50.2 21 53.7c2.6 3.5 36.4 55.5 88.3 77.8 12.3 5.3 21.9 8.4 29.4 10.8 12.4 3.9 23.7 3.3 32.6 2 9.9-1.5 30.8-12.6 35.2-24.8s4.4-22.6 3-24.8c-1.3-2.3-4.7-3.7-9.9-6.3z" />
                            </svg>
                            &nbsp;Chat
                          </button>
                        </div>
                      </div>

                      <p className="HospitalCard_specialty__abcr_">
                        Liver Transplant Specialist
                      </p>
                      <p className="HospitalCard_hospital__5nkyn">
                        Fortis Hospital, Noida
                      </p>
                      <p className="HospitalCard_experience__ayFpJ">
                        28 years of experience
                      </p>

                      <div className="HospitalCard_buttonContainer__PVQ9v">
                        <ButtonPopup className="HospitalCard_contactButton__kPFpe" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
