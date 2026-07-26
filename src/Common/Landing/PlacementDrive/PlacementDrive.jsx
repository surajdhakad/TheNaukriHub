import "./PlacementDrive.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function PlacementDrive() {
  const drives = [
    {
      company: "Google",
      role: "Frontend Developer",
      date: "20 July 2026",
      location: "Bangalore",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      date: "25 July 2026",
      location: "Hyderabad",
    },
    {
      company: "Amazon",
      role: "SDE",
      date: "30 July 2026",
      location: "Noida",
    },
    {
      company: "Infosys",
      role: "Java Developer",
      date: "5 August 2026",
      location: "Pune",
    },
  ];

  return (
    <section className="placement-drive">

      <div className="section-title">
        <h2>Upcoming Placement Drives</h2>
        <p>Register before the last date</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {drives.map((drive, index) => (
          <SwiperSlide key={index}>
            <div className="drive-card">

              <h3>{drive.company}</h3>

              <h4>{drive.role}</h4>

              <p>📍 {drive.location}</p>

              <p>📅 {drive.date}</p>

              <button>Register</button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default PlacementDrive;