import {message} from "antd"
import {NextResponse} from "next/server"
import {addStudents, getStudents} from "../../../../lib/data"

export const GET = async (req: Request, res: Response) => {
  try {
    const students = getStudents()
    return NextResponse.json(
      {message: "OK", students},
      {
        status: 200,
      }
    )
  } catch (error) {
    return NextResponse.json({message: "Error", error}.error, {
      status: 500,
    })
  }
}

export const POST = async (req: Request, res: Response) => {
  const {
    id,
    fullName,
    birthday,
    address,
    group,
    phone,
    userPhoto,
    userPercentage,
  } = await req.json()
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
    return NextResponse.json(
      {message: "OK", student},
      {
        status: 201,
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: "ERROR",
        error,
      },
      {status: 500}
    )
  }
}
