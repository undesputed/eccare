import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import LabTestField from "../../model/labTestField.model";

const router = express.Router();

router.get("/api/labTestField", async (req: Request, res: Response) => {
  try {
    const response = await LabTestField.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as labTestField };
