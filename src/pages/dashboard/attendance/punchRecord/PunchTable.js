import { createColumnHelper } from "@tanstack/react-table";
import Table from "shared/Table";
import { FaDotCircle } from "react-icons/fa";

const PunchTable = () => {
  const { accessor } = createColumnHelper();

  const monthsArray = Array.from({ length: 31 }).map((item, idx) =>
    accessor(``, {
      header: idx > 8 ? `${idx + 1}` : `0${idx + 1}`,
      cell: (info) =>
        info.row.original?.record[idx + 1] ? (
          <FaDotCircle className="text-textGreen text-[10px]" />
        ) : (
          <FaDotCircle className="text-textRed text-[10px]" />
        ),
    })
  );

  const columns = [
    accessor("code", {
      header: "Person Code",
      cell: (info) => info.getValue(),
    }),
    accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    ...monthsArray,
  ];
  //   {
  //     code: "Ay2024",
  //     name: "Habib",
  //     record: [{ 1: true, 2: false, 3: false, 4: true }],
  //   },
  //   {
  //     code: "1",
  //     name: "Ayobami",
  //     record: [{ 1: true, 2: false, 3: false, 4: true }],
  //   },
  //   {
  //     code: "5",
  //     name: "David",
  //     record: [{ 1: true, 2: false, 3: false, 4: true }],
  //   },
  //   {
  //     code: "10",
  //     name: "Adeola",
  //     record: [{ 1: true, 2: false, 3: false, 4: true }],
  //   },
  //   {
  //     code: "13",
  //     name: "Ayodeji",
  //     record: [{ 1: true, 2: false, 3: false, 4: true }],
  //   },
  // ];

  const data = [
    {
      code: "Ay2024",
      name: "Habib",
      record: { 1: true, 2: false, 3: false, 4: true },
    },
    {
      code: "1",
      name: "Ayobami",
      record: { 1: true, 2: true, 3: false, 4: true },
    },
    {
      code: "5",
      name: "David",
      record: { 1: true, 2: false, 3: false, 4: false },
    },
    {
      code: "10",
      name: "Adeola",
      record: { 1: true, 2: false, 3: false, 4: true },
    },
    {
      code: "13",
      name: "Ayodeji",
      record: { 1: true, 2: true, 3: false, 4: true },
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      header="You don’t have any punch record."
      type="Punch to get started."
    />
  );
};

export default PunchTable;
