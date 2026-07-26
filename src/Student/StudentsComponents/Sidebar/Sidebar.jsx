import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: "dashboard", icon: "🏠", label: "Dashboard" },
  { id: "jobs", icon: "💼", label: "Job Opportunities" },
  { id: "placements", icon: "🎯", label: "My Placements" },
  { id: "applications", icon: "📄", label: "Applications" },
  { id: "resume", icon: "📑", label: "Resume Builder" },
  { id: "interviews", icon: "🎤", label: "Interview Preparation" },
  
  { id: "profile", icon: "👤", label: "Profile" },
  { id: "settings", icon: "⚙️", label: "Settings" },
];

function Sidebar({ scrollToSection, setActiveSection }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    switch (item.id) {
      case "applications":
        setActiveSection("applications");
        break;

      case "interviews":
        navigate("/student/interview-preparation");
        break;

      default:
        setActiveSection("");
        scrollToSection(item.id);
        break;
    }
  };

  return (
    <aside className="sidebar">

      <div
        className="sidebar-logo"
        onClick={() => {
          setActiveSection("");
          scrollToSection("dashboard");
        }}
      >
        <h2>🎓 Placement Portal</h2>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button onClick={() => handleClick(item)}>
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

    </aside>
  );
}

export default Sidebar;