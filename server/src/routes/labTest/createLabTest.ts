import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import LabTest from "../../model/labTest.model";

const router = express.Router();

router.post("/api/labTest", async (req: Request, res: Response) => {
  const { id, name, description, type, price } = req.body;

  const newLabTest = new LabTest({
    id,
    name,
    description,
    type,
    price,
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createLabTest: any = await LabTest.create(newLabTest);
    newLabTest.id = createLabTest.insertId;
    res.status(201).send(newLabTest);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createLabTest };
