import type {Metadata} from "next"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import SideNavbar from "@/components/SideNavbar"
import {ReduxProvider} from "@/provider/ReduxProvider"

export const metadata: Metadata = {
  title: "CRM-admin-panel",
  description: "This is admin panel",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NextTopLoader />
          <SideNavbar />
          <div className={`max-container pl-[270px] pr-[30px] `}>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
