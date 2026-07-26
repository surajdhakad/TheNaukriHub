import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import PlacementTable from "../Components/Placement/PlacementTable";

const Placements = () => {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div>

            <h1
              style={{
                color: "#1e293b",
                fontSize: "30px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Placement Management
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
              }}
            >
              Manage all placed students and placement records.
            </p>

          </div>

        </div>

        {/* Placement Table */}
        <PlacementTable />

      </div>

    </div>
  );
};

export default Placements;