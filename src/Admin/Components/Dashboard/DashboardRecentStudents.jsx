import "./DashboardStats.css";

const DashboardRecentStudents = ({ students = [] }) => {
  return (
    <div className="dashboard-card-large">

      <div className="dashboard-card-header">
        <h3>Recent Students</h3>
        <span>Total : {students.length}</span>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="table-user">
                    <img
                      src={
                        student.profilePhoto
                          ? student.profilePhoto
                          : `https://ui-avatars.com/api/?background=2563eb&color=fff&name=${encodeURIComponent(
                              student.name
                            )}`
                      }
                      alt={student.name}
                    />

                    <span>{student.name}</span>
                  </div>
                </td>

                <td>{student.email}</td>

                <td>{student.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                style={{
                  textAlign: "center",
                  padding: "25px",
                }}
              >
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default DashboardRecentStudents;