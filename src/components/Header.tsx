import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {FaPlus} from "react-icons/fa"
import Btn from "./Btn"
import {tabsData} from "@/utils/utils"
import Link from "next/link"
function Header() {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Students</h1>
        <Btn variant="gradient" text="ADD STUDENT" icon={<FaPlus />} />
      </div>
      <Tabs className="mt-5" defaultValue="students">
        <TabsList>
          {tabsData.map((tabs) => (
            <TabsTrigger className="capitalize" key={tabs.id} value={tabs.name}>
              <Link href={tabs.link}>{tabs.name}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <hr className="border-black border-opacity-25 mt-4 mb-10" />
    </div>
  )
}
export default Header
