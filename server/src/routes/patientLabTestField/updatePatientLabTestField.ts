import express, { Request, Response } from "express";
import PatientLabTestField from "../../model/patientLabTestField.model";

const router = express.Router();

router.put("/api/patientLabTestField", (req: Request, res: Response) => {
  try {
    req.body?.map(async (d: any) => {
      const id = d.patientFieldId;
      const result = d.result;
      await PatientLabTestField.update(id, result);
    });
    res.status(201).send("Success");
  } catch (err) {
    console.log(err);
  }
});

export { router as updatePatientLabTestField };
