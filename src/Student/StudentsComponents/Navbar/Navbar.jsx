import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <header className="navbar">

      {/* Left */}

      <div className="navbar-left">

        <h2>Placement Portal</h2>

        <p>
          Welcome back,
          <strong> {user ? user.name : "Guest"} 👋</strong>
        </p>

      </div>

      {/* Right */}

      <div className="navbar-right">

        <div className="search-box">

          <input
            type="text"
            placeholder="Search jobs..."
          />

        </div>

        <div className="notification">

          🔔

          <span className="badge">3</span>

        </div>

        <button className="about-btn">

          Jobs Hub

        </button>

        {/* If Logged In */}

        {token ? (

          <>

            <div className="profile">

              {user?.name?.charAt(0).toUpperCase()}

            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >

              Logout

            </button>

          </>

        ) : (

          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">
                Signup
              </button>
            </Link>
          </>

        )}

      </div>

    </header>

  );
}

export default Navbar;