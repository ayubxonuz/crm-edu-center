import {deleteCategory, updateCategory} from "@/utils/categoryDB"
import {getById} from "@/utils/studentsDB"
import {NextResponse} from "next/server"

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("categorys/")[1]
    const category = getById(+id)
    if (!category) {
      return NextResponse.json(
        {message: "ERROR", category},
        {
          status: 404,
        }
      )
    }
    return NextResponse.json(
      {message: "OK", category},
      {
        status: 200,
      }
    )
  } catch (error) {
    return NextResponse.json(
      {message: "ERROR", error},
      {
        status: 500,
      }
    )
  }
}
export const PUT = async (req: Request) => {
  try {
    const {image, language}: ICategory = await req.json()
    const id = req.url.split("category/")[1]
    updateCategory(+id, image, language)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}
export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("category/")[1]
    deleteCategory(+id)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}
