import Layout from "layout";
import React from "react";
import Card from "shared/Card";
import PageHeader from "shared/PageHeader";
import CompanyForm from "./CompanyForm";

const CompanyInfoPage = () => {
  return (
    <Layout>
      <PageHeader
        pageTitle={"Company Information"}
        breadHomeMainText={"Home"}
        breadHomeSubText={"Company Information"}
        isActiveIndex={0}
      />
      <Card>
        <div className="flex justify-center">
          <div className="w-3/5 max-md:w-4/5 max-sm:w-[90%]">
            <CompanyForm />
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default CompanyInfoPage;
