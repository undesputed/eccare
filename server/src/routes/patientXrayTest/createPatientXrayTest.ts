import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientXrayTest from "../../model/patientXrayTest.model";

const router = express.Router();

router.post("/api/patientXrayTest", async (req: Request, res: Response) => {
  const { id, lms_patient_id, lms_xrayTest_id, result, idNum, description } =
    req.body;
  const newPatientXrayTest = new PatientXrayTest({
    id,
    lms_patient_id,
    lms_xrayTest_id,
    result,
    idNum,
    description,
    testDate: new Date().toISOString().split("T")[0],
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const patientXrayTest: any = await PatientXrayTest.create(
      newPatientXrayTest
    );
    newPatientXrayTest.id = patientXrayTest.insertId;
    res.status(201).send(newPatientXrayTest);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createPatientXrayTest };
