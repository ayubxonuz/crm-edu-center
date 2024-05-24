import mongoose, {Schema} from "mongoose"

const studentsSchema = new Schema(
  {
    id: Number,
    fullName: String,
    birthday: String,
    address: String,
    group: String,
    personalPhone: String,
    homePhone: String,
    certificate: String,
    graduated: String,
    userPercentage: Number,
    userPhoto: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Students =
  mongoose.models.Students || mongoose.model("Students", studentsSchema)

export default Students
