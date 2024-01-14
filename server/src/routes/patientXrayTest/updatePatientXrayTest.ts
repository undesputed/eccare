import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientXrayTest from "../../model/patientXrayTest.model";

const router = express.Router();

router.put("/api/patientXrayTest", (req: Request, res: Response) => {
  req.body?.map(async (d: any) => {
    const { id, lms_patient_id, lms_xrayTest_id, result, idNum, description } =
      d;

    const updatePatient = new PatientXrayTest({
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
      const update = await PatientXrayTest.update(updatePatient);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  });
  res.status(201).send("Patient Xray Updated Sucessfully!!!");
});

export { router as updatePatientXrayTest };
