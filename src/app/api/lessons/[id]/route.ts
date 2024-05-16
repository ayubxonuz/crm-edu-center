import {deleteLesson, getByID, updateLesson} from "@/utils/lessonsDB"
import {NextResponse} from "next/server"

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("lessons/")[1]
    const lesson = getByID(+id)
    if (!lesson) {
      return NextResponse.json(
        {message: "ERROR", lesson},
        {
          status: 404,
        }
      )
    }
    return NextResponse.json(
      {message: "OK", lesson},
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
    const {language, lessonName, level, title, videoLink}: ILessons =
      await req.json()
    const id = req.url.split("lessons/")[1]
    updateLesson(+id, lessonName, language, title, videoLink, level)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("lessons/")[1]
    deleteLesson(+id)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}
