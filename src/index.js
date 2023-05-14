/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import ebayRouter from "./routers/ebay.router.js";

dotenv.config();

const { PORT_APP } = process.env;

const app = express();
const router = express.Router();
const port = PORT_APP || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.json("welcome to api v1");
});
app.use('/', router);
app.use("/api/ebay", ebayRouter());

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
