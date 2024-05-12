"use client"
import {useSelector} from "react-redux"
import AddData from "./AddStudents"
import {FilterStudent} from "./FilterStudent"
import {RootState} from "@/lib/store"
import EditStudent from "./EditStudent"

function FilterAndAddData() {
  const {toggleAddStudentValue, toggleFilterValue, toggleEditStudentValue} =
    useSelector((store: RootState) => store.toggleSlice)
  return (
    <>
      {toggleFilterValue && <FilterStudent />}
      <AddData isOpen={toggleAddStudentValue} />
      <EditStudent isOpen={toggleEditStudentValue} />
    </>
  )
}
export default FilterAndAddData
