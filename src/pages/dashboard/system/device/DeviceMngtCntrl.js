import { FaSearch } from "react-icons/fa";
import CustomButton from "shared/Button";
import InputField from "shared/InputField";

const DeviceMngtCntrl = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div>
        <InputField
          name={"name"}
          placeholder={"Serial No/Name"}
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

export default DeviceMngtCntrl;
