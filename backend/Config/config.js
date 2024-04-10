import dotenv from "dotenv";
dotenv.config();

const db = process.env.MONGODB_URI;
const port = process.env.PORT;

export { db, port };
