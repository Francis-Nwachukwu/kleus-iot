import Login from "pages/auth/login";
import Register from "pages/auth/register";
import PunchRecordPage from "pages/dashboard/attendance/punchRecord";
import DashboardHome from "pages/dashboard/home";
import PersonInformation from "pages/dashboard/personManagement/personInformation";
import CompanyInfoPage from "pages/dashboard/system/companyInfo";
import DeviceManagementPage from "pages/dashboard/system/device";
import UserAccountPage from "pages/dashboard/system/users";
import NotFound from "pages/NotFound";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
  {
    path: "/",
    element: <Navigate to={"/login"} replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: "/admin/home/index",
    element: <DashboardHome />,
  },
  {
    path: "/admin/person/person",
    element: <PersonInformation />,
  },
  {
    path: "/admin/attendance/punch-record",
    element: <PunchRecordPage />,
  },
  {
    path: "/admin/system/customerInfo",
    element: <CompanyInfoPage />,
  },
  {
    path: "/admin/system/users",
    element: <UserAccountPage />,
  },
  {
    path: "/admin/system/device",
    element: <DeviceManagementPage />,
  },
];
