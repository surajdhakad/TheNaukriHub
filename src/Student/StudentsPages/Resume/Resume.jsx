
import "./Resume.css";

import Navbar from "../../StudentsComponents/Navbar/Navbar";

import {
  FaFileAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Resume() {
  const features = [
    "Professional Templates",
    "Easy Resume Editor",
    "ATS Friendly Format",
    "Ready to Download",
  ];

  return (
    <>
      {/* STUDENT NAVBAR */}
      <Navbar />

      <div className="resume-page">

        <div className="resume-card">

          <div className="resume-icon">
            <FaFileAlt />
          </div>

          <h1>Professional Resume Builder</h1>

          <p className="resume-subtitle">
            Build a modern and ATS-friendly resume in just a few
            minutes using Zety Resume Builder.
          </p>

          <div className="resume-features">
            {features.map((feature, index) => (
              <div className="resume-feature" key={index}>
                <FaCheckCircle />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.zety.com/resume-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Build Resume Now
            <FaExternalLinkAlt />
          </a>

        </div>

      </div>
    </>
  );
}

export default Resume;
