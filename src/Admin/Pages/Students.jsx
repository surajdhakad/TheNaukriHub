import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import StudentTable from "../Components/StudentTable/StudentTable";

const Students = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <h2>Students</h2>

        <StudentTable />
      </div>
    </div>
  );
};

export default Students;