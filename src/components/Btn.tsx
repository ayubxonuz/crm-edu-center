import {Button, ConfigProvider, type ButtonProps} from "antd"
import {ReactNode} from "react"
type TBtn = {
  btnText: string
  size?: "large" | "middle" | "small"
  btnIcon?: JSX.Element | ReactNode
  type?: "primary" | "dashed" | "link" | "text" | "default"
}

function Btn({btnIcon, btnText, type, size}: TBtn) {
  return (
    <Button
      size={size ?? "large"}
      icon={btnIcon}
      type={type ?? "primary"}
      className="flex items-center"
    >
      {btnText}
    </Button>
  )
}
export default Btn
