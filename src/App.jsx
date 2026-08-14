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
import FAQ from "./Pages/FAQ/FAQ";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";
import Support from "./Pages/Support/Support";
import ReportIssue from "./Pages/ReportIssue/ReportIssue";
import CareerGuidance from "./Pages/CareerGuidance/CareerGuidance";
// =====================================================

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
// STUDENT PAGES
// =====================================================

import StudentDashboard from "./Student/StudentsPages/DashBoard/DashBoard";

import StudentJobs from "./Student/StudentsPages/Jobs/Jobs";

import Application from "./Student/StudentsPages/Application/Application";

import PlacementsStats from "./Student/StudentsPages/PlacementsStats/PlacementsStats";

import Profile from "./Student/StudentsPages/Profile/Profile";

import Resume from "./Student/StudentsPages/Resume/Resume";

import Setting from "./Student/StudentsPages/Setting/Setting";

import InterviewPreparationPage
  from "./Student/StudentsPages/InterviewPreparation/InterviewPreparationPage";

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

import InterviewMaterials
  from "./Admin/Pages/InterviewMaterials";

// =====================================================
// APP
// =====================================================

function App() {
  const location = useLocation();

  // ===================================================
  // PUBLIC PAGES JAHAN MAIN NAVBAR SHOW HOGA
  // ===================================================
  //
  // Login
  // Signup
  // Forgot Password
  // Verify OTP
  // Reset Password
  //
  // in pages par Navbar nahi dikhega.
  //
  // Legal pages apna Navbar khud render karte hain.
  // Isliye unko yahan add nahi kiya gaya.
  // ===================================================

  const publicNavbarPaths = [
    "/",
    "/jobs",
    "/banks",
    "/about",
    "/contact",
  ];

  // ===================================================
  // JOB DETAILS PAGE
  // Example:
  // /jobs/123
  // ===================================================

  const isJobDetailsPage =
    location.pathname.startsWith("/jobs/") &&
    location.pathname !== "/jobs";

  // ===================================================
  // SHOW MAIN NAVBAR
  // ===================================================

  const showNavbar =
    publicNavbarPaths.includes(location.pathname) ||
    isJobDetailsPage;

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
      {/* =================================================
          MAIN LANDING NAVBAR
      ================================================= */}

      {showNavbar && <Navbar />}

      {/* =================================================
          ALL ROUTES
      ================================================= */}

      <Routes>

        {/* =================================================
            PUBLIC ROUTES
        ================================================= */}

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGNUP */}

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* FORGOT PASSWORD */}

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* VERIFY OTP */}

        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        {/* RESET PASSWORD */}

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />


        {/* =================================================
            LEGAL ROUTES
        ================================================= */}

        {/* PRIVACY POLICY */}

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* TERMS AND CONDITIONS */}

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        {/* REFUND POLICY */}

        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        {/* COOKIE POLICY */}

        <Route
          path="/cookie-policy"
          element={<CookiePolicy />}
        />

        {/* DISCLAIMER */}

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />
{/* SUPPORT PAGES*/}

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


        {/* =================================================
            JOB DETAILS
        ================================================= */}

        <Route
          path="/jobs/:jobId"
          element={<JobDetails />}
        />


        {/* =================================================
            STUDENT ROUTES
        ================================================= */}

        {/* STUDENT DASHBOARD */}

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


        {/* STUDENT APPLICATION */}

        <Route
          path="/student/application"
          element={
            <ProtectedRoute role="student">
              <Application />
            </ProtectedRoute>
          }
        />


        {/* STUDENT PLACEMENTS */}

        <Route
          path="/student/placements"
          element={
            <ProtectedRoute role="student">
              <PlacementsStats />
            </ProtectedRoute>
          }
        />


        {/* STUDENT PROFILE */}

        <Route
          path="/student/profile"
          element={
            <ProtectedRoute role="student">
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* STUDENT RESUME */}

        <Route
          path="/student/resume"
          element={
            <ProtectedRoute role="student">
              <Resume />
            </ProtectedRoute>
          }
        />


        {/* STUDENT INTERVIEW PREPARATION */}

        <Route
          path="/student/interview-preparation"
          element={
            <ProtectedRoute role="student">
              <InterviewPreparationPage />
            </ProtectedRoute>
          }
        />


        {/* STUDENT SETTINGS */}

        <Route
          path="/student/settings"
          element={
            <ProtectedRoute role="student">
              <Setting />
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