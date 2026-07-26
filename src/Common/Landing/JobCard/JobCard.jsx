import "./JobCard.css";
import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleApply = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    // User not logged in
    if (!token || !user) {
      navigate("/login", {
        state: {
          from: "/student/jobs",
        },
      });
      return;
    }

    // Student Login
    if (user.role === "student") {
      navigate("/student/jobs");
      return;
    }

    // Admin Login
    if (user.role === "admin") {
      alert("Admin cannot apply for jobs.");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="job-card">

      <div className="job-top">

        <div className="company-logo">
          {(job.company || "N").charAt(0).toUpperCase()}
        </div>

        <div className="company-info">
          <h3>{job.company || "N/A"}</h3>
          <p>{job.title}</p>
        </div>

      </div>

      <div className="job-details">

        <span>📍 {job.location}</span>

        <span>💰 {job.package}</span>

        <span>🧑‍💻 {job.jobType || job.type}</span>

      </div>

      <div className="job-skills">

        {job.skills && job.skills.length > 0 ? (

          job.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))

        ) : (

          <span>No Skills</span>

        )}

      </div>

      <div className="job-footer">

        <p>
          Last Date :
          <strong>
            {" "}
            {job.deadline
              ? job.deadline
              : new Date(job.lastDate).toLocaleDateString()}
          </strong>
        </p>

        <button onClick={handleApply}>
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobCard;