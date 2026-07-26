import "./Charts.css";
import chartData from "./ChartsData";

function PlacementChart() {

  return (
    <div className="chart-card">

      <div className="chart-header">
        <h3>Placement Statistics</h3>

        <div className="chart-actions">
          <button>Add</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div className="stats-grid">

        <div className="mini-card">
          <h4>Companies</h4>
          <span>{chartData.companies}</span>
        </div>

        <div className="mini-card">
          <h4>Jobs</h4>
          <span>{chartData.jobs}</span>
        </div>

        <div className="mini-card">
          <h4>Placed</h4>
          <span>{chartData.placedStudents}</span>
        </div>

      </div>

    </div>
  );
}

export default PlacementChart;