import { useEffect, useState } from "react";

import "../Css/Dashboard.css";

import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

import DashboardCards from "../Components/Dashboard/DashboardCards";
import DashboardStats from "../Components/Dashboard/DashboardStats";
import DashboardCharts from "../Components/Dashboard/DashboardCharts";
import DashboardRecentJobs from "../Components/Dashboard/DashboardRecentJobs";
import DashboardRecentStudents from "../Components/Dashboard/DashboardRecentStudents";
import DashboardRecentPlacements from "../Components/Dashboard/DashboardRecentPlacements";

import { getDashboard } from "../../Api/DashboardApi";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search State
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const { data } = await getDashboard();

      if (data.success) {
        setDashboard(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ padding: 30 }}>Loading...</h2>;
  }

  if (!dashboard) {
    return (
      <h2 style={{ padding: 30 }}>
        Dashboard Data Not Found
      </h2>
    );
  }

  // ==========================
  // Search Filters
  // ==========================

  const filteredStudents = dashboard.recentStudents.filter(
    (student) =>
      student.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      student.email
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      student.phone?.includes(search)
  );

  const filteredJobs = dashboard.recentJobs.filter(
    (job) =>
      job.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      job.company?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      job.package
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  const filteredPlacements =
    dashboard.recentPlacements.filter(
      (placement) =>
        placement.studentName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        placement.companyName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        placement.package
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="main-content">

        <Navbar
          search={search}
          setSearch={setSearch}
        />

        <section className="dashboard-content">

          <div className="dashboard-header">
            <h1 className="dashboard-title">
              Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Welcome Back Admin 👋
            </p>
          </div>

          <DashboardCards
            stats={dashboard.stats}
          />

          <DashboardStats
            stats={dashboard.stats}
          />

          <DashboardCharts
            students={dashboard.charts.students}
            placements={dashboard.charts.placements}
          />

          <DashboardRecentJobs
            jobs={filteredJobs}
          />

          <DashboardRecentStudents
            students={filteredStudents}
          />

          <DashboardRecentPlacements
            placements={filteredPlacements}
          />

        </section>
      </main>
    </div>
  );
};

export default Dashboard;