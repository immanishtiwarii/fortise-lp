import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="Header_header__AF_3G no-translate">
        <div className="Header_headerContent__VSKiG">
          <div className="Header_logoContainer__HdXnL">
            <a href="/care/lp">
              <Image
                alt="FitSib Logo"
                loading="lazy"
                width="170"
                height="60"
                decoding="async"
                data-nimg="1"
                className="Header_logo__1FRrW"
                style={{ color: "transparent" }}
                src="/image/logo-fortis.webp"
              />
            </a>
          </div>

          <div className="Header_rightContent__KFORT">
            <a
              href="https://wa.me/919211367800?text=Hi%20fortis-group-hospitals%20Doctor,%20I%20need%20consultation%20for%20my%20Treatment"
              className="Header_whatsappLink__cNTJs"
              aria-label="Contact on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="WhatsApp"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                className="Header_whatsappIcon__Lm69m"
                style={{ color: "transparent" }}
                src="/image/whatsapp-icon.svg"
              />
              <span className="Header_phoneNumber__vryge">Whatsapp</span>
            </a>

            {/* <div className="Header_rightContent__KFORT">
              <a
                href="https://wa.me/919211367800?text=Hi%20fortis-group-hospitals%20Doctor,%20I%20need%20consultation%20for%20my%20Treatment"
                className="whatsapp-button"
                aria-label="Contact on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  src="/image/whatsapp-icon.svg"
                  className="whatsapp-icon"
                />
                <span className="whatsapp-text">Whatsapp</span>
              </a>
            </div> */}

            {/* 
            <div className="Header_languageSelector__hgEyM">
              <div className="no-translate-wrapper">
                <div className="GoogleTranslate_languageSelector__wwhbw">
                  <button className="GoogleTranslate_languageButton__RAvP7">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z" />
                    </svg>
                    <span>Russian</span>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
