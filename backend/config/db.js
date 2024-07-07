import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://arjunspy491:B6n0313r9D5PXyqU@cluster0.vblrebc.mongodb.net/?").then(console.log('DB Connected'))
}
