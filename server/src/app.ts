import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { NotFoundError } from "./errors/notFoundError";
import { ErrorHandler } from "./middleware/errorHandler";
import { createPatient } from "./routes/patient/createPatient";
import { createField } from "./routes/field/createField";
import { createLabTest } from "./routes/labTest/createLabTest";
import { createPatientLabTest } from "./routes/patientLabTest/createPatientLabTest";
import { createPatientLabTestFieldField } from "./routes/patientLabTestField/createPatientLabTestField";
import { createPatientLabTestFieldFieldResult } from "./routes/patientLabTestFieldResult/createPatientLabtestFieldResult";
import { field } from "./routes/field/field";
import { labTest } from "./routes/labTest/labTest";
import { createLabTestField } from "./routes/labTestField/createLabTestField";
import { labTestField } from "./routes/labTestField/labTestField";
import { patient } from "./routes/patient/patient";
import { patientLabTest } from "./routes/patientLabTest/patientLabTest";
import { patientLabTestField } from "./routes/patientLabTestField/patientLabTestField";
import { updatePatientLabTestField } from "./routes/patientLabTestField/updatePatientLabTestField";
import { deletePatientLabTestField } from "./routes/patientLabTestField/deletePatientLabTestField";
import { deletePatientLabTest } from "./routes/patientLabTest/deletePatientLabTest";
import { updatePatient } from "./routes/patient/updatePatient";
import { deletePatient } from "./routes/patient/deletePatient";

const app = express();
var corsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(json());
app.use(cors(corsOptions));

// Lists all the Create Routes
app.use(createPatient);
app.use(createField);
app.use(createLabTest);
app.use(createLabTestField);
app.use(createPatientLabTest);
app.use(createPatientLabTestFieldField);
app.use(createPatientLabTestFieldFieldResult);

// List all Retrieve Routes
app.use(patient);
app.use(field);
app.use(labTest);
app.use(labTestField);
app.use(patientLabTest);
app.use(patientLabTestField);

// List all the Update Routes
app.use(updatePatientLabTestField);
app.use(updatePatient);

// List all the Delete Routes
app.use(deletePatientLabTest);
app.use(deletePatientLabTestField);
app.use(deletePatient);

app.all("*", async (req, res) => {
  throw new NotFoundError("Not Found");
});

app.use(ErrorHandler);

export { app };
