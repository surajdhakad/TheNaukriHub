
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: "dashboard", icon: "🏠", label: "Dashboard" },
  { id: "jobs", icon: "💼", label: "Job Opportunities" },
  { id: "applications", icon: "📄", label: "Applications" },
  { id: "resume", icon: "📑", label: "Resume Builder" },
  { id: "interviews", icon: "🎤", label: "Interview Preparation" },
];

function Sidebar({ scrollToSection, setActiveSection }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    switch (item.id) {
      case "applications":
        setActiveSection("applications");
        break;

      case "interviews":
        setActiveSection("");
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

      {/* LOGO */}
      <div
        className="sidebar-logo"
        onClick={() => {
          setActiveSection("");
          scrollToSection("dashboard");
        }}
      >
        <h2>🎓 The NaukriHub</h2>
      </div>

      {/* SIDEBAR MENU */}
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item)}
            >
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
