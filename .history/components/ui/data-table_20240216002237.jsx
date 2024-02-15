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
import Skeleton from "./skeleton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { CalendarDateRangePicker } from "../date-range-picker";

export function DataTable({ columns, data, searchKey, accessPoints }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleAccessPointChange = (accessPointName) => {
    table.getColumn("access_point_name").setFilterValue(accessPointName);
  };

  const handleArrivalDateChange = (event) => {
    // Handle arrival date search
    // You might need to adjust this based on your table library
    // For example, if your table has a function like setArrivalDateFilterValue
    table.getColumn("").setFilterValue(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    // Handle departure date search
    // You might need to adjust this based on your table library
    // For example, if your table has a function like setDepartureDateFilterValue
    table.getColumn("").setFilterValue(event.target.value);
  };

  /* this can be used to get the selectedrows 
  console.log("value", table.getFilteredSelectedRowModel()); */

  return (
    <>
      <div className="flex space-x-2 mx-4">
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

        <Select onValueChange={handleAccessPointChange}>
          <SelectTrigger className="w-full md:max-w-sm">
            <SelectValue placeholder="Search by Entry Point" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Entry Point</SelectLabel>
              {/* Map through accessPoints array and render SelectItem components */}
              {accessPoints.map((point) => (
                <SelectItem key={point.id} value={point.name}>
                  {point.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex space-x-2 ">
          <p className="font-semibold">Arrival Date</p>
       <CalendarDateRangePicker/>

      
      </div>
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
            {data.length === 0 ? (
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    <Skeleton className="h-24" />
                  </TableCell>
                ))}
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
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
