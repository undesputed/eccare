import express, { Request, Response } from "express";
import XrayTest from "../../model/xrayTest.model";
import { DatabaseQueryError } from "../../errors/dbQueryError";

const router = express.Router();

router.get("/api/xrayTest", async (req: Request, res: Response) => {
  try {
    const response = await XrayTest.select();
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get("/api/xrayTest/:patientId", async (req: Request, res: Response) => {
  try {
    const patientId: any = req.params.patientId;
    const response = await XrayTest.selectByPatient(patientId);
    res.status(200).send(response);
  } catch (err) {
    throw new DatabaseQueryError("Something went wrong!!!");
  }
});

router.get(
  "/api/xrayTest/notByPatient/:patientId",
  async (req: Request, res: Response) => {
    try {
      const patientId: any = req.params.patientId;
      const response = await XrayTest.selectNotByPatient(patientId);
      res.status(200).send(response);
    } catch (err) {
      throw new DatabaseQueryError("Something went wrong!!!");
    }
  }
);

export { router as xrayTest };
