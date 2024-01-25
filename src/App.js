import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { DashboardLayout } from "./components/navbar";
import { DashboardLayout as HospitalDashboardLayout } from "./components/navbar/hospital";
import { DashboardLayout as AdminDashboardLayout } from "./components/navbar/admin";
import {
  Dashboard,
  Candidates,
  Credentials,
  Matches,
  Positions,
  TimeSheets,
  ControlCenterSidebar,
  Profile,
  DataPreference,
  Notification,
  Tools,
  Help,
  About,
  Appearance,
  ReportsList,
} from "./Pages";

import Login from "./Pages/common/Login";
import Signup from "./Pages/common/Signup";
import Facilities from "./Pages/Main/Facilities";
import ProtectedRoute from "./components/ProtectedRoute";
import PositionData from "./components/hp/PositionData";
import UserRole from "./Pages/control-center-pages/UserRole";
import { AboutUs, ContactUs, Home, Jobs } from "./Pages/Main";
import Blogs from "./Pages/Main/Blogs";
import BlogDetail from "./Pages/Main/BlogDetail";
import ApplyNow from "./Pages/Main/ApplyNow";
import Clients from "./Pages/Main/Clients";
import Layout from "./components/Layout";
import BlogsDashboard from "./Pages/Admin/BlogsDashboard";
import Blog from "./Pages/Admin/Blog";
import Register from "./Pages/Employee/Register";
import JobApplicationForm from "./Pages/Employee/JobApplicationForm";
import JobSearch from "./Pages/Main/JobSearch";
import EmployeeProfile from "./components/Employee/EmployeeProfile";
import PerDiem from "./Pages/Main/PerDiem";
import DirectHire from "./Pages/Main/DirectHire";
import EmergencyServices from "./Pages/Main/EmergencyServices";
import AlliedHealthCare from "./Pages/Main/AlliedHealthCare";
import TravelNurse from "./Pages/Main/TravelNurse";
import EmployeeBenefits from "./Pages/Main/EmployeeBenefits";
import HealthCare from "./Pages/Main/HealthCare";
import HireTalent from "./Pages/Main/HireTalent";
import NonClinic from "./Pages/Main/NonClinic";
import ManagedServices from "./Pages/Main/ManagedServices";
import FlatPoolMangment from "./Pages/Main/FlatPoolMangment";
import CorporateCareer from "./Pages/Main/About/CorporateCareer";
import PartnerWithUs from "./Pages/Main/PartnerWithUs";
import Location from "./Pages/Main/Location";
import Referal from "./Pages/Main/Referal";
import FAQS from "./Pages/Main/FAQS";
import Setting from "./Pages/control-center-pages/Setting";
import {
  ReportRemittance,
  ReportActivity,
  ReportPosition,
  ReportMatches,
} from "./Pages/Reports";
import { useEffect } from "react";
import AuthValidator from "./modules/AuthValidator";
import { SocketProvider } from "./socket/SocketProvider";
import { useSelector } from "react-redux";
import CMS from "./Pages/control-center-pages/CMS";
import Page404 from "./Pages/Main/Page404";
import { processErrors } from "./modules/handleErrors";
import HealthCareProfession from "./Pages/Main/HealthCareProfession";
// Define themes for each dashboard
const theme1 = createTheme({
  palette: {
    background: {
      // default: "#800020",
    },
  },
});

const theme2 = createTheme({
  palette: {
    background: {
      // default: "#28a745",
    },
  },
});

const theme3 = createTheme({
  palette: {
    background: {
      // default: "#447bab",
    },
  },
});

function App() {
  const { token } = useSelector((state) => state.auth);

  AuthValidator();

  return (
   
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/register" element={<Signup  />} />
        
      
       
        <Route
          element={
            <ThemeProvider theme={theme1}>
              {/* <ProtectedRoute type={"AG"}>
                <DashboardLayout type={"AG"} />
              </ProtectedRoute> */}
              <DashboardLayout type={"AG"} />
            </ThemeProvider>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<Candidates />} />
          <Route path="/cars" element={<Matches  />} />
          <Route path="/bids" element={<Positions />} />
          <Route path="/pending-user" element={<ReportsList />} />

          <Route
            path="/agencies/reports/remittance"
            element={<ReportRemittance />}
          />
          <Route
            path="/agencies/reports/position"
            element={<ReportPosition />}
          />
          <Route path="/agencies/reports/match" element={<ReportMatches />} />
          <Route
            path="/agencies/reports/activity"
            element={<ReportActivity />}
          />
          <Route path="/agencies/time-sheets" element={<TimeSheets />} />
          <Route
            path="/agencies/profile-rept"
            element={<ControlCenterSidebar />}
          />

          <Route path="/agencies/profile" element={<Profile />} />
          {/* <Route path="/agencies/data-preference" element={<DataPreference />} /> */}
          <Route path="/agencies/notification" element={<Notification />} />
          <Route path="/agencies/setting" element={<Setting />} />
          {/* <Route path="/agencies/tools" element={<Tools />} /> */}
          <Route path="/agencies/help" element={<Help />} />
          <Route path="/agencies/about" element={<About />} />
          {/* <Route path="/agencies/appearance" element= {<Appearance />} /> */}
          <Route
            path="/agencies"
            element={<Navigate to="/agencies/dashboard" replace />}
          />

          <Route
            path="/agency/*"
            element={<Page404 home="/agencies/dashboard" />}
          />
          <Route
            path="/agencies/*"
            element={<Page404 home="/agencies/dashboard" />}
          />
        </Route>
       
      </Routes>
    
  );
}

export default App;
