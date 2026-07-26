import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ApplicationTable from "../Components/Application/ApplicationTable";
import { getAllApplications } from "../../Api/ApplicationApi";
import "../Css/Applications.css";

const Applications = () => {
  const token = localStorage.getItem("token");

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await getAllApplications(token);
      setApplications(res.data.applications || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="applications-header">

          <div>
            <h1>Student Applications</h1>
            <p>Manage all submitted student applications.</p>
          </div>

          <div className="application-count">
            Total Applications : <strong>{applications.length}</strong>
          </div>

        </div>

        <ApplicationTable
          applications={applications}
          loading={loading}
          refresh={fetchApplications}
        />

      </div>

    </div>
  );
};

export default Applications;