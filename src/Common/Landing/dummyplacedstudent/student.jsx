
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import students from "./studentData";
import "./student.css";

const Student = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollNext = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector(".student-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 25;

    // Reset when reaching the end
    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 10
    ) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector(".student-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 25;

    if (slider.scrollLeft <= 10) {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Automatic Carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause autoplay while hovering
  const pauseCarousel = () => {
    clearInterval(intervalRef.current);
  };

  const resumeCarousel = () => {
    intervalRef.current = setInterval(scrollNext, 3000);
  };

  return (
    <section className="student-section">

      <div className="student-container">

        {/* Heading */}
        <div className="student-heading">

          <div className="student-small-title">
            OUR STUDENTS
          </div>

          <h2>
            Recently Placed Students
          </h2>

          <p>
            Meet our students who started their professional
            journey with leading companies.
          </p>

        </div>

        {/* Carousel Header */}
        <div className="student-slider-header">

          <div className="student-count">
            <strong>{students.length}</strong>
            <span> Students Placed</span>
          </div>

          <div className="student-arrows">

            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous students"
            >
              ←
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next students"
            >
              →
            </button>

          </div>

        </div>

        {/* Student Carousel */}
        <div
          className="student-slider"
          ref={sliderRef}
          onMouseEnter={pauseCarousel}
          onMouseLeave={resumeCarousel}
          onTouchStart={pauseCarousel}
          onTouchEnd={resumeCarousel}
        >

          {students.map((student) => (

            <article
              className="student-card"
              key={student.id}
            >

              {/* Image */}
              <div className="student-image">

                <img
                  src={student.image}
                  alt={student.name || "Placed Student"}
                  loading="lazy"
                />

                <div className="student-year">
                  {student.year}
                </div>

              </div>

              {/* Information */}
              <div className="student-info">

                <h3>
                  {student.name || "Successful Candidate"}
                </h3>

                <p className="student-course">
                  {student.course}
                </p>

                {/* Company */}
                <div className="student-company">

                  <span>Placed At</span>

                  <strong>
                    {student.company}
                  </strong>

                </div>

                {/* Details */}
                <div className="student-details">

                  <div>
                    <span>Package</span>
                    <strong>{student.package}</strong>
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>{student.location}</strong>
                  </div>

                </div>

                {/* Profile Button */}
                <Link
                  to={`/students/${student.id}`}
                  className="student-profile-btn"
                >
                  View Profile
                  <span>→</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Student;
