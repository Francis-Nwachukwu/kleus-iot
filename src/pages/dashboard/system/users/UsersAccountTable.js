import { createColumnHelper } from "@tanstack/react-table";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CustomButton from "shared/Button";
import Table from "shared/Table";
import { users } from "utils/data";

const UsersAccountTable = () => {
  const { accessor } = createColumnHelper();

  const columns = [
    accessor("name", {
      header: "Name",
      cell: (info) => <div className="">{info.getValue()}</div>,
    }),
    accessor("email", {
      header: "Email",
      cell: (info) => <div className="">{info.getValue()}</div>,
    }),
    accessor("desc", {
      header: "User Description",
      cell: (info) => <div className="w-[20vw]">{info.getValue()}</div>,
    }),
    accessor("", {
      header: "Operate",
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
    }),
  ];

  return (
    <div>
      <div className="my-4">
        <CustomButton className={"!bg-textGreen"}>
          <FaPlus />
          <p>Add</p>
        </CustomButton>
      </div>
      <Table
        columns={columns}
        data={users}
        header="You don’t have any users."
        type="Add a user to get started."
      />
    </div>
  );
};

export default UsersAccountTable;
