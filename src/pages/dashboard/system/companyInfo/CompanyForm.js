import React, { useState } from "react";
import CustomButton from "shared/Button";
import InputField from "shared/InputField";
import TextArea from "shared/Textarea";

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [companyShortName, setCompanyShortName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <form>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Company Name
        </p>
        <div className="w-4/5">
          <InputField
            type={"text"}
            name={"companyName"}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Company Code
        </p>
        <div className="w-4/5">
          <InputField
            type={"text"}
            name={"companyCode"}
            value={companyCode}
            onChange={(e) => setCompanyCode(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Company Short Name
        </p>
        <div className="w-4/5">
          <InputField
            type={"text"}
            name={"companyShortName"}
            value={companyShortName}
            onChange={(e) => setCompanyShortName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Phone
        </p>
        <div className="w-4/5">
          <InputField
            type={"text"}
            name={"tel"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Email Address
        </p>
        <div className="w-4/5">
          <InputField
            name={"email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Company Address
        </p>
        <div className="w-4/5">
          <InputField
            name={"address"}
            type={"text"}
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p className="font-semibold w-1/5 text-right text-[14px] max-md:text-[12px]">
          Remark
        </p>
        <div className="w-4/5">
          <TextArea
            rows={2}
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            name={"remark"}
            type={"text"}
          />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <CustomButton type={"button"}>Save</CustomButton>
      </div>
    </form>
  );
};

export default CompanyForm;
