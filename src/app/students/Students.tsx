"use client"
import DataTable from "@/components/DataTable"
import FilterAndAddData from "@/components/FilterAddEdit"
import Header from "@/components/Header"
import Score from "@/components/Score"
import {customFetch} from "@/utils/utils"
import {PlusIcon} from "@heroicons/react/24/outline"
import {useQuery} from "@tanstack/react-query"
function Students() {
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
        btnText="ADD STUDENT"
        btnIcon={<PlusIcon width={21} height={21} />}
        text="Students"
      />
      <div className="flex gap-x-5 mb-5">
        <Score title="All Students" total={data?.length ?? 0} />
        <Score title="Girls" total={131} />
        <Score title="Boys" total={134} />
      </div>
      <FilterAndAddData />
      <DataTable loading={isPending} students={data ?? []} />
    </main>
  )
}
export default Students
