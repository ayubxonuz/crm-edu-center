import {configureStore} from "@reduxjs/toolkit"
import dataSlice from "./features/dataSlice"
export const store = () => {
  return configureStore({
    reducer: {dataSlice},
  })
}

export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
