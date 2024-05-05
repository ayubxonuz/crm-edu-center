"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Skeleton} from "./ui/skeleton"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="select-none">
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
                )
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <div className="flex">
                  <div className="grid gap-y-3">
                    <Skeleton className="h-4 w-[50px]" />
                    <Skeleton className="h-4 w-[50px]" />
                    <Skeleton className="h-4 w-[50px]" />
                  </div>
                  <div className="grid gap-y-3 ml-[85px]">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                  <div className="grid gap-y-3 ml-[140px]">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                  <div className="grid gap-y-3 ml-[120px]">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                  <div className="grid gap-y-3 ml-[110px]">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                  <div className="grid gap-y-3 ml-[55px]">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
