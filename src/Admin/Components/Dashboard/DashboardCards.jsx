import "./DashboardCards.css";

import {
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaUserCheck,
  FaFileAlt,
  FaClipboardList,
} from "react-icons/fa";

const DashboardCards = ({ stats }) => {
  const cards = [
    {
      title: "Students",
      value: stats.students || 0,
      icon: <FaUserGraduate />,
      color: "#2563eb",
    },
    {
      title: "Companies",
      value: stats.companies || 0,
      icon: <FaBuilding />,
      color: "#16a34a",
    },
    {
      title: "Jobs",
      value: stats.jobs || 0,
      icon: <FaBriefcase />,
      color: "#f97316",
    },
    {
      title: "Placements",
      value: stats.placements || 0,
      icon: <FaUserCheck />,
      color: "#9333ea",
    },
    {
      title: "Applications",
      value: stats.applications || 0,
      icon: <FaFileAlt />,
      color: "#dc2626",
    },
    {
      title: "Enrollments",
      value: stats.enrollments || 0,
      icon: <FaClipboardList />,
      color: "#0891b2",
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div
            className="dashboard-card-icon"
            style={{
              background: card.color,
            }}
          >
            {card.icon}
          </div>

          <div className="dashboard-card-content">
            <h4>{card.title}</h4>

            <h2>{card.value}</h2>

            <p>Total {card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;