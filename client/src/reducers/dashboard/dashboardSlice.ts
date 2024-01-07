import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DashboardType } from "./dashboard";
import { ec_care_patient } from "../../entity/ec_care_patient";
import { createPatient } from "../../api/patientAPI";
import ec_care_patientLabTest from "../../entity/ec_care_patientLabTest";
import { createPatientLabTest } from "../../api/patientLabTestAPI";
import ec_care_patientLabTestField from "../../entity/ec_care_patientLabTestField";
import { createPatientLabTestField } from "../../api/patientLabTestField";

const initialState: DashboardType = {
  patients: [],
  patientInfo: {
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
  selectedLabTest: [],
  isModalOpen: false,
  isError: false,
  status: "idle",
  error: null,
};

export const savePatient = createAsyncThunk(
  "dashboard/savePatient",
  async (newPatient: ec_care_patient) => {
    const response = await createPatient(newPatient);
    return response;
  }
);

export const savePatientLabTest = createAsyncThunk(
  "dashboard/savePatientLabTest",
  async (newPatientLabTest: ec_care_patientLabTest) => {
    const response = await createPatientLabTest(newPatientLabTest);
    return response;
  }
);

export const savePatientLabTestField = createAsyncThunk(
  "dashboard/savePatientLabTestField",
  async (newPatientLabTestField: ec_care_patientLabTestField) => {
    const response = await createPatientLabTestField(newPatientLabTestField);
    return response;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setPatientInfo: (state, action) => {
      state.patientInfo = {
        ...state.patientInfo,
        [action.payload.name]: action.payload.value,
      };
    },
    clearFields: (state) => {
      state.patientInfo = {
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
      };
    },
    setAge: (state, action) => {
      state.patientInfo.age = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setPatientLabTest: (state, action) => {
      state.patientLabTest = action.payload;
    },
    clean: (state) => {
      state.patientInfo = {
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
      };
      state.patientLabTest = [];
    },
    setModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setSelectedLabTest: (state, action) => {
      state.selectedLabTest = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(savePatient.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(savePatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patients.push(action.payload);
      })
      .addCase(savePatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(savePatientLabTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(savePatientLabTest.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(savePatientLabTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(savePatientLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(savePatientLabTestField.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(savePatientLabTestField.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  setPatientInfo,
  clearFields,
  setAge,
  setError,
  setPatientLabTest,
  clean,
  setModal,
  setSelectedLabTest,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
