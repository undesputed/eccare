import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientLabTest from "../../model/patientLabTest.model";

const router = express.Router();

router.post("/api/patientLabTest", async (req: Request, res: Response) => {
  const { id, lms_patient_id, lms_labTest_id, status, created_at, updated_at } =
    req.body;

  const newPatientLabTest = new PatientLabTest({
    id,
    lms_patient_id,
    lms_labTest_id,
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createLabTest: any = await PatientLabTest.create(newPatientLabTest);
    newPatientLabTest.id = createLabTest.insertId;
    res.status(201).send(newPatientLabTest);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createPatientLabTest };
