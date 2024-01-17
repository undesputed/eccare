import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GlobalType } from "./global";
import { getAllpatient } from "../../api/patientAPI";
import { getAllMedCert } from "../../api/medCertAPI";

const initialState: GlobalType = {
  patient: [],
  medCerts: [],
  isOpenAlert: false,
  isSuccess: false,
  status: "idle",
  error: null,
  snackBar: {
    message: "",
    type: "",
    key: 0,
    field: "",
    open: false,
  },
  backDrop: {
    open: false,
  },
};

export const fetchAllPatient = createAsyncThunk(
  "global/fetchAllPatient",
  async () => {
    const response = await getAllpatient();
    return response;
  }
);

export const fetchAllMedCert = createAsyncThunk(
  "global/fetchAllMedCert",
  async () => {
    const response = await getAllMedCert();
    return response;
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    seItOpenAler: (state, action) => {
      state.isOpenAlert = action.payload;
    },
    openSnackBar: (state, action) => {
      state.snackBar = action.payload;
    },
    setBackDrop: (state, action) => {
      state.backDrop = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patient = action.payload;
      })
      .addCase(fetchAllPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchAllMedCert.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMedCert.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.medCerts = action.payload;
      })
      .addCase(fetchAllMedCert.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { seItOpenAler, openSnackBar, setBackDrop } = globalSlice.actions;
export default globalSlice.reducer;
