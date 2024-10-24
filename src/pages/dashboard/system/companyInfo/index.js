import Layout from "layout";
import React from "react";
import Card from "shared/Card";
import PageHeader from "shared/PageHeader";

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
        <div>CompanyInfoPage</div>
      </Card>
    </Layout>
  );
};

export default CompanyInfoPage;
