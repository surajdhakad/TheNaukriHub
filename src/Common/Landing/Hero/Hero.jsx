import "./Hero.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <h1>
            Find Your <span>Dream Job</span>
            <br />
            Build Your Future With
            <br />
            <strong>TheNaukriHub</strong>
          </h1>

          <p>
            TheNaukriHub helps students, fresh graduates and experienced
            professionals discover verified jobs, placement drives and
            career opportunities from leading banks and companies
            across India.
          </p>

          {/* Search */}
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search Jobs, Companies or Skills..."
            />

            <button>
              <FaSearch />
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <Link to="/jobs">
              <button className="primary">
                Explore Jobs
              </button>
            </Link>

            <Link to="/signup">
              <button className="secondary">
                Get Started
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-card">
              <h2>100+</h2>
              <p>Banks</p>
            </div>

            <div className="stat-card">
              <h2>200+</h2>
              <p>Students</p>
            </div>

            <div className="stat-card">
              <h2>100+</h2>
              <p>Live Jobs</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          

          {/* Optional Shapes */}
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>

        </div>

      </div>
    </section>
  );
}

export default Hero;