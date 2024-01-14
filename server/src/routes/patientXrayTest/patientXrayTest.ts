import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import PatientXrayTest from "../../model/patientXrayTest.model";

const router = express.Router();

router.get("/api/patientXrayTest", async (req: Request, res: Response) => {
  try {
    const response = await PatientXrayTest.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get(
  "/api/patientXrayTest/:patientId",
  async (req: Request, res: Response) => {
    try {
      const patientId: any = req.params.patientId;
      const response = await PatientXrayTest.selectByPatient(patientId);
      res.status(200).send(response);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as patientXrayTest };
