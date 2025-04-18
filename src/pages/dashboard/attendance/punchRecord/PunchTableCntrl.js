import React from "react";
import CustomButton from "shared/Button";
import InputField from "shared/InputField";
import InputSelect from "shared/InputSelect";
import { FaSearch } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import request from "api";

const PunchTableCntrl = () => {
  const exportLogs = async () => {
    try {
      const response = await request.post(
        "http://54.81.132.129:7788/ws.php?action=exportLogs"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="max-sm:w-full">
        <InputField
          name={"name"}
          placeholder={"Name/Person code/Phone number"}
          className={"!h-[30px]"}
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[14px] max-md:text-[12px] font-semibold">
          Department
        </p>
        <InputSelect
          options={[]}
          optionsHolder={"-Select department-"}
          name="department"
          className={"!h-[30px]"}
        />
      </div>
      <div>
        <InputSelect
          options={[
            { title: "2024-09", value: "09" },
            { title: "2024-10", value: "10" },
          ]}
          name="range"
          className={"!h-[30px]"}
        />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <CustomButton>
            <FaSearch />
            <p>Search</p>
          </CustomButton>
        </div>
        <div>
          <CustomButton
            onClick={() => {
              exportLogs();
            }}
            className={"!bg-textGreen"}
          >
            <FaFileExport />
            <p>Export</p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PunchTableCntrl;
