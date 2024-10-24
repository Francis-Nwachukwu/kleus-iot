import PageBreadCrumb from "./PageBreadCrumb";

const PageHeader = ({
  pageTitle,
  breadHomeMainText,
  breadHomeSubText,
  isActiveIndex,
}) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-[20px] max-md:text-[16px] font-semibold">
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
