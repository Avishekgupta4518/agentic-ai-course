import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
