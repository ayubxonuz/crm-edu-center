import Btn from "@/components/Btn"
import {DataTable} from "@/components/DataTable"
import {FilterStudent} from "@/components/FilterStudent"
import Score from "@/components/Score"
import {studentsData} from "@/utils/utils"
import {FaPlus} from "react-icons/fa"

function Courses() {
  return (
    <main className="grid gap-y-3">
      <div className="flex gap-x-5 mb-5">
        <Score title="All Students" total="1,232" />
        <Score title="Girls" total="312" />
        <Score title="Boys" total="941" />
      </div>
      <div className="flex justify-between mb-4 items-center">
        <FilterStudent />
        <Btn variant="gradient" text="ADD STUDENT" icon={<FaPlus />} />
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
export default Courses
