import CustomButton from "shared/Button";
import InputField from "shared/InputField";
import InputSelect from "shared/InputSelect";
import { FaSearch } from "react-icons/fa";
// import { FaFileExport } from "react-icons/fa";

const PersonInfoTableCntrl = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div className="max-sm:w-full">
        <InputField
          name={"name"}
          placeholder={"Name/Person code/Phone number"}
          className={"!h-[30px]"}
        />
      </div>
      <div className="flex items-center gap-2 max-sm:w-full">
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
      <div className="flex items-center gap-2">
        <div>
          <CustomButton>
            <FaSearch />
            <p>Search</p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PersonInfoTableCntrl;
