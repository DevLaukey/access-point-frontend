"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Input } from "./input";
import { Button } from "./button";
import { ScrollArea, ScrollBar } from "./scroll-area";



export function DataTable({
  columns,
  data,
  searchKey,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });



    const handleAccessPointChange = (event) => {
      // Handle access point search
      // You might need to adjust this based on your table library
      // For example, if your table has a function like setAccessPointFilterValue
      table.setAccessPointFilterValue(event.target.value);
    };

    const handleArrivalDateChange = (event) => {
      // Handle arrival date search
      // You might need to adjust this based on your table library
      // For example, if your table has a function like setArrivalDateFilterValue
      table.setArrivalDateFilterValue(event.target.value);
    };

    const handleDepartureDateChange = (event) => {
      // Handle departure date search
      // You might need to adjust this based on your table library
      // For example, if your table has a function like setDepartureDateFilterValue
      table.setDepartureDateFilterValue(event.target.value);
    };

  /* this can be used to get the selectedrows 
  console.log("value", table.getFilteredSelectedRowModel()); */

  return (
    <>
      <div className="flex space-x-2 px-6">
        <Input
          placeholder={`Search ${searchKey}...`}
          value={
            searchKey && (table.getColumn(searchKey)?.getFilterValue() ?? "")
          }
          onChange={(event) =>
            table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
          className="w-full md:max-w-sm"
        />
        <Input
          placeholder="Access Point..."
          onChange={handleAccessPointChange}
          className="w-full md:max-w-sm"
        />
        <Input
          type="date"
          placeholder="Arrival Date..."
          onChange={handleArrivalDateChange}
          className="w-full md:max-w-sm"
        />
        <Input
          type="date"
          placeholder="Departure Date..."
          onChange={handleDepartureDateChange}
          className="w-full md:max-w-sm"
        />
      </div>

      <ScrollArea className="rounded-md border h-[50vh]">
        <Table className="relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
