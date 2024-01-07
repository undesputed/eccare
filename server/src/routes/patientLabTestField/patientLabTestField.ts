import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientLabTestField from "../../model/patientLabTestField.model";

const router = express.Router();

router.get(
  "/api/patientLabTestField/:patientId/:testId",
  async (req: Request, res: Response) => {
    try {
      const patientId: any = req.params.patientId;
      const testId: any = req.params.testId;
      const response = await PatientLabTestField.selectByPatientId(
        patientId,
        testId
      );
      res.status(200).send(response);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as patientLabTestField };
