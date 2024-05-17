import mongoose from "mongoose"

const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      throw new Error("MongoDB URI is not defined")
    }

    await mongoose.connect(uri)
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

export default connectMongoDB
