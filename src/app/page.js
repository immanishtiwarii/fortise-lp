import AboutFortis from "./components/AboutFortis";
import DepartmentsCarousel from "./components/Departments/DepartmentsCarousel";
import DoctorsCarousel from "./components/doctors/DoctorsCarousel";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FooterWithForm from "./components/FooterWithForm";
import Header from "./components/Header";
import HeroSection from "./components/herosection/HeroSection";
import InternationalPatientServices from "./components/InternationalPatientServices";
import MobileFooterCTA from "./components/MobileFooterCTA";
import HealthcareProcess from "./components/section-two/HealthcareProcess";
import SimilarHospitals from "./components/SimilarHospitals";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HealthcareProcess />
        <DoctorsCarousel />
        <DepartmentsCarousel />
        <InternationalPatientServices />
        <AboutFortis />
        <FAQSection />
        <SimilarHospitals />
        <FooterWithForm />
        <Footer />
        <MobileFooterCTA />
      </main>
    </>
  );
}
