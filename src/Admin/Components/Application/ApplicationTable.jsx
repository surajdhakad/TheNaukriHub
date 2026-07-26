import { useMemo, useState } from "react";
import "./ApplicationTable.css";
import StatusBadge from "./StatusBadge";
import ApplicationModal from "./ApplicationModal";

const ApplicationTable = ({ applications, loading, refresh }) => {
  const [search, setSearch] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const keyword = search.toLowerCase();

      return (
        app.fullName?.toLowerCase().includes(keyword) ||
        app.email?.toLowerCase().includes(keyword) ||
        app.phone?.includes(keyword) ||
        app.university?.toLowerCase().includes(keyword)
      );
    });
  }, [applications, search]);

  if (loading) {
    return (
      <div className="table-loading">
        Loading Applications...
      </div>
    );
  }

  return (
    <>
      <div className="table-header">

        <input
          type="text"
          placeholder="Search by Name, Email, Phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

      </div>

      <div className="table-wrapper">

        <table className="application-table">

          <thead>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>University</th>
              <th>10th</th>
              <th>12th</th>
              <th>Graduation</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredApplications.length === 0 ? (
              <tr>
                <td colSpan="10" className="no-data">
                  No Applications Found
                </td>
              </tr>
            ) : (
              filteredApplications.map((app, index) => (
                <tr key={app._id}>

                  <td>{index + 1}</td>

                  <td>{app.fullName}</td>

                  <td>{app.email}</td>

                  <td>{app.phone}</td>

                  <td>{app.university}</td>

                  <td>{app.tenthPercentage}%</td>

                  <td>{app.twelfthPercentage}%</td>

                  <td>{app.graduationPercentage}%</td>

                  <td>
                    <StatusBadge status={app.status} />
                  </td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() => setSelectedApplication(app)}
                    >
                      View
                    </button>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      {selectedApplication && (
        <ApplicationModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          refresh={refresh}
        />
      )}
    </>
  );
};

export default ApplicationTable;