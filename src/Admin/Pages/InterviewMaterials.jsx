import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import MaterialTable from "../Components/InterviewMaterial/MaterialTable";

function InterviewMaterials() {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <MaterialTable />
      </div>
    </div>
  );
}

export default InterviewMaterials;