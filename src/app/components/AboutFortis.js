import React from "react";
import "./AboutFortis.css";
import ButtonPopup from "./popupform/ButtonPopup";

const AboutFortis = () => {
  return (
    <section className="about-fortis-section">
      <div className="af-container">
        <div className="af-content">
          <div className="af-text">
            <h2 className="af-title">О группе больниц Fortis</h2>
            <p className="af-description">
              Группа больниц Fortis — один из ведущих поставщиков медицинских
              услуг в Индии. Организация управляет 28 медицинскими учреждениями,
              аккредитованными международными организациями, такими как NABH и
              JCI. Благодаря стремлению к совершенству, больницы Fortis известны
              высоким качеством медицинской помощи в различных направлениях.
            </p>
            <div className="af-highlights">
              <div className="af-stat">
                <span className="af-stat-number">28</span>
                <span className="af-stat-label">Медицинских учреждений</span>
              </div>
              <div className="af-stat">
                <span className="af-stat-number">200,000+</span>
                <span className="af-stat-label">Международных пациентов</span>
              </div>
              <div className="af-stat">
                <span className="af-stat-number">175+</span>
                <span className="af-stat-label">Стран мира</span>
              </div>
            </div>
            <p className="af-description">
              Группа предлагает комплексную поддержку для международных
              пациентов, включая выделенных координаторов, помощь с поездками и
              проживанием, переводческие услуги и многое другое. Больницы
              специализируются в различных областях, таких как кардиология,
              неврология и нейрохирургия, гастроэнтерология, онкология и
              онкохирургия, ортопедия, трансплантология и др.
            </p>
            <p className="af-description">
              Более 200 000 международных пациентов из более чем 175 стран уже
              прошли лечение в больницах Fortis. Группа также сотрудничает с
              более чем 20 правительствами разных стран. В клиниках работают
              квалифицированные и опытные специалисты, способные справляться с
              самыми сложными случаями с максимальной заботой и вниманием.
              Именно поэтому пациенты со всего мира выбирают группу больниц
              Fortis для прохождения лечения.
            </p>
            <div className="af-actions">
              <ButtonPopup
                className="ips-cta-button"
                titile="Получите бесплатное мнение"
              />
            </div>
          </div>

          <div className="af-image">
            <img
              src="/image/fortis.webp"
              alt="Fortis Hospital"
              className="af-main-image"
            />
            <div className="af-accreditations">
              <div className="af-accreditation-item">
                <div className="af-accreditation-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span>Аккредитация NABH</span>
              </div>
              <div className="af-accreditation-item">
                <div className="af-accreditation-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span>Аккредитация JCI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFortis;
