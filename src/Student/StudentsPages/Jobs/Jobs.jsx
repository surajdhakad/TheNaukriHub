import "./Jobs.css";
import Navbar from "../../StudentsComponents/Navbar/Navbar";
import { FaBriefcase, FaSearch } from "react-icons/fa";

function Jobs() {
  return (
    <div className="student-jobs-page">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="student-jobs-content">

        <div className="jobs-heading">
          <div>
            <span className="jobs-tag">
              <FaBriefcase /> CAREER OPPORTUNITIES
            </span>

            <h1>Available Jobs</h1>

            <p>
              Explore the latest job opportunities and find the right
              career for your future.
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="jobs-search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search jobs, companies or skills..."
            aria-label="Search jobs"
          />

          <button type="button">Search</button>
        </div>

        {/* Jobs Section */}
        <div className="jobs-list-heading">
          <h2>Latest Opportunities</h2>
          <span>Explore available positions</span>
        </div>

        <div className="jobs-empty-state">
          <div className="jobs-empty-icon">
            <FaBriefcase />
          </div>

          <h3>Job Opportunities</h3>

          <p>
            Job listings will appear here when they are available.
          </p>
        </div>

      </main>
    </div>
  );
}

export default Jobs;