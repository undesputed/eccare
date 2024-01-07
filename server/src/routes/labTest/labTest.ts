import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import LabTest from "../../model/labTest.model";

const router = express.Router();

router.get("/api/labTest", async (req: Request, res: Response) => {
  try {
    const response = await LabTest.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/labTest/:id", async (req: Request, res: Response) => {
  try {
    const id: number | string = req.params.id;
    const response = await LabTest.selectNotByPatient(id);
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as labTest };
