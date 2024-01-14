import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import XrayTest from "../../model/xrayTest.model";

const router = express.Router();

router.post("/api/xrayTest", async (req: Request, res: Response) => {
  const { id, name, description, price, type } = req.body;

  const newXrayTest = new XrayTest({
    id,
    name,
    description,
    price,
    type,
    status: 0,
    created_at: new Date(),
    updated_at: null,
  });

  try {
    const createXrayTest: any = await XrayTest.create(newXrayTest);
    newXrayTest.id = createXrayTest.insertId;
    res.status(201).send(newXrayTest);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as createXrayTest };
