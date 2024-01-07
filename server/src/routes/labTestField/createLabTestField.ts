import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import LabTestField from "../../model/labTestField.model";

const router = express.Router();

router.post("/api/labTestField", async (req: Request, res: Response) => {
  const { id, lms_labTest_id, lms_field_id, orderNum } = req.body;

  const newLabTestField = new LabTestField({
    id,
    lms_labTest_id,
    lms_field_id,
    orderNum,
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createLabTest: any = await LabTestField.create(newLabTestField);
    newLabTestField.id = createLabTest.insertId;
    res.status(201).send(newLabTestField);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createLabTestField };
