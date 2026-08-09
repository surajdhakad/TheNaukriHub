import "./PlacedStudedent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ===============================
// STUDENT IMAGE
// ===============================
import suraj from "../../../assets/Images/StudentImage/suraj.jpg";

// ===============================
// BACKGROUND
// ===============================
import bgImage from "../../../assets/Images/background-image.png";

// ===============================
// BANK LOGOS
// ===============================
import hdfc from "../../../assets/Images/banks-logo/hdfc.webp";
import icici from "../../../assets/Images/banks-logo/icic.webp";
import idfc from "../../../assets/Images/banks-logo/idfc.webp";
import kotak from "../../../assets/Images/banks-logo/kotak.webp";
import equitas from "../../../assets/Images/banks-logo/equtas.webp";
import dcb from "../../../assets/Images/banks-logo/DCB.webp";

const students = [
  {
    id: 1,
    name: "Suraj Dhakad",
    course: "Relationship Officer",
    company: "HDFC Bank",
    companyLogo: hdfc,
    image: suraj,
    package: "4.80 LPA",
    location: "Indore",
    batch: "2025",
    joining: "July 2026",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    course: "Sales Officer",
    company: "ICICI Bank",
    companyLogo: icici,
    image: suraj,
    package: "4.50 LPA",
    location: "Bhopal",
    batch: "2025",
    joining: "August 2026",
  },
  {
    id: 3,
    name: "Aman Verma",
    course: "Business Development Executive",
    company: "IDFC First Bank",
    companyLogo: idfc,
    image: suraj,
    package: "5.20 LPA",
    location: "Noida",
    batch: "2025",
    joining: "September 2026",
  },
  {
    id: 4,
    name: "Priya Singh",
    course: "Assistant Manager",
    company: "Kotak Mahindra Bank",
    companyLogo: kotak,
    image: suraj,
    package: "5.80 LPA",
    location: "Delhi",
    batch: "2025",
    joining: "July 2026",
  },
  {
    id: 5,
    name: "Rohit Patel",
    course: "Banking Executive",
    company: "Equitas Small Finance Bank",
    companyLogo: equitas,
    image: suraj,
    package: "4.60 LPA",
    location: "Jaipur",
    batch: "2025",
    joining: "August 2026",
  },
  {
    id: 6,
    name: "Neha Gupta",
    course: "Customer Relationship Officer",
    company: "DCB Bank",
    companyLogo: dcb,
    image: suraj,
    package: "4.90 LPA",
    location: "Pune",
    batch: "2025",
    joining: "October 2026",
  },
];

function PlacedStudent() {
  return (
    <section
      className="placed-students"
      style={{
        backgroundImage: `linear-gradient(rgba(8,20,45,.88),rgba(8,20,45,.90)),url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="placed-heading">
        <span>SUCCESS STORIES</span>

        <h2>Recently Placed Students</h2>

        <p>
          Our students have successfully started their careers in India's
          leading private sector banks.
        </p>
      </div>

     <Swiper
  modules={[Autoplay, Pagination]}
  loop={true}
  centeredSlides={false}
  speed={800}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{ clickable: true }}
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 22,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 28,
    },
  }}
>
        {students.map((student) => (
          <SwiperSlide key={student.id}>
            <div className="placed-card">

              <div className="student-top">

                <img
                  src={student.image}
                  alt={student.name}
                  className="student-image"
                />

                <div>

                  <h3>{student.name}</h3>

                  <p>{student.course}</p>

                </div>

              </div>

              <div className="company-box">

                <img
                  src={student.companyLogo}
                  alt={student.company}
                />

                <div>

                  <small>Placed In</small>

                  <h4>{student.company}</h4>

                </div>

              </div>

              <div className="student-details">

                <div>
                  💰
                  <span>{student.package}</span>
                </div>

                <div>
                  📍
                  <span>{student.location}</span>
                </div>

                <div>
                  🎓
                  <span>Batch {student.batch}</span>
                </div>

                <div>
                  📅
                  <span>{student.joining}</span>
                </div>

              </div>

              <button className="placed-btn">
                ✔ Successfully Placed
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PlacedStudent;