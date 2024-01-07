import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { body } from "express-validator";
import { validateRequest } from "../../middleware/validateRequest";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import { DataFound } from "../../data/success";

const router = express.Router();

router.post(
  "/api/patient",
  [body("fullName").notEmpty().withMessage("FullName is required")],
  validateRequest,
  async (req: Request, res: Response) => {
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
    } = req.body;

    const newPatient = new Patient({
      id,
      fullName,
      birthday,
      age,
      gender,
      dateOfVisit,
      email,
      phone,
      company,
      status: 0,
      created_at: new Date(),
      updated_at: null,
    });
    console.log(newPatient);
    try {
      const createPatient: any = await Patient.create(newPatient);
      newPatient.id = createPatient.insertId;
      res.status(201).send(newPatient);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as createPatient };
