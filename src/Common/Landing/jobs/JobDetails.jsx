import "./JobDetails.css";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaGraduationCap,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";

import jobData from "../../../assets/data/jobData";

function JobDetails() {

  const navigate = useNavigate();

  const { jobId } = useParams();

  // =====================================================
  // FIND JOB
  // =====================================================

  const job = jobData.find(
    (item) =>
      String(item.id) ===
      String(jobId)
  );

  // =====================================================
  // JOB NOT FOUND
  // =====================================================

  if (!job) {

    return (

      <main className="job-not-found">

        <h1>
          Job Not Found
        </h1>

        <p>
          The job you are looking for
          does not exist.
        </p>

        <button
          type="button"
          onClick={() =>
            navigate("/jobs")
          }
        >

          <FaArrowLeft />

          Back to Jobs

        </button>

      </main>

    );

  }

  // =====================================================
  // LOCATIONS
  // =====================================================

  const locations =
    Array.isArray(job.location)
      ? job.location
      : job.location
        ? [job.location]
        : [];

  // =====================================================
  // RESPONSIBILITIES
  // =====================================================

  const responsibilities =
    Array.isArray(
      job.responsibilities
    )
      ? job.responsibilities
      : [];

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <main className="job-details-page">

      {/* =================================================
          TOP BAR
      ================================================= */}

      <div className="job-details-topbar">

        <button
          type="button"
          className="back-jobs-btn"
          onClick={() =>
            navigate("/jobs")
          }
        >

          <FaArrowLeft />

          Back to Jobs

        </button>

      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="job-details-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <section className="job-details-header">

          {/* LOGO */}

          <div className="job-details-logo">

            {job.logo ? (

              <img
                src={job.logo}
                alt={
                  `${job.bank || "Bank"} logo`
                }
                onError={(e) => {

                  e.currentTarget.style.display =
                    "none";

                }}
              />

            ) : (

              <div className="job-logo-fallback">

                {String(
                  job.bank ||
                  "JOB"
                )
                  .substring(0, 3)
                  .toUpperCase()}

              </div>

            )}

          </div>

          {/* TITLE */}

          <div className="job-details-title">

            <span className="job-details-bank">

              <FaBuilding />

              {job.bank ||
                "Bank"}

            </span>

            <h1>
              {job.title ||
                "Job Position"}
            </h1>

            {job.role && (

              <p>
                {job.role}
              </p>

            )}

          </div>

        </section>

        {/* =================================================
            JOB INFORMATION
        ================================================= */}

        <section className="job-details-info-grid">

          {/* EXPERIENCE */}

          <div className="job-detail-info-card">

            <div className="job-detail-icon">

              <FaBriefcase />

            </div>

            <div>

              <span>
                Experience
              </span>

              <strong>
                {job.experience ||
                  "Not specified"}
              </strong>

            </div>

          </div>

          {/* SALARY */}

          <div className="job-detail-info-card">

            <div className="job-detail-icon">

              <FaMoneyBillWave />

            </div>

            <div>

              <span>
                Salary
              </span>

              <strong>
                {job.salary ||
                  "Not specified"}
              </strong>

            </div>

          </div>

          {/* LOCATION */}

          <div className="job-detail-info-card">

            <div className="job-detail-icon">

              <FaMapMarkerAlt />

            </div>

            <div>

              <span>
                Location
              </span>

              <strong>

                {locations
                  .filter(Boolean)
                  .slice(0, 3)
                  .join(", ") ||
                  "All India"}

              </strong>

            </div>

          </div>

          {/* EDUCATION */}

          <div className="job-detail-info-card">

            <div className="job-detail-icon">

              <FaGraduationCap />

            </div>

            <div>

              <span>
                Education
              </span>

              <strong>

                {job.education ||
                  "Graduation"}

              </strong>

            </div>

          </div>

        </section>

        {/* =================================================
            CONTENT
        ================================================= */}

        <section className="job-details-content">

          {/* LEFT */}

          <div className="job-details-main">

            {/* DESCRIPTION */}

            <div className="job-details-section">

              <h2>
                Job Description
              </h2>

              <p>

                {job.description ||
                  `${job.bank || "The company"} is looking for talented candidates for the ${job.title || "job"} position. Candidates will be responsible for managing customers, achieving business targets and providing excellent banking services.`}

              </p>

            </div>

            {/* ELIGIBILITY */}

            <div className="job-details-section">

              <h2>
                Eligibility
              </h2>

              <div className="eligibility-box">

                <FaGraduationCap />

                <p>

                  {job.eligibility ||
                    "Candidates should have a graduation degree from a recognized university."}

                </p>

              </div>

            </div>

            {/* RESPONSIBILITIES */}

            {responsibilities.length >
              0 && (

                <div className="job-details-section">

                  <h2>
                    Key Responsibilities
                  </h2>

                  <ul className="responsibilities-list">

                    {responsibilities.map(
                      (
                        item,
                        index
                      ) => (

                        <li
                          key={index}
                        >

                          <FaCheckCircle />

                          <span>
                            {item}
                          </span>

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

          </div>

          {/* =================================================
              APPLY CARD
          ================================================= */}

          <aside className="job-apply-card">

            <h2>
              Interested in this job?
            </h2>

            <p>
              Apply now and take the
              next step towards your
              career.
            </p>

            <button
              type="button"
              className="apply-job-btn"
              onClick={() =>
                navigate(
                  `/login?redirect=/jobs/${job.id}`
                )
              }
            >

              Apply Now

            </button>

            <button
              type="button"
              className="back-all-jobs-btn"
              onClick={() =>
                navigate("/jobs")
              }
            >

              View All Jobs

            </button>

          </aside>

        </section>

      </div>

    </main>

  );

}

export default JobDetails;