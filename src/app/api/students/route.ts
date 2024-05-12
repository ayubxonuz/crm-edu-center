import {addStudents, getStudents} from "@/utils/data"
import {NextResponse} from "next/server"

export const GET = async () => {
  try {
    const students = getStudents()
    return NextResponse.json(students)
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
export const POST = async (req: Request, res: Response) => {
  const {
    address,
    birthday,
    fullName,
    group,
    id,
    phone,
    userPercentage,
    userPhoto,
  }: IStudents = await req.json()
  try {
    const student = {
      id,
      fullName,
      birthday,
      address,
      group,
      phone,
      userPhoto,
      userPercentage,
    }
    addStudents(student)
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
