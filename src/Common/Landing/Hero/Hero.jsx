import "./Hero.css";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  FaSearch,
} from "react-icons/fa";


function Hero() {

  const navigate = useNavigate();

  // =====================================================
  // SEARCH
  // =====================================================

  const [search, setSearch] = useState("");


  // =====================================================
  // HANDLE SEARCH
  // =====================================================

  const handleSearch = (e) => {

    e.preventDefault();

    const value = search.trim();


    // Agar search empty hai
    if (!value) {

      navigate("/jobs");

      return;

    }


    // Search ko Jobs page par bhejna
    navigate(
      `/jobs?search=${encodeURIComponent(value)}`
    );

  };


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <section className="hero">

      <div className="hero-overlay"></div>


      <div className="hero-container">


        {/* =================================================
            LEFT
        ================================================= */}

        <div className="hero-left">


          <h1>

            Find Your{" "}

            <span>
              Dream Job
            </span>

            <br />

            Build Your Future With

            <br />

            <strong>
              TheNaukriHub
            </strong>

          </h1>


          <p>

            TheNaukriHub helps students, fresh graduates and experienced
            professionals discover verified jobs, placement drives and
            career opportunities from leading banks and companies
            across India.

          </p>


          {/* =================================================
              SEARCH
          ================================================= */}

          <form
            className="hero-search"
            onSubmit={handleSearch}
          >

            <div className="hero-search-input">

              <FaSearch className="search-icon" />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search Jobs, Banks, Companies or Skills..."
                autoComplete="off"
              />

            </div>


            <button
              type="submit"
              className="hero-search-button"
            >

              <FaSearch />

              <span>
                Search
              </span>

            </button>

          </form>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="hero-buttons">

            <Link to="/jobs">

              <button
                type="button"
                className="primary"
              >
                Explore Jobs
              </button>

            </Link>


            <Link to="/signup">

              <button
                type="button"
                className="secondary"
              >
                Get Started
              </button>

            </Link>

          </div>


          {/* Stats */}

        </div>


        {/* =================================================
            RIGHT
        ================================================= */}

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