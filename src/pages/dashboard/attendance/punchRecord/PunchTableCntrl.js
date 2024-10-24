import React from "react";
import Button from "shared/Button";
import InputField from "shared/InputField";
import InputSelect from "shared/InputSelect";
import { FaSearch } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";

const PunchTableCntrl = () => {
  return (
    <div className="mb-4 flex flex-wrap gap-2 items-center">
      <div>
        <InputField
          name={"name"}
          placeholder={"Name/Person code/Phone number"}
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
        />
      </div>
      <div>
        <InputSelect
          options={[
            { title: "2024-09", value: "09" },
            { title: "2024-10", value: "10" },
          ]}
          name="range"
        />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <Button>
            <FaSearch />
            <p>Search</p>
          </Button>
        </div>
        <div>
          <Button className={"!bg-textGreen"}>
            <FaFileExport />
            <p>Export</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PunchTableCntrl;
