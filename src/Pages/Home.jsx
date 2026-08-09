import "./Home.css";

import Navbar from "../Common/Landing/Navbar/Navbar";
import Hero from "../Common/Landing/Hero/Hero";
import CompanySlider from "../Common/Landing/CompanySlider/CompanySlider";
import StatsCard from "../Common/Landing/StatsCard/StatsCard";
import RecentJobs from "../Common/Landing/RecentJobs/RecentJobs";
import Footer from "../Common/Landing/Footer/Footer";
import SelectedStudents from "../Common/Landing/SelectedStudents/SelectedStudents";
import PlacementDrive from "../Common/Landing/PlacementDrive/PlacementDrive";
import PlacedStudents from "../Common/Landing/PlacedStudents/PlacedStudents";
import PlacedStudent from "../Common/Landing/PlacedStudent/PlacedStudent";
// ⭐ Background Image
import statsBg from "../assets/Images/background-image.png";

function Home() {

  const stats = {
    totalJobs: 120,
    totalBanks: 55,
    placedStudents: 115,
    highestPackage: 6,
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Stats */}
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

      {/* Latest Jobs */}
      <section id="jobs">
        <RecentJobs />
      </section>

      {/* Upcoming Placement Drives */}
      <section id="placement-drive">
        <PlacementDrive />
      </section>

      {/* Our Placed Students */}
      <section id="placed-students">
        <PlacedStudents />
      </section>

     

<section id="placed-students">
  <PlacedStudent />
</section>
      {/* Companies */}
      <section id="companies">
        <CompanySlider />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;