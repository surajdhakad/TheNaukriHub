import { useState } from "react";
import StudentChart from "./StudentChart";
import PlacementChart from "./PlacementChart";
import "./Charts.css";

function ChartManager() {

  const [stats, setStats] = useState({
    students: 250,
    placements: 180,
    companies: 35,
    jobs: 120,
  });

  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState(stats);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value),
    });
  };

  const saveData = () => {
    setStats(form);
    setEdit(false);
  };

  return (
    <div className="chart-manager">

      <div className="chart-header">

        <h2>Dashboard Analytics</h2>

        <button
          onClick={() => setEdit(!edit)}
          className="edit-btn"
        >
          {edit ? "Cancel" : "Edit Data"}
        </button>

      </div>

      {edit && (

        <div className="chart-form">

          <input
            type="number"
            name="students"
            value={form.students}
            onChange={handleChange}
            placeholder="Students"
          />

          <input
            type="number"
            name="placements"
            value={form.placements}
            onChange={handleChange}
            placeholder="Placements"
          />

          <input
            type="number"
            name="companies"
            value={form.companies}
            onChange={handleChange}
            placeholder="Companies"
          />

          <input
            type="number"
            name="jobs"
            value={form.jobs}
            onChange={handleChange}
            placeholder="Jobs"
          />

          <button
            className="save-btn"
            onClick={saveData}
          >
            Save
          </button>

        </div>

      )}

      <StudentChart data={stats} />

      <PlacementChart data={stats} />

    </div>
  );
}

export default ChartManager;