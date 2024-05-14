import {deleteAd, getById, updateAd} from "@/utils/adsDB"
import {NextResponse} from "next/server"

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("ads/")[1]
    const ad = getById(+id)
    if (!ad) {
      return NextResponse.json(
        {message: "ERROR", ad},
        {
          status: 404,
        }
      )
    }
    return NextResponse.json(
      {message: "OK", ad},
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
    const {image}: IAds = await req.json()
    const id = req.url.split("ads/")[1]
    updateAd(+id, image)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("ads/")[1]
    deleteAd(+id)
    return NextResponse.json({message: "OK"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "ERROR", error}, {status: 500})
  }
}
