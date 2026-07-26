import "./App.css";
import { Routes, Route } from "react-router-dom";

// ================= PUBLIC PAGES =================
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyOTP from "./Pages/VerifyOTP";
import ResetPassword from "./Pages/ResetPassword";

// ================= PROTECTED ROUTE =================
import ProtectedRoute from "./assets/Components/ProtectedRoute";

// ================= STUDENT PAGES =================
import StudentDashboard from "./Student/StudentsPages/DashBoard/DashBoard";
import StudentJobs from "./Student/StudentsPages/Jobs/Jobs";
import Application from "./Student/StudentsPages/Application/Application";
import PlacementsStats from "./Student/StudentsPages/PlacementsStats/PlacementsStats";
import Profile from "./Student/StudentsPages/Profile/Profile";
import Resume from "./Student/StudentsPages/Resume/Resume";
import Setting from "./Student/StudentsPages/Setting/Setting";
import InterviewPreparationPage from "./Student/StudentsPages/InterviewPreparation/InterviewPreparationPage";

// ================= ADMIN PAGES =================
import Dashboard from "./Admin/Pages/Dashboard";
import Students from "./Admin/Pages/Students";
import Companies from "./Admin/Pages/Companies";
import Jobs from "./Admin/Pages/Jobs";
import Applications from "./Admin/Pages/Applications";
import Placements from "./Admin/Pages/Placements";
import Reports from "./Admin/Pages/Reports";
import Settings from "./Admin/Pages/Settings";
import InterviewMaterials from "./Admin/Pages/InterviewMaterials";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* ================= STUDENT ROUTES ================= */}

      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/jobs"
        element={
          <ProtectedRoute role="student">
            <StudentJobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/application"
        element={
          <ProtectedRoute role="student">
            <Application />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/placements"
        element={
          <ProtectedRoute role="student">
            <PlacementsStats />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/profile"
        element={
          <ProtectedRoute role="student">
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/resume"
        element={
          <ProtectedRoute role="student">
            <Resume />
          </ProtectedRoute>
        }
      />

      {/* ===== Interview Preparation ===== */}

      <Route
        path="/student/interview-preparation"
        element={
          <ProtectedRoute role="student">
            <InterviewPreparationPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/settings"
        element={
          <ProtectedRoute role="student">
            <Setting />
          </ProtectedRoute>
        }
      />

      {/* ================= ADMIN ROUTES ================= */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/students"
        element={
          <ProtectedRoute role="admin">
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/companies"
        element={
          <ProtectedRoute role="admin">
            <Companies />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/jobs"
        element={
          <ProtectedRoute role="admin">
            <Jobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/applications"
        element={
          <ProtectedRoute role="admin">
            <Applications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/placements"
        element={
          <ProtectedRoute role="admin">
            <Placements />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/interview-materials"
        element={
          <ProtectedRoute role="admin">
            <InterviewMaterials />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <ProtectedRoute role="admin">
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute role="admin">
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={
          <h2
            style={{
              textAlign: "center",
              marginTop: "100px",
              color: "#2563eb",
            }}
          >
            404 | Page Not Found
          </h2>
        }
      />

    </Routes>
  );
}

export default App;