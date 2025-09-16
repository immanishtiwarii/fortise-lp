import AboutFortis from "./components/AboutFortis";
import DepartmentsCarousel from "./components/Departments/DepartmentsCarousel";
import Doctors from "./components/doctors/Doctors";
import DoctorsCarousel from "./components/doctors/DoctorsCarousel";
import FAQSection from "./components/FAQSection";
import Header from "./components/Header";
import HeroSection from "./components/herosection/HeroSection";
import InternationalPatientServices from "./components/InternationalPatientServices";
import SectionTwo from "./components/section-two/SectionTwo";
import SimilarHospitals from "./components/SimilarHospitals";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionTwo />
        {/* <Doctors /> */}
        <DoctorsCarousel />
        <DepartmentsCarousel />
        <InternationalPatientServices />
        <AboutFortis />
        <FAQSection />
        <SimilarHospitals />
      </main>
    </>
  );
}
