import mongoose, {Schema} from "mongoose"

const lessonsSchema = new Schema(
  {
    id: Number,
    lessonName: String,
    language: String,
    title: String,
    videoLink: String,
    level: String,
  },
  {
    timestamps: true,
  }
)

const Lessons =
  mongoose.models.Lessons || mongoose.model("Lessons", lessonsSchema)

export default Lessons
