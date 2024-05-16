import {addLesson, getLessons} from "@/utils/lessonsDB"
import {NextResponse} from "next/server"

export const GET = async () => {
  try {
    const lessons = getLessons()
    return NextResponse.json(lessons)
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
  const {id, language, lessonName, level, title, videoLink}: ILessons =
    await req.json()
  try {
    const lesson = {id, language, lessonName, level, title, videoLink}
    addLesson(lesson)
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
