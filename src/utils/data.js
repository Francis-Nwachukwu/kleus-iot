import { FaRegCircle } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export const sidebarContents = [
  {
    id: 1,
    title: "Person Management",
    icon: <FaPerson />,
    children: [
      {
        id: 1,
        title: "Person Information",
        icon: <FaRegCircle />,
        href: "/dashboard/person",
      },
      {
        id: 2,
        title: "Leave Registration",
        icon: <FaRegCircle />,
        href: "/dashboard/person",
      },
    ],
  },
  {
    id: 2,
    title: "Attendance Management",
    icon: <FaIdCard />,
    children: [
      {
        id: 1,
        title: "Punch Record",
        icon: <FaRegCircle />,
        href: "/admin/attendance/punch-record",
      },
      {
        id: 2,
        title: "Leave Registration",
        icon: <FaRegCircle />,
        href: "/admin/attendance/punch-record",
      },
    ],
  },
  {
    id: 3,
    title: "System Settings",
    icon: <FaGear />,
    children: [
      {
        id: 1,
        title: "Device Management",
        icon: <FaRegCircle />,
        href: "/dashboard/system/device",
      },
      {
        id: 2,
        title: "Company Information",
        icon: <FaRegCircle />,
        href: "/dashboard/system/customerInfo",
      },
    ],
  },
];
