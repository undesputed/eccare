import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GlobalType } from "./global";
import { getAllpatient } from "../../api/patientAPI";

const initialState: GlobalType = {
  patient: [],
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
      });
  },
});

export const { seItOpenAler, openSnackBar, setBackDrop } = globalSlice.actions;
export default globalSlice.reducer;
