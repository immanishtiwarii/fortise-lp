"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./DoctorsCarousel.css";
import ButtonPopup from "../popupform/ButtonPopup";
import PopupForm from "../popupform/PopupForm";

const DoctorsCarousel = () => {
  const [showForm, setShowForm] = useState(false);
  const doctors = [
    {
      id: 10,
      name: "Доктор Ашок Сет",
      image: "/image/doctor/dr-ashok-seth.webp",
      specialty: "Кардиохирург",
      hospital: "Кардиологический институт Fortis Escorts, Нью-Дели",
      experience: "Более 35 лет опыта",
    },
    {
      id: 11,
      name: "Доктор (полковник) Манжиндер Сандху",
      image: "/image/doctor/manjinder.webp",
      specialty: "Интервенционный кардиолог",
      hospital: "Исследовательский институт Fortis Memorial, Гургаон",
      experience: "Более 32 лет опыта",
    },
    {
      id: 12,
      name: "Доктор Динеш Кумар Миттал",
      image: "/image/doctor/dinesh.webp",
      specialty: "Кардиохирург",
      hospital: "Больница Fortis, Шалимар-Багх, Нью-Дели",
      experience: "Более 31 года опыта",
    },
    {
      id: 13,
      name: "Доктор Рахул Бхаргава",
      image: "/image/doctor/dr-rahul-bhargava-1909.webp",
      specialty: "Гематолог",
      hospital: "Исследовательский институт Fortis Memorial, Гургаон",
      experience: "Более 24 лет опыта",
    },
    {
      id: 14,
      name: "Доктор Сандип Вайшья",
      image: "/image/doctor/dr-sandeep-vaishya-566.webp",
      specialty: "Нейрохирург",
      hospital: "Исследовательский институт Fortis Memorial, Гургаон",
      experience: "Более 37 лет опыта",
    },
    {
      id: 1,
      name: "Доктор Вивек Видж",
      image: "/image/doctor/vivek.webp",
      specialty: "Специалист по трансплантации печени",
      hospital: "Больница Fortis, Ноида",
      experience: "28 лет опыта",
    },
    {
      id: 2,
      name: "Доктор Викас Дуа",
      image: "/image/doctor/vikash.webp",
      specialty: "Гематолог",
      hospital: "Больница Fortis, Ноида",
      experience: "15 лет опыта",
    },
    {
      id: 3,
      name: "Доктор Винод Райна",
      image: "/image/doctor/vinod.webp",
      specialty: "Медицинский онколог",
      hospital: "Исследовательский институт Fortis Memorial, Гургаон",
      experience: "51 год опыта",
    },
    {
      id: 4,
      name: "Доктор Манодж Миглани",
      image: "/image/doctor/manoj.webp",
      specialty: "Хирург позвоночника",
      hospital: "Больница Fortis, Васант Кундж, Нью-Дели",
      experience: "28 лет опыта",
    },
  ];

  return (
    <section className="doctors-carousel-section">
      <div className="doctors-container">
        <h2 className="doctors-section-title">Наши опытные врачи</h2>
        <p className="doctors-section-subtitle">
          Познакомьтесь с нашей командой высококвалифицированных медицинских
          специалистов
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          // pagination={{
          //   clickable: true,
          //   dynamicBullets: true,
          // }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          // modules={[Pagination, Autoplay]}
          className="doctors-swiper"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="doctor-card">
                <div className="doctor-image-container">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />
                  {/* <div className="doctor-overlay">
                    <button className="view-profile-btn">View Profile</button>
                  </div> */}
                </div>

                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <p className="doctor-hospital">{doctor.hospital}</p>
                  <p className="doctor-experience">{doctor.experience}</p>

                  <div className="doctor-actions">
                    <button
                      className="chat-btn"
                      onClick={() =>
                        window.open(
                          "https://wa.me/918802552796",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M380.9 97.1c-42-42-97.8-65.1-157.1-65.1C101.4 32 0 133.5 0 256c0 45.5 12 89.4 34.7 128.1L0 480l99.1-34.3c36.5 20 77.7 30.6 120.7 30.6h.1c122.5 0 222.1-100.6 222.1-224 0-59.3-23.1-115.2-61.1-154.2zM241.9 403.1c-30.2 0-59.8-8.2-85.3-23.7l-6.1-3.6-63.4 22.1 21.1-61.8-4-6.3c-17.1-27.2-26.1-58.7-26.1-91.3 0-94.1 76.5-170.6 170.6-170.6 45.6 0 88.4 17.8 120.7 50.1s50.1 75.1 50.1 120.7c.1 94.1-76.5 170.7-170.6 170.7zm94.2-124.4c-5.2-2.6-30.8-15.2-35.6-16.9-4.8-1.7-8.3-2.6-11.8 2.6s-13.5 16.9-16.5 20.4c-3 3.5-6 3.9-11.1 1.3s-21.5-7.9-40.9-25.2c-15.1-13.5-25.2-30.2-28.1-35.2-2.9-5-0.3-7.7 2.2-10.2 2.3-2.3 5.2-6 7.8-9s3.5-5.2 5.2-8.7c1.7-3.5 0.9-6.5-0.4-9.1-1.3-2.6-11.8-28.5-16.1-39-4.2-10.1-8.5-8.7-11.8-8.9-3-.2-6.5-.2-9.9-.2s-9.1 1.3-13.8 6.5-18.1 17.7-18.1 43.3 18.5 50.2 21 53.7c2.6 3.5 36.4 55.5 88.3 77.8 12.3 5.3 21.9 8.4 29.4 10.8 12.4 3.9 23.7 3.3 32.6 2 9.9-1.5 30.8-12.6 35.2-24.8s4.4-22.6 3-24.8c-1.3-2.3-4.7-3.7-9.9-6.3z" />
                      </svg>
                      <span>Chat</span>
                    </button>

                    <button
                      className="contact-btn"
                      onClick={() => setShowForm(true)}
                    >
                      Contact Doctor
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default DoctorsCarousel;
