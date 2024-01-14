import express, { Request, Response } from "express";
import PatientXrayTest from "../../model/patientXrayTest.model";

const router = express.Router();

router.delete(
  "/api/patientXrayTest/:id",
  async (req: Request, res: Response) => {
    try {
      const id: any = req.params.id;
      const response = await PatientXrayTest.delete(id);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export { router as deletePatientXrayTest };
