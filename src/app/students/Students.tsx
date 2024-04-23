import {DataTable} from "@/components/DataTable"
import {FilterStudent} from "@/components/FilterStudent"
import Header from "@/components/Header"
import Score from "@/components/Score"
import {studentsData} from "@/utils/utils"
import {PlusIcon} from "@heroicons/react/24/outline"

function Students() {
  return (
    <main className="grid gap-y-3">
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
      <FilterStudent />
      {/* <TableC /> */}
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
        data={studentsData}
      />
    </main>
  )
}
export default Students
