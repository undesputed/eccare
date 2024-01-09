import express, { Request, Response } from "express";
import PatientLabTest from "../../model/patientLabTest.model";

const router = express.Router();

router.delete(
  "/api/patientLabTestField/:patientId/:labTestId",
  async (req: Request, res: Response) => {
    try {
      const patientId: any = req.params.patientId;
      const labTestId: any = req.params.labTestId;
      const response = await PatientLabTest.deleteLabTestField(
        patientId,
        labTestId
      );
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

router.delete(
  "/api/deletePatientLabTest/:patientId",
  async (req: Request, res: Response) => {
    try {
      const patientId: any = req.params.patientId;
      const response = await PatientLabTest.deleteLabTestByPatient(patientId);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export { router as deletePatientLabTest };
