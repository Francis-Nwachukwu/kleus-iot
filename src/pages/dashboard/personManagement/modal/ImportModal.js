import { useState } from "react";
import CustomButton from "shared/Button";
import InputField from "shared/InputField";

const ImportModal = ({ onClose }) => {
  const [importFile, setImportFile] = useState("");

  return (
    <div>
      <div>
        <InputField
          className={"!border-none !px-0"}
          label={"Select File"}
          required
          type="file"
          name="importFile"
          onChange={(e) => setImportFile(e.target.files[0])}
        />
        <input />
      </div>
      <div className="flex justify-end gap-2 border-t-[0.1px] border-textGrey py-2">
        <div>
          <CustomButton
            className={
              "!bg-[#ecf0f5] !text-black !border-[0.5px] !border-textGrey"
            }
            onClick={onClose}
          >
            <p>Cancel</p>
          </CustomButton>
        </div>
        <div>
          <CustomButton className={"!bg-textGreen"}>
            <p>Save</p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
