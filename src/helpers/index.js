import { createColumnHelper } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const { accessor } = createColumnHelper();

export const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const createColumns = (arr) =>
  arr.map((item) => {
    let value = {};
    if (item === "operate") {
      value = accessor(item, {
        header: capitalizeFirstLetter(item),
        cell: () => (
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2">
              <FaEdit className="text-[#1976d2]" />
              <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
                Change
              </p>
            </div>
            <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2">
              <FaEdit className="text-[#1976d2]" />
              <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
                Modify
              </p>
            </div>
            <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2">
              <MdDelete className="text-textRed" />
              <p className="text-textRed text-[14px] max-md:text-[12px]">
                Delete
              </p>
            </div>
          </div>
        ),
      });
    } else if (item === "desc") {
      value = accessor(item, {
        header: "Description",
        cell: (info) => <div className="w-[20vw]">{info.getValue()}</div>,
      });
    } else if (item === "input") {
      value = accessor(" ", {
        header: (
          <input
            type="checkbox"
            // checked={columns.includes(item)}
            // onChange={(e) => {
            //   if (e.target.checked) {
            //     setColumns((prev) => [...prev, item]);
            //   } else {
            //     setColumns(columns.filter((column) => column !== item));
            //   }
            // }}
            // disabled={columns.length === 1 && columns.includes(item)}
          />
        ),
        cell: () => (
          <input
            type="checkbox"
            // checked={columns.includes(item)}
            // onChange={(e) => {
            //   if (e.target.checked) {
            //     setColumns((prev) => [...prev, item]);
            //   } else {
            //     setColumns(columns.filter((column) => column !== item));
            //   }
            // }}
            // disabled={columns.length === 1 && columns.includes(item)}
          />
        ),
      });
    } else {
      value = accessor(item, {
        header: capitalizeFirstLetter(item),
        cell: (info) => <div className="">{info.getValue()}</div>,
      });
    }
    return value;
  });
