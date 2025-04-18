const InputField = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
  value,
  defaultValue,
  htmlFor,
  onFocus,
  label,
  autoComplete,
  required,
  divClass,
  accept,
  labelStyle,
}) => {
  const defaultClass =
    "h-[40px] appearance-none bg-white border border-[#ccc] px-2 rounded-sm placeholder:text-[12px] text-sm font-normal";

  return (
    <div className={`flex flex-col ${divClass}`}>
      {label && (
        <div className="flex items-center">
          <label
            className={`text-[14px] max-md:text-[12px] mb-[5px] font-medium ${labelStyle}`}
            htmlFor={htmlFor}
          >
            {label}
          </label>
          {required ? <div className="text-red-500">*</div> : <></>}
        </div>
      )}
      <input
        accept={accept}
        required={required}
        className={`${className} ${defaultClass}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        name={name}
        id={id}
        onBlur={onBlur}
        value={value}
        onFocus={onFocus}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputField;
