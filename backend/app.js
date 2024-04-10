import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { port } from "./Config/config.js";
import connectToDatabase from "./Connect-DB/ConnectDB.js";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json());

//limits the data size you can send to 50mb
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Connect to the database
connectToDatabase();

export default app;
