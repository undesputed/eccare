import express, { Request, Response } from "express";
import Patient from "../../model/patient.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import { PatientForm, Test, TestField } from "../../entity/ec_care_patientForm";
import { patientLabTest } from "../patientLabTest/patientLabTest";
import PatientLabTest from "../../model/patientLabTest.model";
import LabTest from "../../model/labTest.model";
import Field from "../../model/field.model";
import PatientLabTestField from "../../model/patientLabTestField.model";

const router = express.Router();

router.get("/api/patient", async (req: Request, res: Response) => {
  try {
    const response = await Patient.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/patient/:id", async (req: Request, res: Response) => {
  try {
    const id: any = req.params.id;
    const response = await Patient.selectById(id);
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/patient/details/:id", async (req: Request, res: Response) => {
  try {
    const testFields: any = [];
    const id: any = req.params.id;
    const patient: Patient | null = await Patient.selectById(id);
    const labTests: any[] | null = await PatientLabTest.selectByPatientId(id);

    if (labTests) {
      const promises = labTests.map(async (d: any) => {
        const labTestFields: any[] | null =
          await PatientLabTestField.selectByPatientId(id, d.id);

        const fields = {
          ...d,
          labTestFields,
        };
        return fields;
      });

      testFields.push(...(await Promise.all(promises)).flat());
    }
    const patientForm = {
      ...patient,
      testFields,
    };

    res.status(200).send(patientForm);
  } catch (err) {
    throw new DatabaseQueryError("Something weng wrong!!!");
  }
});

export { router as patient };
