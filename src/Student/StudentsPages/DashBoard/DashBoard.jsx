import "./DashBoard.css";
import { useState } from "react";

import Navbar from "../../StudentsComponents/Navbar/Navbar";
import Sidebar from "../../StudentsComponents/Sidebar/Sidebar";

import Hero from "../../../Common/Landing/Hero/Hero";
import CompanySlider from "../../../Common/Landing/CompanySlider/CompanySlider";
import RecentJobs from "../../../Common/Landing/RecentJobs/RecentJobs";
import PlacementDrive from "../../../Common/Landing/PlacementDrive/PlacementDrive";
import SelectedStudents from "../../../Common/Landing/SelectedStudents/SelectedStudents";
import Footer from "../../../Common/Landing/Footer/Footer";
import StatsCard from "../../../Common/Landing/StatsCard/StatsCard";

import Application from "../Application/Application";
import Resume from "../Resume/Resume";
import Profile from "../Profile/Profile";
import Setting from "../Setting/Setting";

function Dashboard() {

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {

    setActiveSection("");

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar />

      <Sidebar
        scrollToSection={scrollToSection}
        setActiveSection={setActiveSection}
      />

      <div className="student-dashboard">

        {/* Application Form */}
        {activeSection === "applications" ? (
          <Application />
        ) : (
          <>
            <section id="dashboard">
              <Hero />
            </section>

            <section className="stats-section">
              <StatsCard title="Students" value="1200+" icon="🎓" />
              <StatsCard title="Companies" value="150+" icon="🏢" />
              <StatsCard title="Placements" value="980+" icon="💼" />
              <StatsCard title="Highest Package" value="42 LPA" icon="🚀" />
            </section>

            <section id="jobs">
              <RecentJobs />
            </section>

            <section id="placements">
              <PlacementDrive />
              <SelectedStudents />
            </section>

            <section id="resume">
              <Resume />
            </section>

            <section id="profile">
              <Profile />
            </section>

            <section id="settings">
              <Setting />
            </section>

            <CompanySlider />

            <Footer />
          </>
        )}

      </div>
    </>
  );
}

export default Dashboard;