import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PatientType } from "./patient";
import { getPatientById, getPatientDetailsById } from "../../api/patientAPI";
import {
  deletePatientLabTest,
  getLabTestByPatient,
  getLabTestByPatientAndTest,
} from "../../api/patientLabTestAPI";
import {
  deletePatientLabTestFIeld,
  getLabTestFieldByPatient,
  updateResult,
} from "../../api/patientLabTestField";
import { C } from "styled-icons/fa-solid";
import { getLabTestNotByPatient } from "../../api/labTestAPI";

const initialState: PatientType = {
  patient: {
    id: null,
    fullName: null,
    birthday: null,
    age: null,
    gender: null,
    dateOfVisit: new Date().toISOString().split("T")[0],
    email: null,
    phone: null,
    company: null,
    status: null,
  },
  patientLabTest: [],
  patientLabTestField: [],
  patientForm: {
    id: null,
    fullName: null,
    birthday: null,
    age: null,
    gender: null,
    dateOfVisit: null,
    email: null,
    phone: null,
    company: null,
    tests: [],
  },
  patientTestsFields: [],
  patientLabTestId: 0,
  labTest: [],
  testId: 0,
  selectedTestField: null,
  patientId: 0,
  paperSize: "legal",
  medTech: 0,
  addTestModal: false,
  loading: false,
  status: "idle",
  error: null,
};

export const fetchPatientById = createAsyncThunk(
  "patient/fetchPatientbyId",
  async (patientId: number) => {
    const response = await getPatientById(patientId);
    return response;
  }
);

export const fetchPatientDetailsById = createAsyncThunk(
  "patient/fetchPatientDetailsById",
  async (patientId: number) => {
    const response = await getPatientDetailsById(patientId);
    return response;
  }
);

export const fetchLabTestByPatient = createAsyncThunk(
  "patient/fetchLabTestByPatient",
  async (patientId: number) => {
    const response = await getLabTestByPatient(patientId);
    return response;
  }
);

export const fetchLabTestFieldByPatient = createAsyncThunk(
  "patient/fetchLabTestFieldByPatient",
  async (data: { patientId: number; testId: number }) => {
    const response = await getLabTestFieldByPatient(
      data.patientId,
      data.testId
    );
    return response;
  }
);

export const fetchLabTestNotByPatient = createAsyncThunk(
  "patient/fetchLabTestNotByPatient",
  async (patientId: number) => {
    const response = await getLabTestNotByPatient(patientId);
    return response;
  }
);

export const fetchLabTestByPatientAndTest = createAsyncThunk(
  "patient/fetchLabTestByPatientAndTest",
  async (params: { patientId: number; labTestId: number }) => {
    const response = await getLabTestByPatientAndTest(
      params.patientId,
      params.labTestId
    );
    return response;
  }
);

export const updatePatientLabTestField = createAsyncThunk(
  "patient/updatePatientLabTestField",
  async (result: any[]) => {
    const response = await updateResult(result);
    return response;
  }
);

export const removePatientLabTestField = createAsyncThunk(
  "patient/removePatientLabTestField",
  async (lms_patient_labTest_id: number) => {
    const response = await deletePatientLabTestFIeld(lms_patient_labTest_id);
    return response;
  }
);

export const removePatientLabTest = createAsyncThunk(
  "patient/removePatientLabTest",
  async (params: { lms_patient_id: number; lms_labTest_id: number }) => {
    const response = await deletePatientLabTest(
      params.lms_patient_id,
      params.lms_labTest_id
    );
    return response;
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {
    setPatientId: (state, action) => {
      state.patientId = action.payload;
    },
    handleOnChangeResult: (state, action) => {
      const findTest: any = state.patientForm.testFields?.find(
        (d: any) => d.id === action.payload.testId
      );
      findTest.labTestFields = action.payload.updatedResults;
      state.patientLabTestField = action.payload.updatedResults;
    },
    setPatientDetails: (state, action) => {
      state.patientLabTestField = action.payload;
    },
    setFieldToPatient: (state, action) => {
      const findTest = state.patientForm.testFields?.find(
        (d: any) => d.id === action.payload.testId
      );
      findTest.labTestFields = action.payload.testFields;
    },
    setTestId: (state, action) => {
      state.testId = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setPaperSize: (state, action) => {
      state.paperSize = action.payload;
    },
    setMedTech: (state, action) => {
      state.medTech = action.payload;
    },
    openAddTestModal: (state) => {
      state.addTestModal = !state.addTestModal;
    },
    addNewTest: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPatientById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatientById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patient = action.payload;
      })
      .addCase(fetchPatientById.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientLabTest = action.payload;
      })
      .addCase(fetchLabTestByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestFieldByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestFieldByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";

        for (var i = 33; i <= 39; i++) {
          const findField = action.payload.find((d) => d.fieldId === i);

          if (findField !== undefined) {
            findField.result = "NONE SEEN";
          }
        }

        state.patientLabTestField = action.payload;
      })
      .addCase(fetchLabTestFieldByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchPatientDetailsById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatientDetailsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientForm = action.payload;
      })
      .addCase(fetchPatientDetailsById.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(updatePatientLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePatientLabTestField.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updatePatientLabTestField.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestNotByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestNotByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.labTest = action.payload;
      })
      .addCase(fetchLabTestNotByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removePatientLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePatientLabTestField.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removePatientLabTestField.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removePatientLabTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePatientLabTest.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removePatientLabTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestByPatientAndTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestByPatientAndTest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientLabTestId = action.payload;
      })
      .addCase(fetchLabTestByPatientAndTest.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  setPatientId,
  handleOnChangeResult,
  setPatientDetails,
  setFieldToPatient,
  setTestId,
  setLoading,
  setPaperSize,
  setMedTech,
  openAddTestModal,
} = patientSlice.actions;

export default patientSlice.reducer;
