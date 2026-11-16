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

  const menuClass = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <h2>TheNaukriHub</h2>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" end className={menuClass}>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/jobs" end className={menuClass}>
            <FaBriefcase />
            <span>Jobs</span>
          </NavLink>

          <NavLink to="/admin/companies" end className={menuClass}>
            <FaBuilding />
            <span>Companies</span>
          </NavLink>

          <NavLink to="/admin/placements" end className={menuClass}>
            <FaCalendarCheck />
            <span>Placements</span>
          </NavLink>

          <NavLink to="/admin/students" end className={menuClass}>
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>

          <NavLink to="/admin/applications" end className={menuClass}>
            <FaClipboardList />
            <span>Applications</span>
          </NavLink>

          <NavLink to="/admin/leads" end className={menuClass}>
            <FaCommentDots />
            <span>Leads</span>
          </NavLink>

          <NavLink to="/admin/interview-materials" end className={menuClass}>
            <FaFilePdf />
            <span>Interview Prep</span>
          </NavLink>

          <NavLink to="/admin/reports" end className={menuClass}>
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </nav>
      </div>

      <button
        type="button"
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;