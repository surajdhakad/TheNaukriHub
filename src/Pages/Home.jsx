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
import Highlights from "../Common/Landing/Highlights/Highlights";
import AllJobs from "../Common/Landing/jobs/jobs";

// =====================================================
// NEW PLACED STUDENTS
// =====================================================

// New student carousel
import Student from "../Common/Landing/dummyplacedstudent/student";

// =====================================================
// POPUP
// =====================================================

import LeadPopup from "../Common/Landing/LeadPopup/LeadPopup";

// =====================================================
// BACKGROUND IMAGE
// =====================================================

import statsBg from "../assets/Images/background-image.png";

// =====================================================
// HOME
// =====================================================

function Home() {

  const stats = {
    totalJobs: 120,
    totalBanks: 55,
    placedStudents: 115,
    highestPackage: 6,
  };


  return (
    <div className="home-page">

      {/* =================================================
          POPUP
      ================================================= */}

      <LeadPopup />


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
          HIGHLIGHTS
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
      ================================================= */}

      <section
        id="all-jobs"
        className="home-all-jobs-section"
      >
        <AllJobs />
      </section>


      {/* =================================================
          WHY BANKING
      ================================================= */}

      <section id="why-banking">
        <WhyBanking />
      </section>


      {/* =================================================
          PLACEMENT SUPPORT
      ================================================= */}

      <section id="placement-support">
        <PlacementSupport />
      </section>


      {/* =================================================
          TRAINING WORKS
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
          FEATURED
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
          PLACEMENT DRIVE
      ================================================= */}

      <section id="placement-drive">
        <PlacementDrive />
      </section>


      {/* =================================================
          EXISTING PLACED STUDENTS
      ================================================= */}

      {/* <section id="placed-students">
        <PlacedStudents />
      </section> */}


      {/* =================================================
          NEW STUDENT CAROUSEL
      ================================================= */}

      <section id="student-profiles">
        <Student />
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