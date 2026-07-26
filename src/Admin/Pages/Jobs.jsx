import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import JobTable from "../Components/Jobs/JobTable";

const Jobs = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <h2>Jobs</h2>

        <JobTable />
      </div>
    </div>
  );
};

export default Jobs;