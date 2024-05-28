import {createSlice} from "@reduxjs/toolkit"

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: localStorage.getItem("auth") || false,
  },
  reducers: {
    setAdmin: (state, {payload}: {payload: boolean}) => {
      state.admin = payload
      localStorage.setItem("auth", JSON.stringify(payload))
    },
  },
})

export const {setAdmin} = adminSlice.actions

export default adminSlice.reducer
