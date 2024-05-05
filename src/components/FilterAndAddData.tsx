"use client"
import {useSelector} from "react-redux"
import AddData from "./AddData"
import {FilterStudent} from "./FilterStudent"
import {RootState} from "@/lib/store"

function FilterAndAddData() {
  const {toggleAddStudentValue, toggleFilterValue} = useSelector(
    (store: RootState) => store.dataSlice
  )
  return (
    <>
      {toggleFilterValue && <FilterStudent />}
      {toggleAddStudentValue && <AddData />}
    </>
  )
}
export default FilterAndAddData
