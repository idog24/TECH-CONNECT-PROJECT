import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json());

//limits the data size you can send to 50mb
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
