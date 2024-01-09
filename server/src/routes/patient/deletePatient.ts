import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.delete("/api/patient/:id", async (req: Request, res: Response) => {
  try {
    const patientId: any = req.params.id;
    const response = await Patient.delete(patientId);
    res.status(201).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as deletePatient };
