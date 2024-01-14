import express, { Request, Response } from "express";
import Package from "../../model/package.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/package", async (req: Request, res: Response) => {
  try {
    const response = await Package.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as pkg };
