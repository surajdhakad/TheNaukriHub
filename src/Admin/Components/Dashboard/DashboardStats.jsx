import "./DashboardStats.css";

const DashboardStats = ({ stats }) => {
  const total =
    (stats.students || 0) +
    (stats.companies || 0) +
    (stats.jobs || 0) +
    (stats.placements || 0);

  const placementRate =
    stats.students > 0
      ? ((stats.placements / stats.students) * 100).toFixed(1)
      : 0;

  const activeCompanies =
    stats.companies > 0
      ? Math.round((stats.companies * 85) / 100)
      : 0;

  const activeJobs =
    stats.jobs > 0
      ? Math.round((stats.jobs * 90) / 100)
      : 0;

  return (
    <div className="dashboard-stats">

      <div className="stat-box">
        <h3>Total Records</h3>
        <h2>{total}</h2>
      </div>

      <div className="stat-box">
        <h3>Placement Rate</h3>
        <h2>{placementRate}%</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${placementRate}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="stat-box">
        <h3>Active Companies</h3>
        <h2>{activeCompanies}</h2>

        <div className="progress-bar">
          <div
            className="progress-fill green"
            style={{
              width: "85%",
            }}
          ></div>
        </div>
      </div>

      <div className="stat-box">
        <h3>Active Jobs</h3>
        <h2>{activeJobs}</h2>

        <div className="progress-bar">
          <div
            className="progress-fill orange"
            style={{
              width: "90%",
            }}
          ></div>
        </div>
      </div>

    </div>
  );
};

export default DashboardStats;