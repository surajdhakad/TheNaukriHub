import { useEffect, useState } from "react";
import { getJobs, deleteJob } from "../../../Api/JobApi";
import AddJob from "./AddJob";
import "./JobTable.css";

const JobTable = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddJob, setShowAddJob] = useState(false);

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await getJobs();

      setJobs(res.data.jobs || []);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Delete Job
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(id);

      alert("Job Deleted Successfully");

      fetchJobs();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <>
      <div className="job-table-container">

        <div className="job-header">

          <h2>Job Openings</h2>

          <button
            className="add-job-btn"
            onClick={() => setShowAddJob(true)}
          >
            + Add Job
          </button>

        </div>

        {loading ? (

          <h3 className="loading">Loading Jobs...</h3>

        ) : (

          <table>

            <thead>
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Package</th>
                <th>Experience</th>
                <th>Last Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {jobs.length === 0 ? (

                <tr>
                  <td colSpan="9">
                    No Jobs Found
                  </td>
                </tr>

              ) : (

                jobs.map((job, index) => (

                  <tr key={job._id}>

                    <td>{index + 1}</td>

                    <td>{job.title}</td>

                    <td>{job.company?.name || "N/A"}</td>

                    <td>{job.location}</td>

                    <td>{job.package}</td>

                    <td>{job.experience}</td>

                    <td>
                      {new Date(job.lastDate).toLocaleDateString()}
                    </td>

                    <td>

                      <span
                        className={
                          job.status
                            ? "status active"
                            : "status inactive"
                        }
                      >
                        {job.status ? "Active" : "Inactive"}
                      </span>

                    </td>

                    <td>

                      <button className="view-btn">
                        View
                      </button>

                      <button className="edit-btn">
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        )}

      </div>

      {showAddJob && (

        <AddJob
          onClose={() => setShowAddJob(false)}
          onSuccess={() => {
            fetchJobs();
            setShowAddJob(false);
          }}
        />

      )}
    </>
  );
};

export default JobTable;