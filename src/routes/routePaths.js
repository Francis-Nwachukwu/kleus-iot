import Login from "pages/auth/login";
import Register from "pages/auth/register";
import PunchRecordPage from "pages/dashboard/attendance/punchRecord";
import PersonManagement from "pages/dashboard/personManagement";
import CompanyInfoPage from "pages/dashboard/system/companyInfo";
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
    path: "/admin/dashboard",
    element: <PersonManagement />,
  },
  {
    path: "/admin/attendance/punch-record",
    element: <PunchRecordPage />,
  },
  {
    path: "/dashboard/system/customerInfo",
    element: <CompanyInfoPage />,
  },
];
