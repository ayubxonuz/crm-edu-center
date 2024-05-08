import type {Metadata} from "next"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import SideNavbar from "@/components/SideNavbar"
import {ReduxProvider} from "@/provider/ReduxProvider"
import {Inter, Montserrat, Roboto} from "next/font/google"

export const metadata: Metadata = {
  title: "CRM-admin-panel",
  description: "This is admin panel",
}

const montserrat = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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
