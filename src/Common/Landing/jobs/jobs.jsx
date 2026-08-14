import "./jobs.css";

import {
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

// =====================================================
// NAVBAR
// =====================================================

import Navbar from "../Navbar/Navbar";

// =====================================================
// JOB DATA
// =====================================================

import jobData from "../../../assets/data/jobData";

function Jobs() {

  const navigate = useNavigate();

  // =====================================================
  // STATES
  // =====================================================

  const [search, setSearch] = useState("");

  const [location, setLocation] =
    useState("All Locations");

  const [currentPage, setCurrentPage] =
    useState(1);

  const jobsPerPage = 6;

  // =====================================================
  // LOCATIONS
  // =====================================================

  const locations = useMemo(() => {

    const allLocations =
      jobData.flatMap((job) => {

        if (Array.isArray(job.location)) {
          return job.location;
        }

        if (job.location) {
          return [job.location];
        }

        return [];

      });

    return [
      "All Locations",
      ...new Set(allLocations),
    ];

  }, []);

  // =====================================================
  // FILTER
  // =====================================================

  const filteredJobs = useMemo(() => {

    const searchText =
      search
        .toLowerCase()
        .trim();

    return jobData.filter((job) => {

      const title =
        job.title?.toLowerCase() || "";

      const bank =
        job.bank?.toLowerCase() || "";

      const role =
        job.role?.toLowerCase() || "";

      const matchesSearch =
        !searchText ||
        title.includes(searchText) ||
        bank.includes(searchText) ||
        role.includes(searchText);

      const jobLocations =
        Array.isArray(job.location)
          ? job.location
          : job.location
            ? [job.location]
            : [];

      const matchesLocation =
        location === "All Locations" ||
        jobLocations.includes(location);

      return (
        matchesSearch &&
        matchesLocation
      );

    });

  }, [search, location]);

  // =====================================================
  // PAGINATION
  // =====================================================

  const totalPages =
    Math.ceil(
      filteredJobs.length /
      jobsPerPage
    );

  const startIndex =
    (currentPage - 1) *
    jobsPerPage;

  const currentJobs =
    filteredJobs.slice(
      startIndex,
      startIndex + jobsPerPage
    );

  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearch = (e) => {

    setSearch(e.target.value);

    setCurrentPage(1);

  };

  // =====================================================
  // LOCATION
  // =====================================================

  const handleLocation = (e) => {

    setLocation(e.target.value);

    setCurrentPage(1);

  };

  // =====================================================
  // JOB DETAILS
  // =====================================================

  const handleDetails = (id) => {

    navigate(`/jobs/${id}`);

  };

  // =====================================================
  // CLEAR
  // =====================================================

  const clearFilters = () => {

    setSearch("");

    setLocation("All Locations");

    setCurrentPage(1);

  };

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          JOBS PAGE
      ================================================= */}

      <main className="jobs-page">

        {/* =================================================
            HEADER
        ================================================= */}

        <section className="jobs-header">

          <h1>
            Latest <span>Jobs</span>
          </h1>

          <p>
            Find your dream job from verified
            job opportunities
          </p>

        </section>


        {/* =================================================
            FILTER
        ================================================= */}

        <section className="jobs-filter-section">

          {/* SEARCH */}

          <div className="jobs-search-box">

            <FaSearch />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search Jobs, Banks or Roles..."
            />

            {search && (

              <button
                type="button"
                className="clear-search"
                onClick={() => {

                  setSearch("");

                  setCurrentPage(1);

                }}
                aria-label="Clear search"
              >

                <FaTimes />

              </button>

            )}

          </div>


          {/* LOCATION */}

          <div className="jobs-location-box">

            <FaMapMarkerAlt />

            <select
              value={location}
              onChange={handleLocation}
            >

              {locations.map(
                (item) => (

                  <option
                    value={item}
                    key={item}
                  >
                    {item}
                  </option>

                )
              )}

            </select>

          </div>


          {/* CLEAR */}

          {(search ||
            location !==
            "All Locations") && (

            <button
              type="button"
              className="clear-filter-btn"
              onClick={clearFilters}
            >
              Clear
            </button>

          )}

        </section>


        {/* =================================================
            RESULT
        ================================================= */}

        <div className="jobs-result">

          <div>

            Showing{" "}

            <strong>
              {filteredJobs.length}
            </strong>{" "}

            job opportunities

          </div>

          {search && (

            <span>

              Search:{" "}

              <strong>
                {search}
              </strong>

            </span>

          )}

        </div>


        {/* =================================================
            JOB GRID
        ================================================= */}

        {currentJobs.length > 0 ? (

          <section className="jobs-grid">

            {currentJobs.map((job) => {

              const jobLocations =
                Array.isArray(
                  job.location
                )
                  ? job.location
                  : job.location
                    ? [job.location]
                    : [];

              return (

                <article
                  className="job-card"
                  key={job.id}
                >

                  {/* =================================================
                      LOGO
                  ================================================= */}

                  <div className="job-logo-box">

                    {job.logo ? (

                      <img
                        src={job.logo}
                        alt={`${job.bank || "Bank"} logo`}
                        onError={(e) => {

                          e.currentTarget.style.display =
                            "none";

                        }}
                      />

                    ) : (

                      <span className="job-logo-fallback">

                        {job.bank
                          ? job.bank
                              .charAt(0)
                              .toUpperCase()
                          : "J"}

                      </span>

                    )}

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="job-card-content">

                    <h2>

                      {job.title ||
                        "Job Position"}

                    </h2>


                    {job.experience && (

                      <span className="job-experience">

                        {job.experience}

                      </span>

                    )}


                    {/* LOCATIONS */}

                    <div className="job-locations">

                      {jobLocations
                        .slice(0, 5)
                        .map(
                          (loc, index) => (

                            <span
                              key={`${loc}-${index}`}
                            >

                              <FaMapMarkerAlt />

                              {loc}

                            </span>

                          )
                        )}

                      {jobLocations.length > 5 && (

                        <span>
                          +
                          {jobLocations.length - 5}
                        </span>

                      )}

                    </div>


                    {/* =================================================
                        INFO
                    ================================================= */}

                    <div className="job-info">

                      <div className="job-role">

                        <FaBriefcase />

                        <span>

                          {job.role ||
                            "Job Role"}

                        </span>

                      </div>


                      <div className="job-salary">

                        <FaMoneyBillWave />

                        <span>

                          {job.salary ||
                            "Salary Not Disclosed"}

                        </span>

                      </div>

                    </div>


                    {/* =================================================
                        BUTTON
                    ================================================= */}

                    <button
                      type="button"
                      className="job-details-btn"
                      onClick={() =>
                        handleDetails(job.id)
                      }
                    >

                      View Details »

                    </button>

                  </div>

                </article>

              );

            })}

          </section>

        ) : (

          /* =================================================
              NO JOBS
          ================================================= */

          <div className="no-jobs">

            <h2>
              No Jobs Found
            </h2>

            <p>
              Try searching with another
              job, bank or location.
            </p>

            <button
              type="button"
              onClick={clearFilters}
            >
              View All Jobs
            </button>

          </div>

        )}


        {/* =================================================
            PAGINATION
        ================================================= */}

        {totalPages > 1 && (

          <div className="pagination">

            {/* PREVIOUS */}

            <button
              type="button"
              disabled={
                currentPage === 1
              }
              onClick={() =>
                setCurrentPage(
                  (prev) =>
                    Math.max(
                      prev - 1,
                      1
                    )
                )
              }
            >

              <FaChevronLeft />

              Prev

            </button>


            {/* PAGE NUMBERS */}

            {Array.from(
              {
                length:
                  totalPages,
              },
              (_, index) =>
                index + 1
            ).map((page) => (

              <button
                type="button"
                key={page}
                className={
                  currentPage === page
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(page)
                }
              >

                {page}

              </button>

            ))}


            {/* NEXT */}

            <button
              type="button"
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                setCurrentPage(
                  (prev) =>
                    Math.min(
                      prev + 1,
                      totalPages
                    )
                )
              }
            >

              Next

              <FaChevronRight />

            </button>

          </div>

        )}

      </main>

    </>

  );

}

export default Jobs;