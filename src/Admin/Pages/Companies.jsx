import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import CompanyTable from "../Components/Company/CompanyTable";

const Companies = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <h2>Companies</h2>

        <CompanyTable />
      </div>
    </div>
  );
};

export default Companies;