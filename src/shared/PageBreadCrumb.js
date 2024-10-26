import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function PageBreadCrumb({ mainText, subText, otherText, isActiveIndex }) {
  return (
    <div className="flex gap-2 max-sm:gap-1 text-[13px] max-md:text-[11px] font-[500] text-textGrey">
      <Link
        to={"/admin/home/index"}
        className={`${
          isActiveIndex === 0 ? "text-black" : ""
        } flex items-center gap-1`}
      >
        <FaHome />
        <p> {mainText}</p>
      </Link>
      {subText && (
        <div
          className={`${isActiveIndex === 1 ? "text-black" : ""} flex gap-1`}
        >
          <div>&gt;</div>
          <div>{subText}</div>
        </div>
      )}
      {otherText && (
        <div
          className={`${isActiveIndex === 2 ? "text-black" : ""} flex gap-1`}
        >
          <div>/</div>
          <div>{otherText}</div>
        </div>
      )}
    </div>
  );
}

export default PageBreadCrumb;
