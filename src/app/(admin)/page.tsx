"use client"
import {useRouter} from "next/navigation"
import Students from "./students/Students"

export default function Home() {
  const router = useRouter()
  const admin = 0
  if (!admin) {
    router.push("/login")
  }
  return <Students />
}
