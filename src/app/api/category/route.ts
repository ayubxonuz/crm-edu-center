import {addCategory, getCategory} from "@/utils/categoryDB"
import {NextResponse} from "next/server"

export const GET = async () => {
  try {
    const categorys = getCategory()
    return NextResponse.json(categorys)
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      {
        status: 500,
      }
    )
  }
}
export const POST = async (req: Request) => {
  const {id, image, language}: ICategory = await req.json()
  try {
    const category = {id, image, language}
    addCategory(category)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      {
        status: 500,
      }
    )
  }
}
