import "./PlacementDrive.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sectionBg from "../../../assets/Images/upcoming-placement-background.jpeg";

// Bank Images
import hdfcBg from "../../../assets/Images/banks-logo/hdfc.webp";
import iciciBg from "../../../assets/Images/banks-logo/icic.webp";
import axisBg from "../../../assets/Images/banks-logo/asix.webp";
import kotakBg from "../../../assets/Images/banks-logo/kotak.webp";
import auBg from "../../../assets/Images/banks-logo/au.webp";
import idfcBg from "../../../assets/Images/banks-logo/idfc.webp";

function PlacementDrive() {
  const drives = [
    {
      company: "HDFC Bank",
      role: "Depti Branch mamager Officer",
      location: "Pan India",
      date: "2026",
      salary: "₹5.80 LPA",
      experience: "Freshers",
      bg: hdfcBg,
    },
    {
      company: "ICICI Bank",
      role: "Relationship Manager",
      location: "Pan India",
      date: "2026",
      salary: "₹4.9 LPA",
      experience: "Freshers",
      bg: iciciBg,
    },
    {
      company: "Axis Bank",
      role: "Assistant manager",
      location: "Pan India",
      date: "2026",
      salary: "₹4.42 LPA",
      experience: "Freshers",
      bg: axisBg,
    },
    {
      company: "Axis Bank",
      role: "Customer Service Officer",
      location: "Pan India",
      date: "2026",
      salary: "₹4.42 LPA",
      experience: "Freshers",
      bg: axisBg,
    },
    {
      company: "Kotak Mahindra Bank",
      role: "Sales Officer",
      location: "Pan India",
      date: "28 Aug 2026",
      salary: "₹3.3LPA",
      experience: "Freshers",
      bg: kotakBg,
    },
      {
      company: "Kotak Mahindra Bank",
      role: "Relationship Manager Officer",
      location: "Pan India",
      date: "2026",
      salary: "₹4 LPA",
      experience: "Freshers",
      bg: kotakBg,
    },
    {
      company: "AU Small Finance Bank",
      role: "Business Development Officer",
      location: "Pan India",
      date: "2026",
      salary: "₹3.5 LPA",
      experience: "Freshers",
      bg: auBg,
    },
    {
      company: "IDFC FIRST Bank",
      role: " Emerging Banker",
      location: "Pan India",
      date: " 2026",
      salary: "₹6 LPA",
      experience: "Freshers",
      bg: idfcBg,
    },
  ];

  return (
    <section
      className="placement-drive"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      <div className="placement-overlay"></div>

      <div className="container">

        <div className="section-title">

          <h2>Placement Drive</h2>

        <h1 className="placement-heading">
  Upcoming Banking Placement Drives For Manipal University
</h1>

          <p>
            Build your Banking Career with India's Leading Private Sector Banks
          </p>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
        >
          {drives.map((drive, index) => (
            <SwiperSlide key={index}>

              <div className="drive-card">

                <div
                  className="drive-image"
                  style={{
                    backgroundImage: `url(${drive.bg})`,
                  }}
                >

                  <div className="hiring-badge">
                    
                  </div>

                </div>

                <div className="drive-content">

                  <h3>{drive.company}</h3>

                  <h4>{drive.role}</h4>

                  <div className="details">

                    <div>
                      📍 {drive.location}
                    </div>

                    <div>
                      📅 {drive.date}
                    </div>

                    <div>
                      💼 {drive.experience}
                    </div>

                    <div>
                      💰 {drive.salary}
                    </div>

                  </div>

                  <button className="apply-btn">
                    Apply Now →
                  </button>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default PlacementDrive;