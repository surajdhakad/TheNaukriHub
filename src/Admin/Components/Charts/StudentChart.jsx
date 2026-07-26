import "./Charts.css";
import chartData from "./ChartsData";

function StudentChart() {

  const percentage =
    chartData.students > 0
      ? (chartData.placedStudents / chartData.students) * 100
      : 0;

  return (
    <div className="chart-card">

      <div className="chart-header">
        <h3>Students Overview</h3>

        <div className="chart-actions">
          <button>Add</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="chart-info">
        <p>Total Students</p>
        <h2>{chartData.students}</h2>

        <p>Placed Students</p>
        <h2>{chartData.placedStudents}</h2>
      </div>

    </div>
  );
}

export default StudentChart;