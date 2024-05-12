import {Request, Response} from "express" // Express'ten Request ve Response türlerini alın
export default function handler(req: Request, res: Response) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )

  // JSON faylni olish va javob qaytarish
  const data = {key: "value"}
  res.status(200).json(data)
}
