import React from "react";

const Award = () => {
  return (
    <>
      <div className="HeroSection_centerSection__uQ3g8">
        <div className="HeroSection_statsSection__nkrbD">
          <div className="HeroSection_statsTop__Ra4B6">
            {/* Stat Item 1 - Hospitals */}
            <div className="HeroSection_statItem__ma_la">
              <img
                alt="Hospital Icon"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                src="https://d34iaq2x6tdl4r.cloudfront.net/public/Fitsib_Marketing/hospital-icon.svg"
                style={{ color: "transparent" }}
              />
              <div className="HeroSection_statContent__Rb2S1">
                <span className="HeroSection_statNumber__57KA2"></span>
                <span className="HeroSection_statText__RAVBJ">
                  Hospitals across Country
                </span>
              </div>
            </div>

            {/* Stat Item 2 - NABH */}
            <div className="HeroSection_statItem__ma_la">
              <img
                alt="NABH Icon"
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                src="https://d34iaq2x6tdl4r.cloudfront.net/public/Fitsib_Marketing/nabh.webp"
                style={{ color: "transparent" }}
              />
              <div className="HeroSection_statContent__Rb2S1">
                <span className="HeroSection_statNumber__57KA2"></span>
                <span className="HeroSection_statText__RAVBJ">
                  NABH Accredited
                </span>
              </div>
            </div>
          </div>

          {/* JCI Accredited Section */}
          <div className="HeroSection_jciSection__WqMf0">
            <img
              alt="JCI Icon"
              loading="lazy"
              width="64"
              height="64"
              decoding="async"
              src="https://d34iaq2x6tdl4r.cloudfront.net/public/Fitsib_Marketing/accreditations_83_png_fa11bb0938.webp"
              style={{ color: "transparent" }}
            />
            <div className="HeroSection_statContent__Rb2S1">
              <span className="HeroSection_statNumber__57KA2"></span>
              <span className="HeroSection_statText__RAVBJ">
                JCI Accredited
              </span>
            </div>
          </div>

          {/* Google Reviews */}
          <div className="HeroSection_googleReviews__pLePG">
            <img
              alt="Google Reviews"
              loading="lazy"
              width="120"
              height="40"
              decoding="async"
              src="https://d34iaq2x6tdl4r.cloudfront.net/public/Fitsib_Marketing/thumbnail_google_logo_9a8f8d02be.webp"
              style={{ color: "transparent" }}
            />
            <div className="HeroSection_stars__gIKyS">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  alt="Star"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  src="https://d34iaq2x6tdl4r.cloudfront.net/public/Fitsib_Marketing/star.svg"
                  style={{ color: "transparent" }}
                />
              ))}
            </div>
            <span className="HeroSection_reviewText__pKWcf">
              4.8/5.0 (8539 Reviews)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
