import mongoose, {Schema} from "mongoose"

const studentsSchema = new Schema(
  {
    id: Number,
    address: String,
    birthday: String,
    fullName: String,
    group: String,
    phone: String,
    userPercentage: Number,
    userPhoto: String,
  },
  {
    timestamps: true,
  }
)

const Students =
  mongoose.models.Students || mongoose.model("Students", studentsSchema)

export default Students
