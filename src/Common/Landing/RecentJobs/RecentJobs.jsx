import { useEffect, useState } from "react";
import "./RecentJobs.css";
import JobCard from "../JobCard/JobCard";
import { getJobs } from "../../../Api/JobApi";

import recentBg from "../../../assets/Images/background-image.png";

function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data.jobs || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section
      className="recent-jobs"
      style={{
        backgroundImage: `linear-gradient(rgba(7,10,20,.78),rgba(7,10,20,.88)), url(${recentBg})`,
      }}
    >
      <div className="recent-overlay"></div>

      <div className="recent-container">

        <div className="section-title">

          

          <h1>Latest Job Openings</h1>

          <p>
            Apply before the deadline and start your career with
            India's leading Banking .
          </p>

        </div>

        {loading ? (
          <div className="loading-box">
            <div className="loader"></div>
            <h3>Loading Jobs...</h3>
          </div>
        ) : (
          <div className="jobs-grid">

            {jobs.length === 0 ? (
              <div className="empty-state">
                <h3>No Jobs Available</h3>
              </div>
            ) : (
              jobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={{
                    ...job,
                    company: job.company?.name || "N/A",
                    companyLogo:
                      job.company?.logo ||
                      job.company?.companyLogo ||
                      "",

                    type: job.jobType,

                    deadline: job.lastDate
                      ? new Date(job.lastDate).toLocaleDateString()
                      : "N/A",
                  }}
                />
              ))
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default RecentJobs;