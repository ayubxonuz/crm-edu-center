"use client"
import {
  toggleAddStudentFunc,
  toggleFilterFunc,
} from "@/lib/features/toggleSlice"
import {RootState} from "@/lib/store"
import {FunnelIcon} from "@heroicons/react/24/outline"
import {Button} from "antd"
import {useDispatch, useSelector} from "react-redux"
type THeader = {
  text: string
  btnText: string
  btnIcon: JSX.Element
}
function Header({text, btnText, btnIcon}: THeader) {
  const dispatch = useDispatch()
  const {toggleFilterValue} = useSelector((store: RootState) => store.dataSlice)

  return (
    <div className="w-full mt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{text}</h1>
        <div className="flex gap-x-3">
          <Button
            onClick={() => dispatch(toggleFilterFunc())}
            type={toggleFilterValue ? "default" : "primary"}
            size="large"
            danger={toggleFilterValue}
            className="flex items-center"
            icon={toggleFilterValue || <FunnelIcon width={21} height={21} />}
          >
            {toggleFilterValue ? "CANCEL" : "FILTER"}
          </Button>
          <Button
            type={"primary"}
            size="large"
            onClick={() => dispatch(toggleAddStudentFunc())}
            className="flex items-center"
            icon={btnIcon}
          >
            {btnText}
          </Button>
        </div>
      </div>
      <hr className="border-black border-opacity-25 mt-4 mb-10" />
    </div>
  )
}
export default Header
