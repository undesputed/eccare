import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientLabTest from "../../model/patientLabTest.model";

const router = express.Router();

router.get("/api/patientLabTest/:id", async (req: Request, res: Response) => {
  try {
    const id: any = req.params.id;
    const response = await PatientLabTest.selectByPatientId(id);
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get(
  "/api/patientLabTest/:patientId/:labTestId",
  async (req: Request, res: Response) => {
    try {
      const patientId: any = req.params.patientId;
      const labTestId: any = req.params.labTestId;
      const response = await PatientLabTest.selectByPatientLabTest(
        patientId,
        labTestId
      );
      res.status(200).send(response);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as patientLabTest };
