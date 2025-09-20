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
      icon: "/image/dep/1.webp",
    },
    {
      id: 2,
      name: "Gastroenterology",
      icon: "/image/dep/2.webp",
    },
    {
      id: 3,
      name: "Hepatology",
      icon: "/image/dep/3.svg",
    },
    {
      id: 4,
      name: "IVF",
      icon: "/image/dep/4.webp",
    },
    {
      id: 5,
      name: "Nephrology",
      icon: "/image/dep/5.webp",
    },
    {
      id: 6,
      name: "Neurology & Neurosurgery",
      icon: "/image/dep/6.webp",
    },
    {
      id: 7,
      name: "Oncology",
      icon: "/image/dep/7.webp",
    },
    {
      id: 8,
      name: "Orthopedics",
      icon: "/image/dep/8.webp",
    },
    {
      id: 10,
      name: "Spine Surgery",
      icon: "/image/dep/9.webp",
    },
    {
      id: 11,
      name: "Transplant Surgery",
      icon: "/image/dep/10.webp",
    },
    {
      id: 12,
      name: "Urology",
      icon: "/image/dep/11.webp",
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
