import "./DashboardStats.css";

const DashboardRecentJobs = ({ jobs = [] }) => {
  return (
    <div className="dashboard-card-large">

      <div className="dashboard-card-header">
        <h3>Recent Jobs</h3>
        <span>Total : {jobs.length}</span>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Package</th>
            <th>Location</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>

                <td>
                  <strong>{job.title}</strong>
                </td>

                <td>
                  {job.company?.name || "N/A"}
                </td>

                <td>
                  ₹ {job.package}
                </td>

                <td>
                  {job.location}
                </td>

                <td>
                  <span className="status-active">
                    {job.jobType}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  padding: "25px",
                }}
              >
                No Jobs Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default DashboardRecentJobs;