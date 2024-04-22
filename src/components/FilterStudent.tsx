"use client"
import {JBDateInput} from "jb-date-input-react"
import MTInput from "./MTInput"
import MTSelect from "./MTSelect"
import {CalendarIcon, FunnelIcon} from "@heroicons/react/24/outline"
import Btn from "./Btn"

export function FilterStudent() {
  return (
    <div className="flex items-center gap-x-4">
      <h5 className="text-2xl font-medium">Filter:</h5>
      <MTInput label="FullName" />
      <JBDateInput
        inputType="GREGORIAN"
        value={new Date()}
        className="rounded-none"
        placeholder="Enter Date Here"
      >
        <div slot="calendar-trigger-icon">
          <CalendarIcon />
        </div>
      </JBDateInput>
      <MTSelect />
      <Btn
        icon={<FunnelIcon width={20} height={20} />}
        variant="filled"
        text="FILTER"
      />
    </div>
  )
}
