import dotenv from "dotenv";
dotenv.config();

export default async function connectToDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongoose connected to UsersDB"))
    .catch((err) => console.error("Mongoose connection error:", err));
}
