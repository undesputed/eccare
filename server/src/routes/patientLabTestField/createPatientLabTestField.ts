import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientLabTestField from "../../model/patientLabTestField.model";

const router = express.Router();

router.post("/api/patientLabTestField", async (req: Request, res: Response) => {
  const { id, lms_patient_labTest_id, lms_labTest_field_id, result } = req.body;

  const newPatientLabTestField = new PatientLabTestField({
    id,
    lms_patient_labTest_id,
    lms_labTest_field_id,
    result,
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createLabTest: any = await PatientLabTestField.create(
      newPatientLabTestField
    );
    newPatientLabTestField.id = createLabTest.insertId;
    res.status(201).send(newPatientLabTestField);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createPatientLabTestFieldField };
