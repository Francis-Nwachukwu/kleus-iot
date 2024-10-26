import Layout from "layout";
import Card from "shared/Card";
import PageHeader from "shared/PageHeader";
import DeviceMngtCntrl from "./DeviceMngtCntrl";
import CustomButton from "shared/Button";
import { FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import DeviceMngtTable from "./DeviceMngtTable";

const DeviceManagementPage = () => {
  return (
    <Layout>
      <PageHeader
        pageTitle={"Device Management"}
        breadHomeMainText={"Home"}
        breadHomeSubText={"Device Management"}
        isActiveIndex={0}
      />
      <Card>
        <DeviceMngtCntrl />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              <CustomButton className={"!bg-textGreen"}>
                <FaPlus />
                <p>Add</p>
              </CustomButton>
            </div>
            <div>
              <CustomButton className={"!bg-textGreen"}>
                <FaGear />
                <p>Access Parameter</p>
              </CustomButton>
            </div>
          </div>
        </div>
        <DeviceMngtTable />
      </Card>
    </Layout>
  );
};

export default DeviceManagementPage;
