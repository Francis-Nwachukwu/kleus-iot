import PageBreadCrumb from "./PageBreadCrumb";

const PageHeader = ({
  pageTitle,
  breadHomeMainText,
  breadHomeSubText,
  isActiveIndex,
}) => {
  return (
    <div className="flex gap-1 max-md:flex-col max-md:items-start justify-between items-center">
      <p className="text-[20px] max-lg:text-[17px] max-md:text-[13px] font-semibold">
        {pageTitle}
      </p>
      <PageBreadCrumb
        mainText={breadHomeMainText}
        subText={breadHomeSubText}
        isActiveIndex={isActiveIndex}
      />
    </div>
  );
};

export default PageHeader;
