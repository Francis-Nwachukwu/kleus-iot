function PageBreadCrumb({ mainText, subText, otherText, isActiveIndex }) {
  return (
    <div className="flex gap-2 text-[13px] max-md:text-[11px] font-[500] text-textGrey">
      <div className={`${isActiveIndex === 0 ? "text-black" : ""}`}>
        {mainText}
      </div>
      {subText && (
        <div
          className={`${isActiveIndex === 1 ? "text-black" : ""} flex gap-2`}
        >
          <div>&gt;</div>
          <div>{subText}</div>
        </div>
      )}
      {otherText && (
        <div
          className={`${isActiveIndex === 2 ? "text-black" : ""} flex gap-2`}
        >
          <div>/</div>
          <div>{otherText}</div>
        </div>
      )}
    </div>
  );
}

export default PageBreadCrumb;
