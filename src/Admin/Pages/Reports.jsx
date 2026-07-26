import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { getPlacementReport } from "../../Api/ReportApi";
import "../Css/Reports.css";

const Reports = () => {
  const [report, setReport] = useState({
    totalStudents: 0,
    placedStudents: 0,
    notPlacedStudents: 0,
    placementPercentage: 0,
  });

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const res = await getPlacementReport();

      if (res.data.success) {
        setReport(res.data);
      }
    } catch (error) {
      console.error("Report Error:", error);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="report-container">
          <h2>Placement Reports</h2>

          <div className="report-cards">
            <div className="report-card">
              <h3>Total Students</h3>
              <h1>{report.totalStudents}</h1>
            </div>

            <div className="report-card">
              <h3>Placed Students</h3>
              <h1>{report.placedStudents}</h1>
            </div>

            <div className="report-card">
              <h3>Not Placed Students</h3>
              <h1>{report.notPlacedStudents}</h1>
            </div>

            <div className="report-card">
              <h3>Placement Percentage</h3>
              <h1>{report.placementPercentage}%</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;