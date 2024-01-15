import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DashboardType } from "./dashboard";
import { ec_care_patient } from "../../entity/ec_care_patient";
import { createPatient } from "../../api/patientAPI";
import ec_care_patientLabTest from "../../entity/ec_care_patientLabTest";
import { createPatientLabTest } from "../../api/patientLabTestAPI";
import ec_care_patientLabTestField from "../../entity/ec_care_patientLabTestField";
import { createPatientLabTestField } from "../../api/patientLabTestField";
import { createXrayTest, getAllXrayTest } from "../../api/xrayTestAPI";
import ec_care_xrayTest from "../../entity/ec_care_xrayTest";
import { createPatientXrayTest } from "../../api/patientXrayTestAPI";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";

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
    created_at: null,
    updated_at: null,
  },
  patientLabTest: [],
  selectedLabTest: [],
  xrayTests: [],
  selectedXrayTests: [],
  patientXrayTests: [],
  isModalOpen: false,
  isError: false,
  status: "idle",
  error: null,
};

export const fetchAllXrayTest = createAsyncThunk(
  "dashboard/fetchAllXrayTest",
  async () => {
    const response = await getAllXrayTest();
    return response;
  }
);

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

export const saveXrayTest = createAsyncThunk(
  "dashboard/saveXrayTest",
  async (xrayTest: ec_care_xrayTest) => {
    const response = await createXrayTest(xrayTest);
    return response;
  }
);

export const savePatientXrayTest = createAsyncThunk(
  "dashboard/savePatientXrayTest",
  async (newPatientXrayTest: ec_care_patientXrayTest) => {
    const response = await createPatientXrayTest(newPatientXrayTest);
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
        created_at: null,
        updated_at: null,
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
        created_at: null,
        updated_at: null,
      };
      state.patientLabTest = [];
      state.selectedLabTest = [];
      state.selectedXrayTests = [];
    },
    setModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setSelectedLabTest: (state, action) => {
      state.selectedLabTest = action.payload;
    },
    setSelectedXrayTests: (state, action) => {
      state.selectedXrayTests = action.payload;
    },
    setPatientXrayTests: (state, action) => {
      state.patientXrayTests = action.payload;
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
      })
      .addCase(saveXrayTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveXrayTest.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(saveXrayTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchAllXrayTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllXrayTest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.xrayTests = action.payload;
      })
      .addCase(fetchAllXrayTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(savePatientXrayTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(savePatientXrayTest.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(savePatientXrayTest.rejected, (state) => {
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
  setSelectedXrayTests,
  setPatientXrayTests,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
