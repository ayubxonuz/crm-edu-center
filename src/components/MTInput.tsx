"use client"
import {Input} from "@material-tailwind/react"

type TInput = {
  label: string
}

function MTInput({label}: TInput) {
  return (
    <div className="w-72">
      <Input
        label={label}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </div>
  )
}
export default MTInput
