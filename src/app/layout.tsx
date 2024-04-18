import type {Metadata} from "next"
import "./globals.css"
import {Roboto} from "next/font/google"
import SideNavbar from "@/components/SideNavbar"
import Header from "@/components/Header"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "CRM-edu-center",
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
        <SideNavbar />
        <div
          className={`max-container pl-[270px] pr-[30px] ${roboto.className}`}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
