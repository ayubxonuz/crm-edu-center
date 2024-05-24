"use client"
import DataTable from "@/components/DataTable"
import FilterAndAddData from "@/components/FilterAddEdit"
import Header from "@/components/Header"
import Score from "@/components/Score"
import {toggleAddStudentFunc} from "@/lib/features/toggle/toggleSlice"
import {customFetch} from "@/utils/utils"
import {FunnelIcon} from "@heroicons/react/24/outline"
import {useQuery} from "@tanstack/react-query"
import {useDispatch} from "react-redux"
function Students() {
  const dispatch = useDispatch()
  const {data, isPending} = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const students: {data: IStudents[]} = await customFetch("/students")
      return students.data
    },
  })

  return (
    <main className="grid gap-y-5">
      <Header
        buttonOne={{
          text: "FILTER",
          icon: <FunnelIcon width={21} height={21} />,
        }}
        buttonTwo={{
          text: "ADD STUDENTS",
          click: () => dispatch(toggleAddStudentFunc()),
        }}
        text="Students"
      />
      <div className="flex gap-x-5 mb-5">
        <Score title="Jami o'quvchilar" total={data?.length ?? 0} />
        <Score title="Hozir o'qiyotganlar" total={131} />
        <Score title="Bitirganlar" total={134} />
      </div>
      <FilterAndAddData />
      <DataTable loading={isPending} students={data ?? []} />
    </main>
  )
}
export default Students
