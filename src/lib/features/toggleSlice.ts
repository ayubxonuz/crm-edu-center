import {createSlice} from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    toggleFilterValue: false,
    toggleAddStudentValue: false,
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
  },
})

export const {toggleFilterFunc, toggleAddStudentFunc} = dataSlice.actions
export default dataSlice.reducer
