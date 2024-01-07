import express, { Request, Response } from "express";
import { DatabaseQueryError } from "../../errors/dbQueryError";
import Field from "../../model/field.model";

const router = express.Router();

router.get("/api/field", async (req: Request, res: Response) => {
  try {
    const response = await Field.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

export { router as field };
