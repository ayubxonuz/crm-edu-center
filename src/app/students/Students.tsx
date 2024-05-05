"use client"
import {DataTable} from "@/components/DataTable"
import FilterAndAddData from "@/components/FilterAndAddData"
import Header from "@/components/Header"
import Score from "@/components/Score"
import {Loading} from "@/components/ui/Loading"
import {customFetch} from "@/utils/utils"
import {PlusIcon} from "@heroicons/react/24/outline"
import {useQuery} from "@tanstack/react-query"

function Students() {
  const {data, isPending} = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const students = await customFetch("/students")
      return students.data
    },
  })
  console.log(data)

  return (
    <main className="grid gap-y-5">
      <Header
        btnText="ADD STUDENT"
        btnIcon={<PlusIcon width={21} height={21} />}
        text="Students"
      />
      <div className="flex gap-x-5 mb-5">
        <Score title="All Students" total="1321" />
        <Score title="Girls" total="1321" />
        <Score title="Boys" total="1321" />
      </div>
      <FilterAndAddData />
      {/* <TableC /> */}
      {data && (
        <DataTable
          columns={[
            {
              accessorKey: "id",
              header: "ID",
            },
            {
              accessorKey: "fullName",
              header: "Fullname",
            },
            {
              accessorKey: "birthday",
              header: "Birthday",
            },
            {
              accessorKey: "address",
              header: "Address",
            },
            {
              accessorKey: "group",
              header: "Group",
            },
            {
              accessorKey: "phone",
              header: "Phone",
            },
          ]}
          data={data}
        />
      )}
      {isPending && <Loading />}
    </main>
  )
}
export default Students
