import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.put("/api/patient", async (req: Request, res: Response) => {
  const {
    id,
    fullName,
    birthday,
    age,
    gender,
    dateOfVisit,
    email,
    phone,
    company,
    created_at,
  } = req.body;

  const updatePatient = new Patient({
    id,
    fullName,
    birthday: new Date(birthday).toISOString().split("T")[0],
    age,
    gender,
    dateOfVisit: new Date(dateOfVisit).toISOString().split("T")[0],
    email,
    phone,
    company,
    status: 0,
    created_at: new Date(created_at).toISOString().split("T")[0],
    updated_at: new Date(),
  });

  try {
    const update = await Patient.update(updatePatient);
    res.status(201).send(update);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.put("/api/patient/:patientId", async (req: Request, res: Response) => {
  try {
    const patientId: any = req.params.patientId;
    const update = await Patient.updateStatus(patientId);
    res.status(201).send(update);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as updatePatient };
