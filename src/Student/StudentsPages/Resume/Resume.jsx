import "./Resume.css";
import { FaFileAlt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-card">

        <div className="resume-icon">
          <FaFileAlt />
        </div>

        <h1>Professional Resume Builder</h1>

        <p className="resume-subtitle">
          Build a modern and ATS-friendly resume in just a few minutes using
          Zety Resume Builder.
        </p>

        <div className="resume-features">

          <div className="feature">
            <FaCheckCircle />
            <span>Professional Templates</span>
          </div>

          <div className="feature">
            <FaCheckCircle />
            <span>Easy Resume Editor</span>
          </div>

          <div className="feature">
            <FaCheckCircle />
            <span>ATS Friendly Format</span>
          </div>

          <div className="feature">
            <FaCheckCircle />
            <span>Ready to Download</span>
          </div>

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
  );
}

export default Resume;