import "./JobCard.css";
import { useNavigate } from "react-router-dom";

// Background Image
import jobBg from "../../../assets/Images/hero-image.png";

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleApply = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {
      navigate("/login", {
        state: { from: "/student/jobs" },
      });
      return;
    }

    if (user.role === "admin") {
      alert("Admin cannot apply for jobs.");
      return;
    }

    navigate("/student/jobs");
  };

  return (
    <div
      className="bank-card"
      style={{
        backgroundImage: `linear-gradient(rgba(8,20,45,.82),rgba(8,20,45,.92)), url(${jobBg})`,
      }}
    >
      {/* Top Section */}
      <div className="bank-card-top">
        <img
          src={job.companyLogo || "/images/default-company.png"}
          alt={job.company}
          className="bank-logo"
        />
      </div>

      {/* Body */}
      <div className="bank-card-body">

        <div className="job-tag">
          🚀 Hiring Now
        </div>

        <h2>{job.title}</h2>

        <ul className="bank-details">

          <li>
            <span>📍</span>
            {job.location || "Pan India"}
          </li>

          <li>
            <span>💰</span>
            {job.package || "Best Package"}
          </li>

          <li>
            <span>💼</span>
            {job.jobType || job.type || "Full Time"}
          </li>

        </ul>

        <div className="bank-footer">

          <div className="deadline">

            <small>Last Date</small>

            <strong>
              {job.deadline
                ? job.deadline
                : new Date(job.lastDate).toLocaleDateString()}
            </strong>

          </div>

          <button onClick={handleApply}>
            Apply Now →
          </button>

        </div>

      </div>
    </div>
  );
}

export default JobCard;