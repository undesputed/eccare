import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import DashboardReducer from "../reducers/dashboard/dashboardSlice";
import LabTestReducer from "../reducers/labTest/labTestSlice";
import GlobelReducer from "../reducers/global/globalSlice";
import PatientReducer from "../reducers/patient/patientSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    labTest: LabTestReducer,
    global: GlobelReducer,
    patient: PatientReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
