const NoData = ({ type, header }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center font-semibold">
      <p className="text-[20px] max-md:text-[16px]">{header}</p>
      <p className="text-[16px] max-md:text-[14px] text-[#3B5877]">{type}</p>
    </div>
  );
};

export default NoData;
