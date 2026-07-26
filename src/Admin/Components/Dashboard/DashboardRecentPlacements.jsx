import "./DashboardStats.css";

const DashboardRecentPlacements = ({ placements = [] }) => {
  return (
    <div className="dashboard-card-large">

      <div className="dashboard-card-header">
        <h3>Recent Placements</h3>

        <span>Total : {placements.length}</span>
      </div>

      <table className="dashboard-table">

        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Package</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {placements.length > 0 ? (

            placements.map((placement, index) => (

              <tr key={placement._id}>

                <td>{index + 1}</td>

                <td>

                  <div className="table-user">

                    <img
                      src={
                        placement.photo
                          ? placement.photo
                          : `https://ui-avatars.com/api/?background=2563eb&color=fff&name=${encodeURIComponent(
                              placement.studentName
                            )}`
                      }
                      alt={placement.studentName}
                    />

                    <span>{placement.studentName}</span>

                  </div>

                </td>

                <td>{placement.companyName}</td>

                <td>{placement.designation}</td>

                <td>₹ {placement.package}</td>

                <td>{placement.location}</td>

                <td>
                  <span className="status-success">
                    Placed
                  </span>
                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "30px",
                }}
              >
                No Placements Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
};

export default DashboardRecentPlacements;