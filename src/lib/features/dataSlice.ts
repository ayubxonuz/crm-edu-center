import {createSlice} from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    num: 1,
  },
  reducers: {
    data: (state) => {},
  },
})

export const {data} = dataSlice.actions
export default dataSlice.reducer
