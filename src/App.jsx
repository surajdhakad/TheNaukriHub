
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

// =====================================================
// NAVBAR
// =====================================================

import Navbar from "./Common/Landing/Navbar/Navbar";

// =====================================================
// PUBLIC PAGES
// =====================================================

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyOTP from "./Pages/VerifyOTP";
import ResetPassword from "./Pages/ResetPassword";

// =====================================================
// LEGAL PAGES
// =====================================================

import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import CookiePolicy from "./Pages/CookiePolicy/CookiePolicy";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

// =====================================================
// SUPPORT PAGES
// =====================================================

import FAQ from "./Pages/FAQ/FAQ";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";
import Support from "./Pages/Support/Support";
import ReportIssue from "./Pages/ReportIssue/ReportIssue";
import CareerGuidance from "./Pages/CareerGuidance/CareerGuidance";

// =====================================================
// ABOUT PAGE
// =====================================================

import AboutUs from "./Common/Landing/AboutUs/AboutUs";

// =====================================================
// CONTACT PAGE
// =====================================================

import ContactUs from "./Common/Landing/ContactUs/ContactUs";

// =====================================================
// PUBLIC JOB PAGES
// =====================================================

import AllJobs from "./Common/Landing/jobs/jobs";
import JobDetails from "./Common/Landing/jobs/JobDetails";

// =====================================================
// BANKS / RECENT JOBS
// =====================================================

import RecentJobs from "./Common/Landing/RecentJobs/RecentJobs";

// =====================================================
// PROTECTED ROUTE
// =====================================================

import ProtectedRoute from "./assets/Components/ProtectedRoute";

// =====================================================
// PLACED STUDENTS
// =====================================================

import Student from "./Common/Landing/dummyplacedstudent/student";
import StudentProfile from "./Common/Landing/dummyplacedstudent/StudentProfile";

// =====================================================
// STUDENT PAGES
// =====================================================

import StudentDashboard from "./Student/StudentsPages/DashBoard/DashBoard";
import StudentJobs from "./Student/StudentsPages/Jobs/Jobs";
import Application from "./Student/StudentsPages/Application/Application";
import Resume from "./Student/StudentsPages/Resume/Resume";
import InterviewPreparationPage from "./Student/StudentsPages/InterviewPreparation/InterviewPreparationPage";

// =====================================================
// ADMIN PAGES
// =====================================================

import Dashboard from "./Admin/Pages/Dashboard";
import Students from "./Admin/Pages/Students";
import Companies from "./Admin/Pages/Companies";
import Jobs from "./Admin/Pages/Jobs";
import Applications from "./Admin/Pages/Applications";
import Placements from "./Admin/Pages/Placements";
import Reports from "./Admin/Pages/Reports";
import Settings from "./Admin/Pages/Settings";
import InterviewMaterials from "./Admin/Pages/InterviewMaterials";

// =====================================================
// ADMIN LEADS
// =====================================================

import AdminLeads from "./Admin/Components/laeds/AdminLeads.jsx";

// =====================================================
// APP
// =====================================================

function App() {
  const location = useLocation();

  // ===================================================
  // PUBLIC NAVBAR PATHS
  // ===================================================

  const publicNavbarPaths = [
    "/",
    "/jobs",
    "/banks",
    "/about",
    "/contact",
    "/students",
  ];

  // ===================================================
  // JOB DETAILS PAGE
  // ===================================================

  const isJobDetailsPage =
    location.pathname.startsWith("/jobs/") &&
    location.pathname !== "/jobs";

  // ===================================================
  // STUDENT PROFILE PAGE (PUBLIC PLACED STUDENTS)
  // ===================================================

  const isStudentProfilePage =
    location.pathname.startsWith("/students/") &&
    location.pathname !== "/students";

  // ===================================================
  // SHOW NAVBAR
  // ===================================================

  const showNavbar =
    publicNavbarPaths.includes(location.pathname) ||
    isJobDetailsPage ||
    isStudentProfilePage;

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <>
      {/* MAIN NAVBAR */}

      {showNavbar && <Navbar />}

      {/* ROUTES */}

      <Routes>

        {/* =================================================
            PUBLIC ROUTES
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        {/* =================================================
            LEGAL ROUTES
        ================================================= */}

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        <Route
          path="/cookie-policy"
          element={<CookiePolicy />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

        {/* =================================================
            SUPPORT ROUTES
        ================================================= */}

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/help-center"
          element={<HelpCenter />}
        />

        <Route
          path="/support"
          element={<Support />}
        />

        <Route
          path="/report-issue"
          element={<ReportIssue />}
        />

        <Route
          path="/career-guidance"
          element={<CareerGuidance />}
        />

        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={<AboutUs />}
        />

        {/* =================================================
            CONTACT
        ================================================= */}

        <Route
          path="/contact"
          element={<ContactUs />}
        />

        {/* =================================================
            BANKS
        ================================================= */}

        <Route
          path="/banks"
          element={<RecentJobs />}
        />

        {/* =================================================
            PUBLIC JOBS
        ================================================= */}

        <Route
          path="/jobs"
          element={<AllJobs />}
        />

        <Route
          path="/jobs/:jobId"
          element={<JobDetails />}
        />

        {/* =================================================
            PLACED STUDENTS
        ================================================= */}

        <Route
          path="/students"
          element={<Student />}
        />

        <Route
          path="/students/:id"
          element={<StudentProfile />}
        />

        {/* =================================================
            STUDENT DASHBOARD ROUTES
        ================================================= */}

        {/* DASHBOARD */}

        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* STUDENT JOBS */}

        <Route
          path="/student/jobs"
          element={
            <ProtectedRoute role="student">
              <StudentJobs />
            </ProtectedRoute>
          }
        />

        {/* APPLICATION */}

        <Route
          path="/student/application"
          element={
            <ProtectedRoute role="student">
              <Application />
            </ProtectedRoute>
          }
        />

        {/* RESUME */}

        <Route
          path="/student/resume"
          element={
            <ProtectedRoute role="student">
              <Resume />
            </ProtectedRoute>
          }
        />

        {/* INTERVIEW PREPARATION */}

        <Route
          path="/student/interview-preparation"
          element={
            <ProtectedRoute role="student">
              <InterviewPreparationPage />
            </ProtectedRoute>
          }
        />

        {/* =================================================
            ADMIN ROUTES
        ================================================= */}

        {/* ADMIN DASHBOARD */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN STUDENTS */}

        <Route
          path="/admin/students"
          element={
            <ProtectedRoute role="admin">
              <Students />
            </ProtectedRoute>
          }
        />

        {/* ADMIN COMPANIES */}

        <Route
          path="/admin/companies"
          element={
            <ProtectedRoute role="admin">
              <Companies />
            </ProtectedRoute>
          }
        />

        {/* ADMIN JOBS */}

        <Route
          path="/admin/jobs"
          element={
            <ProtectedRoute role="admin">
              <Jobs />
            </ProtectedRoute>
          }
        />

        {/* ADMIN APPLICATIONS */}

        <Route
          path="/admin/applications"
          element={
            <ProtectedRoute role="admin">
              <Applications />
            </ProtectedRoute>
          }
        />

        {/* ADMIN PLACEMENTS */}

        <Route
          path="/admin/placements"
          element={
            <ProtectedRoute role="admin">
              <Placements />
            </ProtectedRoute>
          }
        />

        {/* ADMIN INTERVIEW MATERIALS */}

        <Route
          path="/admin/interview-materials"
          element={
            <ProtectedRoute role="admin">
              <InterviewMaterials />
            </ProtectedRoute>
          }
        />

        {/* ADMIN REPORTS */}

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute role="admin">
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* ADMIN SETTINGS */}

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute role="admin">
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* =================================================
            ADMIN LEADS
        ================================================= */}

        <Route
          path="/admin/leads"
          element={
            <ProtectedRoute role="admin">
              <AdminLeads />
            </ProtectedRoute>
          }
        />

        {/* =================================================
            404 PAGE
        ================================================= */}

        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "70vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
                textAlign: "center",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >

              <h1
                style={{
                  margin: 0,
                  fontSize: "72px",
                  lineHeight: 1,
                  fontWeight: "800",
                  color: "#2563eb",
                }}
              >
                404
              </h1>

              <h2
                style={{
                  margin: "10px 0 0",
                  fontSize: "28px",
                  color: "#1e293b",
                }}
              >
                Page Not Found
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: "15px",
                }}
              >
                The page you are looking for does not exist.
              </p>

            </div>
          }
        />

      </Routes>
    </>
  );
}

export default App;
