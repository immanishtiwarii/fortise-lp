"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./DepartmentsCarousel.css";

const DepartmentsCarousel = () => {
  const departments = [
    {
      id: 1,
      name: "Cardiology & Cardiac Surgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Cardiology_b53152fe08_c1b4b80700_bd8a9a3942_c44f70caa6.webp",
    },
    {
      id: 2,
      name: "Gastroenterology",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Gastroentrology_1c2189dde8_8f5335208e_fbdf5457e4_e74a5c9268.webp",
    },
    {
      id: 3,
      name: "Hepatology",
      icon: "https://mm-fitsib.s3.ap-south-1.amazonaws.com/Group_1171276067_2a5bbc7358.svg",
    },
    {
      id: 4,
      name: "IVF",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/ivf_aa300785f0_fdfd29a039_a5733a2f93_a79d0e3d7d.webp",
    },
    {
      id: 5,
      name: "Nephrology",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Nephrology_2b232f4aef_fb15f003fc_9318950394.webp",
    },
    {
      id: 6,
      name: "Neurology & Neurosurgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Neurology_and_Neurosurgery_ae946f6e00_06a56b1edd_edcd3fa652.webp",
    },
    {
      id: 7,
      name: "Oncology",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Oncology_8222b6952c_8388e08f14_104fd2bc44.webp",
    },
    {
      id: 8,
      name: "Orthopedics",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Property_1_Orthopedic_dd6e47cd10_1029372e56.webp",
    },
    {
      id: 10,
      name: "Spine Surgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Property_1_Neuro_9ab671f60e_2eb42e557a.webp",
    },
    {
      id: 11,
      name: "Transplant Surgery",
      icon: "https://d34iaq2x6tdl4r.cloudfront.net/Transplant_Surgery_62414adcba_aeb90d6d42_e138a92f19.webp",
    },
    {
      id: 12,
      name: "Urology",
      icon: "https://mm-fitsib.s3.ap-south-1.amazonaws.com/Urology_00d17db874_36169a6b9f.webp",
    },
  ];

  return (
    <section
      className="dept-section"
      style={{
        background:
          "linear-gradient(180deg, #E2FFEF 0%, rgba(244, 247, 255, 0.4) 100%)",
      }}
    >
      <div className="dept-container">
        <div className="dept-header">
          <h2 className="dept-title">Our Medical Departments</h2>
          <p className="dept-subtitle">
            Experience world-class healthcare with our specialized departments
          </p>
        </div>

        <div className="dept-carousel-wrapper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".dept-next",
              prevEl: ".dept-prev",
            }}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="dept-swiper"
          >
            {departments.map((department) => (
              <SwiperSlide key={department.id}>
                <div className="dept-card">
                  <div className="dept-icon-container">
                    <img
                      src={department.icon}
                      alt={department.name}
                      className="dept-icon"
                    />
                  </div>
                  <h3 className="dept-name">{department.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="dept-navigation">
            <button className="dept-prev">
              <svg
                width="20"
                height="20"
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
            <button className="dept-next">
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
      </div>
    </section>
  );
};

export default DepartmentsCarousel;
