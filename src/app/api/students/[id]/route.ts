import {NextResponse} from "next/server"
import {deleteStudent, getById, updateStudents} from "../../../../../lib/data"
import {message} from "antd"

export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("students/")[1]
    const student = getById(+id)
    if (!student) {
      return NextResponse.json(
        {message: "ERROR"},
        {
          status: 404,
        }
      )
    }
    return NextResponse.json({message: "OK", student}, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {message: "ERROR"},
      {
        status: 404,
      }
    )
  }
}
export const PUT = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      birthday,
      address,
      group,
      phone,
      userPhoto,
      userPercentage,
    } = await req.json()
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
    deleteStudent(+id)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {message: "ERROR", error},
      {
        status: 500,
      }
    )
  }
}
