import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { useMemo } from "react";
import NoData from "./NoData";

const Table = ({ columns, data, header, type, onRowClick = () => {} }) => {
  data = useMemo(() => data, [data]);
  columns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {data?.length === 0 ? (
        <NoData header={header} type={type} />
      ) : (
        <div className="h-full w-full overflow-x-auto border-[0.5px] border-[#ddd]">
          <table className="w-full">
            <thead className="text-left bg-[#f2f2f2] text-[#707070] border-b-[0.5px] border-[#ddd]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="px-2 py-2 text-[14px] max-md:text-[12px] font-semibold whitespace-nowrap border-r-[0.5px] border-[#ddd]"
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  onClick={() => {
                    onRowClick(row.original);
                  }}
                  className="relative border-b-[0.5px]"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="px-2 py-1 text-[14px] max-md:text-[12px] border-r-[0.5px] border-b-[0.5px] border-[#ddd]"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="py-4">
            <p className="text-[14px] max-md:text-[12px]">
              Showing 1 of 7 of 7 rows
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
