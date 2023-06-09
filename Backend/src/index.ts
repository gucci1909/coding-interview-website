import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();
const PORT: number = Number(process.env.PORT) || 8000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());


app.get("/", async (req, res) => {
    res.send("hello world!");
    
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}!`);
});