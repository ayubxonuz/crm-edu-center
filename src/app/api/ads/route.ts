import {addAd, getAds} from "@/utils/adsDB"
import {NextResponse} from "next/server"

export const GET = async () => {
  try {
    const ads = getAds()
    return NextResponse.json(ads)
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
  const {id, image}: IAds = await req.json()
  try {
    const ad = {id, image}
    addAd(ad)
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
