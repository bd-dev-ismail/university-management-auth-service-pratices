import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

//using cors
app.use(cors());

//paser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Server Working Successfully!");
});

export default app;
