import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Table from "shared/Table";

const DeviceMngtTable = () => {
  const { accessor } = createColumnHelper();

  const [selectedRows, setSelectedRows] = useState([]);

  const devices = [
    {
      id: 1,
      serialNo: "AYSD28049996",
      deviceName: "AI05",
      model: "AI05",
      type: "AI Dynamic Face Attendance Machine",
      ip: "105.113.88.72",
      status: "offline",
      connectionTIme: "2024-09-30 10:45:10",
      operate: "",
    },
    {
      id: 2,
      serialNo: "AYSD28049996",
      deviceName: "AI06",
      model: "AI06",
      type: "AI Dynamic Face Attendance Machine",
      ip: "105.113.88.72",
      status: "online",
      connectionTIme: "2024-09-30 10:45:10",
      operate: "",
    },
    {
      id: 3,
      serialNo: "AYSD28049996",
      deviceName: "AI07",
      model: "AI07",
      type: "AI Dynamic Face Attendance Machine",
      ip: "105.113.88.72",
      status: "offline",
      connectionTIme: "2024-09-30 10:45:10",
      operate: "",
    },
    {
      id: 4,
      serialNo: "AYSD28049996",
      deviceName: "AI08",
      model: "AI08",
      type: "AI Dynamic Face Attendance Machine",
      ip: "105.113.88.72",
      status: "online",
      connectionTIme: "2024-09-30 10:45:10",
      operate: "",
    },
  ];

  const columns = [
    accessor("bookingId", {
      header: (
        <input
          type="checkbox"
          checked={selectedRows.length === devices.length}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRows(devices);
            } else {
              setSelectedRows([]);
            }
          }}
        />
      ),
      cell: (info) => (
        <input
          type="checkbox"
          checked={selectedRows.find((row) => row.id === info.row.original.id)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedRows((prev) => [...prev, info.row.original]);
            } else {
              setSelectedRows(
                selectedRows.filter((row) => row.id !== info.row.original.id)
              );
            }
          }}
        />
      ),
    }),
    accessor("serialNo", {
      header: "Serial No",
      cell: (info) => info.getValue(),
    }),
    accessor("deviceName", {
      header: "Device Name",
      cell: (info) => info.getValue(),
    }),
    accessor("model", {
      header: "Model",
      cell: (info) => info.getValue(),
    }),
    accessor("type", {
      header: "Type",
      cell: (info) => <p className="whitespace-nowrap">{info.getValue()}</p>,
    }),
    accessor("ip", {
      header: "IP Address",
      cell: (info) => info.getValue(),
    }),
    accessor("status", {
      header: "Status",
      cell: (info) =>
        info.row.original?.status === "offline" ? (
          <p className="bg-textRed px-1 rounded-sm text-white">
            {info.getValue()}
          </p>
        ) : (
          <p className="bg-textGreen px-1 rounded-sm text-white">
            {info.getValue()}
          </p>
        ),
    }),
    accessor("connectionTIme", {
      header: "Final Connection Time",
      cell: (info) => info.getValue(),
    }),
    accessor("operate", {
      header: "Operate",
      cell: () => (
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2 whitespace-nowrap">
            <FaEdit className="text-[#1976d2]" />
            <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
              Order List
            </p>
          </div>
          <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2 whitespace-nowrap">
            <FaEdit className="text-[#1976d2]" />
            <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
              User List
            </p>
          </div>
          <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2 whitespace-nowrap">
            <FaEdit className="text-[#1976d2]" />
            <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
              Modify
            </p>
          </div>
          <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2 whitespace-nowrap">
            <FaGear className="text-[#1976d2]" />
            <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
              Access Parameter
            </p>
          </div>
          <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2 whitespace-nowrap">
            <MdDelete className="text-textRed" />
            <p className="text-textRed text-[14px] max-md:text-[12px]">
              Delete
            </p>
          </div>
        </div>
      ),
    }),
  ];

  return (
    <Table
      columns={columns}
      data={devices}
      header="You don’t have any devices."
      type="Register a device to get started."
    />
  );
};

export default DeviceMngtTable;
