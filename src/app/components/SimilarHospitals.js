"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SimilarHospitals.css";
import PopupForm from "./popupform/PopupForm";

const SimilarHospitals = () => {
  const [showForm, setShowForm] = useState(false);
  const hospitals = [
    {
      id: 1,
      name: "Институт сердца Fortis Escorts, Нью-Дели",
      address:
        "Станция метро, Okhla Rd, напротив Sukhdev Vihar, Sarai Jullena, New Friends Colony, Нью-Дели, Делхи 110025",
      image: "/image/hospital/Escort.jpg",
      specialty: "Кардиология и кардиохирургия",
    },
    {
      id: 2,
      name: "Больница Fortis, Ноида",
      address:
        "B-22, Rasoolpur Nawada, D Block, Sector 62, Ноида, Uttar Pradesh 201301",
      image: "/image/hospital/noida.avif",
      specialty: "Многопрофильная больница",
    },
    {
      id: 3,
      name: "Больница Fortis, Shalimar Bagh, Нью-Дели",
      address:
        "A Block, Shaheed Udham Singh Marg, Poorbi Shalimar Bag, Shalimar Bagh, Нью-Дели, 110088",
      image: "/image/hospital/shalimar.avif",
      specialty: "Многопрофильная больница",
    },
    {
      id: 4,
      name: "Больница Fortis, Vasant Kunj, Нью-Дели",
      address:
        "Aruna Asaf Ali Marg, Pocket 1, Sector B, Vasant Kunj, Нью-Дели, Делхи 110070",
      image: "/image/hospital/vasant-kunj.jpg",
      specialty: "Многопрофильная больница",
    },
    {
      id: 5,
      name: "Исследовательский институт Fortis Memorial, Гургаон",
      address: "Sector - 44, напротив HUDA City Centre, Гургаон, 122002",
      image: "/image/hospital/gurugram.webp",
      specialty: "Многопрофильная больница",
    },
  ];

  return (
    <section className="similar-hospitals-section">
      <div className="sh-container">
        <div className="sh-header">
          <h2 className="sh-title">Похожие больницы</h2>
          <p className="sh-subtitle">
            Ознакомьтесь с другими больницами Fortis, предоставляющими
            медицинские услуги мирового уровня
          </p>
        </div>

        <div className="sh-carousel-wrapper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".sh-next",
              prevEl: ".sh-prev",
            }}
            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="sh-swiper"
          >
            {hospitals.map((hospital) => (
              <SwiperSlide key={hospital.id}>
                <div className="sh-card">
                  <div className="sh-image-container">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="sh-image"
                    />
                    <div className="sh-specialty-badge">Fortis</div>
                  </div>

                  <div className="sh-content">
                    <h3 className="sh-name">{hospital.name}</h3>
                    <p className="sh-address">{hospital.address}</p>

                    <div className="sh-actions">
                      <a
                        href="https://wa.me/+918802552796?text=Hi%20fortis-group-hospitals,%20I%20want%20more%20information%20about%20your%20hospital"
                        className="sh-whatsapp-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        WhatsApp
                      </a>

                      <button
                        className="sh-contact-btn"
                        onClick={() => setShowForm(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                        </svg>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="sh-navigation">
            <button className="sh-prev">
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
            <button className="sh-next">
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
      <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default SimilarHospitals;
