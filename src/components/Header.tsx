import {PlusIcon} from "@heroicons/react/24/outline"
import Btn from "./Btn"

type THeader = {
  text: string
  btnText: string
  btnIcon: JSX.Element
}
function Header({text, btnText, btnIcon}: THeader) {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{text}</h1>
        <Btn variant="gradient" text={btnText} icon={btnIcon} />
      </div>
      {/* <Tabs className="mt-5" defaultValue="students">
        <TabsList>
          {tabsData.map((tabs) => (
            <Link key={tabs.id} href={tabs.link}>
              <TabsTrigger className="capitalize" value={tabs.name}>
                {tabs.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs> */}
      <hr className="border-black border-opacity-25 mt-4 mb-10" />
    </div>
  )
}
export default Header
