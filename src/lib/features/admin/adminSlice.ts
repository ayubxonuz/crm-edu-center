// adminSlice.js
import {createSlice} from "@reduxjs/toolkit"

// Check if window is defined before accessing localStorage
const initialState = {
  admin:
    typeof window !== "undefined"
      ? localStorage.getItem("auth") || false
      : false,
}

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, {payload}: {payload: boolean}) => {
      state.admin = payload
      // Check if window is defined before accessing localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(payload))
      }
    },
  },
})

export const {setAdmin} = adminSlice.actions

export default adminSlice.reducer
