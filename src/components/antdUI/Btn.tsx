import {PencilSquareIcon, PlusIcon} from "@heroicons/react/24/outline"
import {Button} from "antd"
import {ReactNode} from "react"

type BtnType = {
  loading: boolean
  htmlType?: "reset" | "button" | "submit"
  type?: "link" | "text" | "primary" | "default" | "dashed"
  icon?: "add" | "edit"
  children: ReactNode
}

function Btn({children, htmlType, icon, loading, type}: BtnType) {
  return (
    <Button
      loading={loading}
      htmlType={htmlType ?? "button"}
      type={type ?? "primary"}
      size="large"
      className="flex items-center"
      icon={
        icon == "edit" ? (
          <PencilSquareIcon width={21} height={21} />
        ) : (
          <PlusIcon width={21} height={21} />
        )
      }
    >
      {children}
    </Button>
  )
}
export default Btn
