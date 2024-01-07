import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import Field from "../../model/field.model";

const router = express.Router();

router.post("/api/field", async (req: Request, res: Response) => {
  const {
    id,
    name,
    unit,
    maleRefRange,
    femaleRefRange,
    refRange,
    desirableRefRange,
    borderlineRefRange,
    highRiskRefRange,
    other,
  } = req.body;

  const newField = new Field({
    id,
    name,
    unit,
    maleRefRange,
    femaleRefRange,
    refRange,
    desirableRefRange,
    borderlineRefRange,
    highRiskRefRange,
    other,
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });
  try {
    const createField: any = await Field.create(newField);
    newField.id = createField.insertId;
    res.status(201).send(newField);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createField };
