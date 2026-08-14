import "./JobCard.css";
import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const navigate = useNavigate();

  // =====================================================
  // VIEW DETAILS
  // =====================================================

  const handleViewDetails = () => {
    if (!job?._id) {
      console.log("Job ID not found");
      return;
    }

    navigate(`/jobs/${job._id}`, {
      state: {
        job,
      },
    });
  };

  // =====================================================
  // APPLY
  // =====================================================

  const handleApply = () => {
    const token = localStorage.getItem("token");

    let user = null;

    try {
      user = JSON.parse(
        localStorage.getItem("user")
      );
    } catch (error) {
      user = null;
    }

    // Not logged in
    if (!token || !user) {
      navigate("/login", {
        state: {
          from: `/jobs/${job?._id}`,
        },
      });

      return;
    }

    // Admin
    if (user.role === "admin") {
      alert("Admin cannot apply for jobs.");
      return;
    }

    // Student
    navigate("/student/jobs");
  };

  // =====================================================
  // LOGO
  // =====================================================

  const companyLogo =
    job?.companyLogo ||
    job?.company?.logo ||
    "/images/default-company.png";

  // =====================================================
  // DEADLINE
  // =====================================================

  const deadline =
    job?.deadline ||
    (job?.lastDate
      ? new Date(
          job.lastDate
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "Not Specified");

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <article className="bank-card">

      {/* =================================================
          TOP LOGO AREA
      ================================================= */}

      <div className="bank-card-top">

        {/* Decorative shapes */}

        <div className="logo-circle logo-circle-one"></div>

        <div className="logo-circle logo-circle-two"></div>

        {/* Logo */}

        <div className="bank-logo-box">

          <img
            src={companyLogo}
            alt={
              job?.company ||
              "Company"
            }
            className="bank-logo"
            onError={(e) => {
              e.currentTarget.src =
                "/images/default-company.png";
            }}
          />

        </div>

        {/* Curved bottom */}

        <div className="top-curve"></div>

      </div>


      {/* =================================================
          CARD BODY
      ================================================= */}

      <div className="bank-card-body">

        {/* Company */}

        <div className="company-name">

          {job?.company ||
            "Company"}

        </div>


        {/* Hiring Tag */}

        <div className="job-tag">

          <span className="job-tag-dot"></span>

          Hiring Now

        </div>


        {/* TITLE */}

        <h2 className="job-title">

          {job?.title ||
            "Job Position"}

        </h2>


        {/* =================================================
            DETAILS
        ================================================= */}

        <div className="bank-details">

          {/* Location */}

          <div className="job-detail">

            <span className="detail-icon">
              📍
            </span>

            <div>
              <small>
                Location
              </small>

              <strong>
                {job?.location ||
                  "Pan India"}
              </strong>
            </div>

          </div>


          {/* Salary */}

          <div className="job-detail">

            <span className="detail-icon">
              💰
            </span>

            <div>
              <small>
                Package
              </small>

              <strong>
                {job?.package ||
                  job?.salary ||
                  "Best Package"}
              </strong>
            </div>

          </div>


          {/* Job Type */}

          <div className="job-detail">

            <span className="detail-icon">
              💼
            </span>

            <div>
              <small>
                Job Type
              </small>

              <strong>
                {job?.jobType ||
                  job?.type ||
                  "Full Time"}
              </strong>
            </div>

          </div>

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="bank-footer">

          <div className="deadline">

            <span>
              Last Date
            </span>

            <strong>
              {deadline}
            </strong>

          </div>


          {/* Buttons */}

          <div className="job-card-buttons">

            <button
              type="button"
              className="view-job-btn"
              onClick={handleViewDetails}
            >
              View Details
            </button>

            <button
              type="button"
              className="apply-job-btn"
              onClick={handleApply}
            >
              Apply Now
              <span>→</span>
            </button>

          </div>

        </div>

      </div>

    </article>
  );
}

export default JobCard;