import React from "react";
import ButtonPopup from "./popupform/ButtonPopup";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Experience World-Class Healthcare</h2>
          <p style={styles.ctaText}>
            Schedule a consultation with our expert medical team today and take
            the first step towards better health.
          </p>
          <ButtonPopup
            className="footerctaButton"
            titile="Book an Appointment"
          />
          {/* <button style={styles.ctaButton}>Book an Appointment</button> */}
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0CA854",
    color: "white",
    marginTop: "auto",
  },
  ctaSection: {
    backgroundColor: "#0a8e44",
    padding: "3rem 1rem",
    textAlign: "center",
  },
  ctaContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "2.2rem",
    marginBottom: "1rem",
    fontWeight: "700",
  },
  ctaText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    opacity: "0.9",
    maxWidth: "600px",
    margin: "0 auto 2rem",
  },
  ctaButton: {
    backgroundColor: "white",
    color: "#0CA854",
    border: "none",
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

// Function to apply hover effects and media queries
const applyStyles = () => {
  const styleSheet = document.styleSheets[0];

  // Hover effects
  styleSheet.insertRule(
    `.cta-button:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); }`,
    styleSheet.cssRules.length
  );
  styleSheet.insertRule(
    `.social-link:hover { opacity: 1; }`,
    styleSheet.cssRules.length
  );
  styleSheet.insertRule(
    `.footer-link:hover { opacity: 1; }`,
    styleSheet.cssRules.length
  );
  styleSheet.insertRule(
    `.legal-link:hover { opacity: 1; }`,
    styleSheet.cssRules.length
  );

  // Media queries
  styleSheet.insertRule(
    `@media (max-width: 768px) {
      .footer-container { flex-direction: column; }
      .copyright-container { flex-direction: column; gap: 1rem; text-align: center; }
      .legal-links { justify-content: center; }
      .cta-title { font-size: 1.8rem; }
      .cta-text { font-size: 1rem; }
    }`,
    styleSheet.cssRules.length
  );
};

// Apply styles when component mounts
if (typeof document !== "undefined") {
  applyStyles();
}

export default Footer;
