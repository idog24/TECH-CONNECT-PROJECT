import { db } from "../Config/config.js";
import mongoose from "mongoose";

export default async function connectToDatabase() {
  mongoose
    .connect(db)
    .then(() => console.log("Mongoose connected to UsersDB"))
    .catch((err) => console.error("Mongoose connection error:", err));
}
