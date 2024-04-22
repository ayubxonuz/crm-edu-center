"use client"
import {Button} from "@material-tailwind/react"
type btn = {
  text?: string
  icon?: JSX.Element
  variant: "gradient" | "filled" | "outlined" | "text"
}

function Btn({icon, text, variant}: btn) {
  return (
    <Button
      className="flex gap-x-[6px] items-center"
      variant={variant}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {icon} {text}
    </Button>
  )
}
export default Btn
