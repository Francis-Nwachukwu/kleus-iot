import Layout from "layout";
import Card from "shared/Card";
import PageHeader from "shared/PageHeader";
import UsersAccountTable from "./UsersAccountTable";

const UserAccountPage = () => {
  return (
    <Layout>
      <PageHeader
        pageTitle={"User Account"}
        breadHomeMainText={"Home"}
        breadHomeSubText={"User Account"}
        isActiveIndex={0}
      />
      <Card>
        <UsersAccountTable />
      </Card>
    </Layout>
  );
};

export default UserAccountPage;
