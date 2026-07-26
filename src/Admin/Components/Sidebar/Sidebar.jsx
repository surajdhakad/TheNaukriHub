import "./Sidebar.css";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaBuilding,
  FaCalendarCheck,
  FaUserGraduate,
  FaClipboardList,
  FaCommentDots,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaFilePdf,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");

    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div>
        {/* Logo */}
        <div className="logo">
          <h2>NaukariHub</h2>
        </div>

        {/* Navigation */}
        <nav>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/jobs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBriefcase />
            <span>Jobs</span>
          </NavLink>

          <NavLink
            to="/admin/companies"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBuilding />
            <span>Companies</span>
          </NavLink>

          <NavLink
            to="/admin/placements"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCalendarCheck />
            <span>Placements</span>
          </NavLink>

          <NavLink
            to="/admin/students"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>

          <NavLink
            to="/admin/applications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaClipboardList />
            <span>Applications</span>
          </NavLink>

         

          {/* ===== Interview Prep ===== */}
          <NavLink
            to="/admin/interview-materials"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaFilePdf />
            <span>Interview Prep</span>
          </NavLink>

          <NavLink
            to="/admin/reports"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartBar />
            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;