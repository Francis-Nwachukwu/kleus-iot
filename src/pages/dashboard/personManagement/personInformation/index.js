import Layout from "layout";
import PersonInfoTableCntrl from "./PersonInfoCntrl";
import PageHeader from "shared/PageHeader";
import Card from "shared/Card";
import CustomButton from "shared/Button";
import { FaPlus } from "react-icons/fa";
import { CgImport } from "react-icons/cg";
import { CgExport } from "react-icons/cg";
import { IoMdGrid } from "react-icons/io";
import Table from "shared/Table";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { Button, Popover } from "@mui/material";
import { capitalizeFirstLetter } from "helpers";
import EminiModal from "layout/modal";
import ImportModal from "../modal/ImportModal";
import { createColumnHelper } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { users } from "utils/data";

const { accessor } = createColumnHelper();

const PersonInformation = () => {
  // const [searchText, setSearchText] = useState("");
  // const [department, setDepartment] = useState("");

  const [isImportModalOpen, setIsImporrModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [columns, setColumns] = useState(["input", ...Object.keys(users[0])]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createColumns = () =>
    columns.map((item) => {
      let value = {};
      if (item === "operate") {
        value = accessor(item, {
          header: capitalizeFirstLetter(item),
          cell: () => (
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2">
                <FaEdit className="text-[#1976d2]" />
                <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
                  Change
                </p>
              </div>
              <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2">
                <FaEdit className="text-[#1976d2]" />
                <p className="text-[#1976d2] text-[14px] max-md:text-[12px]">
                  Modify
                </p>
              </div>
              <div className="flex items-center gap-1 border-r-[0.5px] border-[#ccc] px-2">
                <MdDelete className="text-textRed" />
                <p className="text-textRed text-[14px] max-md:text-[12px]">
                  Delete
                </p>
              </div>
            </div>
          ),
        });
      } else if (item === "desc") {
        value = accessor(item, {
          header: "Description",
          cell: (info) => <div className="w-[10vw]">{info.getValue()}</div>,
        });
      } else if (item === "input") {
        value = accessor(" ", {
          header: (
            <input
              type="checkbox"
              checked={selectedRows.length === users.length}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedRows(users);
                } else {
                  setSelectedRows([]);
                }
              }}
            />
          ),
          cell: (info) => (
            <input
              type="checkbox"
              checked={selectedRows.find(
                (row) => row.id === info.row.original.id
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedRows((prev) => [...prev, info.row.original]);
                } else {
                  setSelectedRows(
                    selectedRows.filter(
                      (row) => row.id !== info.row.original.id
                    )
                  );
                }
              }}
            />
          ),
        });
      } else {
        value = accessor(item, {
          header: capitalizeFirstLetter(item),
          cell: (info) => <div className="">{info.getValue()}</div>,
        });
      }
      return value;
    });

  return (
    <Layout>
      <EminiModal
        open={isImportModalOpen}
        onClose={() => setIsImporrModalOpen(false)}
        title="Import"
      >
        <ImportModal onClose={() => setIsImporrModalOpen(false)} />
      </EminiModal>
      <PageHeader
        pageTitle={"Person Information"}
        breadHomeMainText={"Home"}
        breadHomeSubText={"Person Information"}
        isActiveIndex={0}
      />
      <Card>
        <PersonInfoTableCntrl />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              <CustomButton className={"!bg-textGreen"}>
                <FaPlus />
                <p>Add</p>
              </CustomButton>
            </div>
            <div>
              <CustomButton
                onClick={() => setIsImporrModalOpen(true)}
                className={
                  "!bg-[#ecf0f5] !text-black !border-[0.5px] !border-textGrey"
                }
              >
                <CgImport />
                <p>Import</p>
              </CustomButton>
            </div>
            <div>
              <CustomButton
                className={
                  "!bg-[#ecf0f5] !text-black !border-[0.5px] !border-textGrey"
                }
              >
                <CgExport />
                <p>Export</p>
              </CustomButton>
            </div>
          </div>

          <Button aria-describedby={id} onClick={handleClick}>
            <div className="flex justify-center items-center p-1 border-[0.5px] border-textGrey rounded-sm">
              <IoMdGrid className="text-[16px]" />
              <IoMdArrowDropdown />
            </div>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="px-4 py-2 bg-white shadow-sm flex flex-col">
              {Object.keys(users[0]).map((item, idx) => (
                <label className="flex items-center gap-2" key={idx}>
                  <input
                    type="checkbox"
                    checked={columns.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setColumns((prev) => [...prev, item]);
                      } else {
                        setColumns(columns.filter((column) => column !== item));
                      }
                    }}
                    disabled={columns.length === 2 && columns.includes(item)}
                  />
                  <p className="text-[14px] max-md:text-[12px]">
                    {capitalizeFirstLetter(item)}
                  </p>
                </label>
              ))}
            </div>
          </Popover>
        </div>
        {selectedRows.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <div>
              <CustomButton className={"!bg-textRed !text-white"}>
                <MdDelete />
                <p>Batch Resign</p>
              </CustomButton>
            </div>
            <div>
              <CustomButton className={"!bg-textGreen"}>
                <FaCloudDownloadAlt />
                <p>Get Person Information</p>
              </CustomButton>
            </div>
            <div>
              <CustomButton className={"!bg-textGreen"}>
                <FaCloudDownloadAlt />
                <p>Send to Device</p>
              </CustomButton>
            </div>
            <div>
              <CustomButton className={"!bg-textRed !text-white"}>
                <MdDelete />
                <p>Delete from Device</p>
              </CustomButton>
            </div>
          </div>
        )}
        <Table
          onRowClick={(row) => {
            if (selectedRows.find(({ id }) => id === row?.id)) {
              setSelectedRows(selectedRows.filter(({ id }) => id !== row.id));
            } else {
              setSelectedRows((prev) => [...prev, row]);
            }
          }}
          columns={createColumns(columns)}
          data={users}
          header="You don’t have any users."
          type="Add a user to get started."
        />
      </Card>
    </Layout>
  );
};

export default PersonInformation;
