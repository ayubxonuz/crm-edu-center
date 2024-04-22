"use client"

import {Option, Select} from "@material-tailwind/react"

function MTSelect() {
  return (
    <div className="w-72">
      <Select
        label="Select Version"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  )
}
export default MTSelect
