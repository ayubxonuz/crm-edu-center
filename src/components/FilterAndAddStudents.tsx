"use client"
import {useSelector} from "react-redux"
import AddData from "./AddStudents"
import {FilterStudent} from "./FilterStudent"
import {RootState} from "@/lib/store"

function FilterAndAddData() {
  const {toggleAddStudentValue, toggleFilterValue} = useSelector(
    (store: RootState) => store.dataSlice
  )
  return (
    <>
      {toggleFilterValue && <FilterStudent />}
      <AddData isOpen={toggleAddStudentValue} />
    </>
  )
}
export default FilterAndAddData
