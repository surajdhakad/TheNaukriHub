import "./Home.css";

// =====================================================
// LANDING COMPONENTS
// =====================================================

import Navbar from "../Common/Landing/Navbar/Navbar";
import Hero from "../Common/Landing/Hero/Hero";

import CompanySlider from "../Common/Landing/CompanySlider/CompanySlider";

import StatsCard from "../Common/Landing/StatsCard/StatsCard";

import RecentJobs from "../Common/Landing/RecentJobs/RecentJobs";

import PlacementDrive from "../Common/Landing/PlacementDrive/PlacementDrive";

import PlacedStudents from "../Common/Landing/PlacedStudents/PlacedStudents";

import Footer from "../Common/Landing/Footer/Footer";

import WhyBanking from "../Common/Landing/WhyBanking/WhyBanking";
import PlacementSupport from "../Common/Landing/PlacementSupport/PlacementSupport";
import CareerJourney from "../Common/Landing/CareerJourney/CareerJourney";
import TrainingWorks from "../Common/Landing/TrainingWorks/TrainingWorks";
import HowItWorks from "../Common/Landing/HowItWorks/HowItWorks";
import Featured from "../Common/Landing/Featured/Featured";
import CareerBanner from "../Common/Landing/CareerBanner/CareerBanner";
// =====================================================
// ⭐ HIGHLIGHTS
// =====================================================

import Highlights from "../Common/Landing/Highlights/Highlights";

// =====================================================
// PUBLIC JOB PAGE
// =====================================================

import AllJobs from "../Common/Landing/jobs/jobs";

// =====================================================
// BACKGROUND IMAGE
// =====================================================

import statsBg from "../assets/Images/background-image.png";

// =====================================================
// HOME
// =====================================================

function Home() {

  // ===================================================
  // STATS
  // ===================================================

  const stats = {
    totalJobs: 120,
    totalBanks: 55,
    placedStudents: 115,
    highestPackage: 6,
  };

  return (
    <div className="home-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          HERO
      ================================================= */}

      <section id="home">
        <Hero />
      </section>

{/* =================================================
    CAREER JOURNEY
================================================= */}

<section id="career-journey">

  <CareerJourney />

</section>
      {/* =================================================
          STATS
      ================================================= */}

      <section id="stats">

        <div
          className="stats-section"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(7,10,20,.75),
                rgba(7,10,20,.90)
              ),
              url(${statsBg})
            `,
          }}
        >

          <StatsCard
            title="Total Jobs"
            value={stats.totalJobs}
            icon="💼"
          />

          <StatsCard
            title="Banks"
            value={stats.totalBanks}
            icon="🏢"
          />

          <StatsCard
            title="Students Placed"
            value={stats.placedStudents}
            icon="🎓"
          />

          <StatsCard
            title="Highest Package"
            value={`${stats.highestPackage} LPA`}
            icon="💰"
          />

        </div>

      </section>


      {/* =================================================
          ⭐ NAUKARIFY HIGHLIGHTS
      ================================================= */}

      <section id="highlights">

        <Highlights />

      </section>


      {/* =================================================
          LATEST JOBS
      ================================================= */}

      <section
        id="jobs"
        className="home-jobs-section"
      >

        <RecentJobs />

      </section>


      {/* =================================================
          ALL JOBS
          
          Ye /jobs ka complete jobs listing section hai.
          Isse Home page par bhi jobs render hongi.
      ================================================= */}

      <section
        id="all-jobs"
        className="home-all-jobs-section"
      >

        <AllJobs />

      </section>


      {/* =================================================
          WHY CHOOSE BANKING SECTOR
      ================================================= */}

      <section id="why-banking">

        <WhyBanking />

      </section>
{/* =================================================
    PLACEMENT SUPPORT PROGRAM
================================================= */}

<section id="placement-support">

  <PlacementSupport />

</section>
{/* =================================================
    HOW OUR TRAINING WORKS
================================================= */}

<section id="training-works">

  <TrainingWorks />

</section>
{/* =================================================
    HOW IT WORKS
================================================= */}

<section id="how-it-works">

  <HowItWorks />

</section>
{/* =================================================
    FEATURED IN + FREE JOB ASSISTANCE
================================================= */}

<section id="featured">

  <Featured />

</section>
{/* =================================================
    CAREER BANNER
================================================= */}

<section id="career-banner">

  <CareerBanner />

</section>
      {/* =================================================
          UPCOMING PLACEMENT DRIVES
      ================================================= */}

      <section id="placement-drive">

        <PlacementDrive />

      </section>


      {/* =================================================
          OUR PLACED STUDENTS
      ================================================= */}

      <section id="placed-students">

        <PlacedStudents />

      </section>


      {/* =================================================
          COMPANY SLIDER
      ================================================= */}

      <section id="companies">

        <CompanySlider />

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default Home;