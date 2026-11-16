
import "./DashBoard.css";

import Navbar from "../../StudentsComponents/Navbar/Navbar";
import StudentHero from "../../StudentsComponents/StudentHero/StudentHero";

function Dashboard() {
  return (
    <div className="student-dashboard-layout">

      {/* NAVBAR */}
      <Navbar />

      {/* DASHBOARD HOME */}
      <main className="student-dashboard">
        <section className="student-home-hero">
       <StudentHero />
        </section>
      </main>

    </div>
  );
}

export default Dashboard;
