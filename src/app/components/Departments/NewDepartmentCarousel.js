"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./DepartmentsCarousel.css";

const NewDepartmentCarousel = () => {
  const [activeDept, setActiveDept] = useState(null);

  const departments = [
    {
      id: 1,
      name: "Cardiology & Cardiac Surgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Cardiology_b53152fe08_c1b4b80700_bd8a9a3942_c44f70caa6.webp",
      description: "Comprehensive heart care with advanced surgical options",
    },
    {
      id: 2,
      name: "Gastroenterology",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Gastroentrology_1c2189dde8_8f5335208e_fbdf5457e4_e74a5c9268.webp",
      description: "Specialized care for digestive system disorders",
    },
    {
      id: 3,
      name: "Hepatology",
      icon: "https://mm-fitsib.s3.ap-south-1.amazonaws.com/Group_1171276067_2a5bbc7358.svg",
      description: "Expert treatment for liver and biliary tract diseases",
    },
    {
      id: 4,
      name: "IVF",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/ivf_aa300785f0_fdfd29a039_a5733a2f93_a79d0e3d7d.webp",
      description: "Advanced fertility treatments and reproductive care",
    },
    {
      id: 5,
      name: "Nephrology",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Nephrology_2b232f4aef_fb15f003fc_9318950394.webp",
      description: "Comprehensive kidney disease management and treatment",
    },
    {
      id: 6,
      name: "Neurology & Neurosurgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Neurology_and_Neurosurgery_ae946f6e00_06a56b1edd_edcd3fa652.webp",
      description: "Expert care for brain, spine and nervous system disorders",
    },
    {
      id: 7,
      name: "Oncology",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Oncology_8222b6952c_8388e08f14_104fd2bc44.webp",
      description: "Comprehensive cancer care with cutting-edge treatments",
    },
    {
      id: 8,
      name: "Orthopedics",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Property_1_Orthopedic_dd6e47cd10_1029372e56.webp",
      description:
        "Specialized care for bones, joints and musculoskeletal system",
    },
    {
      id: 10,
      name: "Spine Surgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Property_1_Neuro_9ab671f60e_2eb42e557a.webp",
      description: "Advanced surgical solutions for spinal conditions",
    },
    {
      id: 11,
      name: "Transplant Surgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Transplant_Surgery_62414adcba_aeb90d6d42_e138a92f19.webp",
      description: "Life-saving organ transplant procedures and care",
    },
    {
      id: 12,
      name: "Urology",
      icon: "https://mm-fitsib.s3.ap-south-1.amazonaws.com/Urology_00d17db874_36169a6b9f.webp",
      description:
        "Specialized care for urinary tract and male reproductive system",
    },
  ];

  return (
    <div>
      <section
        className="departments-carousel-section"
        style={{
          background:
            "linear-gradient(180deg, #E2FFEF 0%, rgba(244, 247, 255, 0.4) 100%)",
        }}
      >
        <div className="dept-container">
          <div className="dept-header">
            <h2 className="dept-title">Our Medical Specialties</h2>
            <p className="dept-subtitle">
              Discover our comprehensive range of medical departments offering
              world-class healthcare
            </p>
          </div>

          <div className="dept-carousel-wrapper">
            <Swiper
              modules={[Navigation, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              navigation={{
                nextEl: ".dept-swiper-button-next",
                prevEl: ".dept-swiper-button-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="dept-swiper"
            >
              {departments.map((department) => (
                <SwiperSlide key={department.id}>
                  <div
                    className={`dept-card ${
                      activeDept === department.id ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveDept(department.id)}
                    onMouseLeave={() => setActiveDept(null)}
                  >
                    <div className="dept-icon-wrapper">
                      <div className="dept-icon-bg"></div>
                      <img
                        src={department.icon}
                        alt={department.name}
                        className="dept-icon"
                      />
                    </div>
                    <h3 className="dept-name">{department.name}</h3>
                    <div className="dept-hover-content">
                      <p className="dept-description">
                        {department.description}
                      </p>
                      <button className="dept-explore-btn">
                        Explore Department
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="dept-swiper-controls">
              <button className="dept-swiper-button-prev">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="dept-swiper-button-next">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="dept-view-all">
            <button className="dept-view-all-btn">
              View All Departments
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewDepartmentCarousel;
