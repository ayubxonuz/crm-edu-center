import {createSlice} from "@reduxjs/toolkit"

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleFilterValue: false,
    toggleAddStudentValue: false,
    toggleEditStudentValue: false,
  },
  reducers: {
    toggleFilterFunc: (state) => {
      state.toggleFilterValue = !state.toggleFilterValue
      state.toggleAddStudentValue = false
    },
    toggleAddStudentFunc: (state) => {
      state.toggleAddStudentValue = !state.toggleAddStudentValue
      state.toggleFilterValue = false
    },
    toggleEditStudentFunc: (state) => {
      state.toggleEditStudentValue = !state.toggleEditStudentValue
    },
  },
})

export const {toggleFilterFunc, toggleAddStudentFunc, toggleEditStudentFunc} =
  toggleSlice.actions
export default toggleSlice.reducer
