import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { getAdminProfile } from "../../../Api/AdminApi";

const Navbar = ({ search, setSearch }) => {
  const [admin, setAdmin] = useState(null);
  const [localSearch, setLocalSearch] = useState("");

  const searchValue =
    typeof search === "string" ? search : localSearch;

  const updateSearch =
    typeof setSearch === "function" ? setSearch : setLocalSearch;

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const { data } = await getAdminProfile(token);

        if (data.success) {
          setAdmin(data.admin);
        }
      } catch (error) {
        console.error("Admin profile load failed:", error);
      }
    };

    loadAdmin();
  }, []);

  const avatarUrl = admin?.profilePhoto
    ? admin.profilePhoto
    : `https://ui-avatars.com/api/?background=2563eb&color=ffffff&name=${encodeURIComponent(
        admin?.name || "Admin"
      )}`;

  return (
    <header className="admin-navbar">
      <div className="admin-navbar-left">
        <h2>Admin Dashboard</h2>
      </div>

      <label className="admin-search">
        <FaSearch aria-hidden="true" />

        <input
          type="search"
          aria-label="Search students, jobs, and placements"
          placeholder="Search students, jobs, placements..."
          value={searchValue}
          onChange={(event) => updateSearch(event.target.value)}
        />

        {searchValue && (
          <button
            type="button"
            className="admin-search-clear"
            onClick={() => updateSearch("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </label>

      <div className="admin-navbar-right">
        <button
          type="button"
          className="admin-notification-btn"
          aria-label="Notifications"
        >
          <FaBell />
        </button>

        <div className="admin-profile">
          <img src={avatarUrl} alt="" />

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