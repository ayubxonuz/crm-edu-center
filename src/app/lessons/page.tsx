import Btn from "@/components/Btn"
import {DataTable} from "@/components/DataTable"
import {FilterStudent} from "@/components/FilterStudent"
import Header from "@/components/Header"
import Score from "@/components/Score"
import {studentsData} from "@/utils/utils"
import {PlusIcon} from "@heroicons/react/24/outline"

function Lessons() {
  return (
    <main className="grid gap-y-3">
      <Header
        btnText="ADD LESSONS"
        btnIcon={<PlusIcon width={21} height={21} />}
        text="Lessons"
      />
      <div className="flex gap-x-5 mb-5">
        <Score title="All Students" total="1,232" />
        <Score title="Girls" total="312" />
        <Score title="Boys" total="941" />
      </div>
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
export default Lessons
