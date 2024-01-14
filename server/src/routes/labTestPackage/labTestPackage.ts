import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import LabTestPackage from "../../model/labTestPackage.model";

const router = express.Router();

router.get("/api/labTestPackage", async (req: Request, res: Response) => {
  try {
    const response = await LabTestPackage.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as labTestPackage };
