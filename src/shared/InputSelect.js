import { IoIosArrowDown } from "react-icons/io";

const InputSelect = ({
  label,
  options,
  name,
  onChange,
  optionsHolder,
  disabledSelect,
  className,
  divClass,
  onClick,
  value,
  required,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full flex flex-col cursor-pointer ${divClass}`}
    >
      {label && (
        <div className="flex items-center">
          <label className="text-[14px] max-md:text-[12px] mb-[5px] font-medium">
            {label}
          </label>
          {required ? <div className="text-red-500">*</div> : <></>}
        </div>
      )}
      <div className="relative w-full flex items-center justify-center">
        <select
          value={value}
          required={required}
          name={name}
          onChange={onChange}
          disabled={disabledSelect}
          className={`appearance-none flex items-center justify-center w-full h-[40px] max-md:h-[40px] max-md:text-[12px] px-2 border border-[#CCC] rounded-sm ${className}`}
        >
          {optionsHolder && (
            <option
              value={""}
              className="!text-[#AAAAAA] !text-[14px] !max-md:text-[12px]"
              disabled={true}
            >
              {optionsHolder}
            </option>
          )}
          {options &&
            options.map((option, index) => (
              <option className="capitalize" key={index} value={option.value}>
                {option.title} {option.name}
              </option>
            ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 top-[2px] pointer-events-none">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default InputSelect;
