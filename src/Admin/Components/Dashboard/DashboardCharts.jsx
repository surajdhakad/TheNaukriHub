import "./DashboardCharts.css";

import StudentChart from "../Charts/StudentChart";
import PlacementChart from "../Charts/PlacementChart";

const DashboardCharts = () => {
  return (
    <div className="dashboard-charts">

      <div className="chart-card">
        <div className="chart-header">
          <h3>Student Growth</h3>
          <p>Monthly Registration Report</p>
        </div>

        <StudentChart />
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h3>Placement Report</h3>
          <p>Monthly Placement Statistics</p>
        </div>

        <PlacementChart />
      </div>

    </div>
  );
};

export default DashboardCharts;