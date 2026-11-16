
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import students from "./studentData";
import "./student.css";

const StudentProfile = () => {
  const { id } = useParams();

  // Find initial student from URL
  const initialIndex = students.findIndex(
    (item) => item.id === id
  );

  const [activeIndex, setActiveIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  // Automatically change student every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % students.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Previous student
  const prevStudent = () => {
    setActiveIndex(
      (prev) => (prev - 1 + students.length) % students.length
    );
  };

  // Next student
  const nextStudent = () => {
    setActiveIndex(
      (prev) => (prev + 1) % students.length
    );
  };

  // Current student
  const student = students[activeIndex];

  // Student not found
  if (!student) {
    return (
      <section className="profile-not-found">
        <div>
          <h1>Student Not Found</h1>

          <p>
            The student profile you are looking for
            does not exist.
          </p>

          <Link to="/students" className="back-students-btn">
            ← Back to Students
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="student-profile-page">

      <div className="profile-container" key={student.id}>

        {/* Back Button */}
        <Link to="/students" className="profile-back">
          ← Back to Students
        </Link>

        {/* Carousel Controls */}
        <div className="student-carousel-controls">

          <button onClick={prevStudent}>
            ← Previous
          </button>

          <span>
            {activeIndex + 1} / {students.length}
          </span>

          <button onClick={nextStudent}>
            Next →
          </button>

        </div>

        {/* Profile Header */}
        <div className="profile-header">

          {/* Student Image */}
          <div className="profile-photo">
            <img
              src={student.image}
              alt={student.name || "Placed Student"}
            />
          </div>

          {/* Main Information */}
          <div className="profile-main">

            <span className="profile-label">
              PLACED STUDENT
            </span>

            <h1>
              {student.name || "Successful Candidate"}
            </h1>

            <p className="profile-course">
              {student.course}
            </p>

            <div className="profile-company-box">

              <span>
                Successfully placed at
              </span>

              <strong>
                {student.company}
              </strong>

            </div>

          </div>

          {/* Package */}
          <div className="profile-package">

            <span>PACKAGE</span>

            <strong>
              {student.package}
            </strong>

            <small>Per Annum</small>

          </div>

        </div>

        {/* Main Content */}
        <div className="profile-content">

          {/* About Student */}
          <div className="profile-box">

            <h2>About Student</h2>

            <p>
              {student.about}
            </p>

          </div>

          {/* Placement Details */}
          <div className="profile-box">

            <h2>Placement Details</h2>

            <div className="profile-details-grid">

              <div className="profile-detail">
                <span>Company</span>
                <strong>{student.company}</strong>
              </div>

              <div className="profile-detail">
                <span>Package</span>
                <strong>{student.package}</strong>
              </div>

              <div className="profile-detail">
                <span>Course</span>
                <strong>{student.course}</strong>
              </div>

              <div className="profile-detail">
                <span>Placement Year</span>
                <strong>{student.year}</strong>
              </div>

              <div className="profile-detail">
                <span>Qualification</span>
                <strong>{student.qualification}</strong>
              </div>

              <div className="profile-detail">
                <span>Location</span>
                <strong>{student.location}</strong>
              </div>

              <div className="profile-detail">
                <span>Experience</span>
                <strong>{student.experience}</strong>
              </div>

            </div>
          </div>

          {/* Skills */}
          <div className="profile-box">

            <h2>Skills</h2>

            <div className="profile-skills">

              {student.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Bottom */}
          <div className="profile-bottom">

            <Link
              to="/students"
              className="back-students-btn"
            >
              ← View All Students
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default StudentProfile;
