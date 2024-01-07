import express, { Request, Response } from "express";
import PatientLabTestField from "../../model/patientLabTestField.model";

const router = express.Router();

router.delete(
  "/api/patientLabTestField/:labTestId",
  async (req: Request, res: Response) => {
    try {
      const labTestId: any = req.params.labTestId;
      const response = await PatientLabTestField.deleteLabTestField(labTestId);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);
export { router as deletePatientLabTestField };
