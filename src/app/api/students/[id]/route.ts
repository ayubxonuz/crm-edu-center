import {deleteStudents, getById, updateStudents} from "@/utils/studentsDB"
import {NextResponse} from "next/server"

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("students/")[1]
    const student = getById(+id)
    if (!student) {
      return NextResponse.json(
        {message: "ERROR", student},
        {
          status: 404,
        }
      )
    }
    return NextResponse.json(
      {message: "OK", student},
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
export const DELETE = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("students/")[1]
    deleteStudents(+id)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}
export const PUT = async (req: Request) => {
  try {
    const {
      fullName,
      birthday,
      address,
      group,
      phone,
      userPercentage,
      userPhoto,
    }: IStudents = await req.json()
    const id = req.url.split("students/")[1]
    updateStudents(
      +id,
      fullName,
      birthday,
      address,
      group,
      phone,
      userPhoto,
      userPercentage
    )
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {}
}
