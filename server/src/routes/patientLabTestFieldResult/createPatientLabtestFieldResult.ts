import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientLabTestFieldResult from "../../model/patientLabTestFieldResult.model";

const router = express.Router();

router.post(
  "/api/patientLabTestFieldResult",
  async (req: Request, res: Response) => {
    const { id, lms_patient_labTest_field_id, result } = req.body;

    const newPatientLabTestFieldResult = new PatientLabTestFieldResult({
      id,
      lms_patient_labTest_field_id,
      result,
      status: 0,
      created_at: new Date(),
      updated_at: null,
    });

    try {
      const createLabTest: any = await PatientLabTestFieldResult.create(
        newPatientLabTestFieldResult
      );
      newPatientLabTestFieldResult.id = createLabTest.insertId;
      res.status(201).send(newPatientLabTestFieldResult);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as createPatientLabTestFieldFieldResult };
