import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
})

const User = mongoose.model("User", userSchema)
export default User