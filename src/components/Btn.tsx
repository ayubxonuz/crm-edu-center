"use client"
import {Button} from "@material-tailwind/react"
type btn = {
  text: string
  icon?: JSX.Element
}

function Btn({icon, text}: btn) {
  return (
    <Button
      className="flex gap-x-1 items-center"
      variant="gradient"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {icon} {text}
    </Button>
  )
}
export default Btn
