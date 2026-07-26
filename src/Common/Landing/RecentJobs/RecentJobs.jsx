import { useEffect, useState } from "react";
import "./RecentJobs.css";
import JobCard from "../JobCard/JobCard";
import { getJobs } from "../../../Api/JobApi";

function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();

      setJobs(res.data.jobs);
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
    <section className="recent-jobs">

      <div className="section-title">
        <h2>Latest Job Openings</h2>
        <p>Apply before the deadline</p>
      </div>

      {loading ? (
        <h3>Loading Jobs...</h3>
      ) : (
        <div className="jobs-grid">

          {jobs.length === 0 ? (
            <h3>No Jobs Available</h3>
          ) : (
            jobs.map((job) => (
              <JobCard
                key={job._id}
                job={{
                  ...job,
                  company: job.company?.name,
                  type: job.jobType,
                  deadline: new Date(
                    job.lastDate
                  ).toLocaleDateString(),
                }}
              />
            ))
          )}

        </div>
      )}

    </section>
  );
}

export default RecentJobs;