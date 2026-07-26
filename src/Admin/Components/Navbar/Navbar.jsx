import "./Navbar.css";
import { useEffect, useState } from "react";
import { getAdminProfile } from "../../../Api/AdminApi";

const Navbar = ({ search, setSearch }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const { data } = await getAdminProfile(token);

      console.log("ADMIN PROFILE :", data);

      if (data.success) {
        setAdmin(data.admin);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="admin-navbar">
      {/* Left */}
      <div className="admin-navbar-left">
        <h2>Admin Dashboard</h2>
      </div>

      {/* Center */}
      <div className="admin-navbar-center">
        <input
          type="text"
          className="admin-search-input"
          placeholder="Search Students, Jobs, Companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right */}
      <div className="admin-navbar-right">
        <button className="notification-btn">
          🔔
        </button>

        <div className="admin-profile">
          <img
            src={
              admin?.profilePhoto
                ? admin.profilePhoto
                : `https://ui-avatars.com/api/?background=2563eb&color=ffffff&name=${encodeURIComponent(
                    admin?.name || "Admin"
                  )}`
            }
            alt="Admin"
          />

          <div className="admin-info">
            <h4>{admin?.name || "Administrator"}</h4>

            <p>{admin?.role || "Admin"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;