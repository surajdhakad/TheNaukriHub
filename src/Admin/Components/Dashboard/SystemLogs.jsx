import "../Css/SystemLogs.css";

const logs = [
  {
    id: 1,
    action: "Admin Login",
    user: "Admin",
    time: "24 Jul 2026, 10:15 AM",
    status: "Success",
  },
  {
    id: 2,
    action: "Student Registered",
    user: "Rahul Sharma",
    time: "24 Jul 2026, 09:45 AM",
    status: "Success",
  },
  {
    id: 3,
    action: "Company Added",
    user: "TCS",
    time: "23 Jul 2026, 06:20 PM",
    status: "Success",
  },
  {
    id: 4,
    action: "Job Deleted",
    user: "Admin",
    time: "23 Jul 2026, 04:10 PM",
    status: "Warning",
  },
  {
    id: 5,
    action: "Database Backup",
    user: "System",
    time: "23 Jul 2026, 01:00 AM",
    status: "Completed",
  },
];

const SystemLogs = () => {
  return (
    <div className="systemlogs-page">
      <div className="systemlogs-header">
        <h2>System Logs</h2>
        <p>Monitor all recent activities performed in the system.</p>
      </div>

      <div className="systemlogs-card">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>User</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.action}</td>
                <td>{item.user}</td>
                <td>{item.time}</td>
                <td>
                  <span
                    className={`status ${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemLogs;