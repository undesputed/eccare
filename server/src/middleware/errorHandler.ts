import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/customError";

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }

  res.send(400).send({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};
