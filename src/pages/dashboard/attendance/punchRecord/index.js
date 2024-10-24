import Layout from "layout";
import { useState } from "react";
import PageHeader from "shared/PageHeader";
import PunchTable from "./PunchTable";
import PunchTableCntrl from "./PunchTableCntrl";
import Card from "shared/Card";

const PunchRecordPage = () => {
  const [searchText, setSearchText] = useState("");
  const [department, setDepartment] = useState("");
  const [month, setMonth] = useState("");

  return (
    <Layout>
      <PageHeader
        pageTitle={"Punch Record"}
        breadHomeMainText={"Home"}
        breadHomeSubText={"Punch Record"}
        isActiveIndex={0}
      />
      <Card>
        <PunchTableCntrl />
        <PunchTable />
      </Card>
    </Layout>
  );
};

export default PunchRecordPage;
