import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {tabsData} from "@/utils/utils"
import Link from "next/link"
function Header() {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Students</h1>
      </div>
      <Tabs className="mt-5" defaultValue="students">
        <TabsList>
          {tabsData.map((tabs) => (
            <Link key={tabs.id} href={tabs.link}>
              <TabsTrigger className="capitalize" value={tabs.name}>
                {tabs.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
      <hr className="border-black border-opacity-25 mt-4 mb-10" />
    </div>
  )
}
export default Header
