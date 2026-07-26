import { Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Students from "../Pages/Students";
import Companies from "../Pages/Companies";
import Jobs from "../Pages/Jobs";
import Applications from "../Pages/Applications";
import Placements from "../Pages/Placements";
import Reports from "../Pages/Reports";
import Settings from "../Pages/Settings";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="companies" element={<Companies />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="applications" element={<Applications />} />
      <Route path="placements" element={<Placements />} />
      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default AdminRoutes;