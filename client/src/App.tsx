import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import { CssBaseline } from "@mui/material";
import ThemeProviderWrapper from "./components/theme/ThemeProvider";
import { useAppDispatch, useAppSelector } from "./actions/hooks";
import {
  fetchAllField,
  fetchAllLabTestField,
  fetchLabTests,
} from "./reducers/labTest/labTestSlice";
import {
  fetchAllMedCert,
  fetchAllPatient,
  openSnackBar,
  setBackDrop,
} from "./reducers/global/globalSlice";
import SnackBarComponent from "./components/Snackbar/SnackBar";
import BackDropComponent from "./components/Backdrop/Backdrop";
import { fetchAllXrayTest } from "./reducers/dashboard/dashboardSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const content = useRoutes(routes);

  const handleClose = () => {
    const errorParams = {
      message: "",
      type: "",
      key: 0,
      field: "",
      open: false,
    };
    dispatch(openSnackBar(errorParams));
  };

  const handleCloseBack = () => {
    const backDropPrarams = {
      open: true,
    };
    dispatch(setBackDrop(backDropPrarams));
  };

  useEffect(() => {
    const getAllFields = async () => {
      try {
        await dispatch(fetchAllField());
      } catch (err) {
        console.log("Error Retreiving all Fields", err);
      }
    };

    const getAllLabTests = async () => {
      try {
        await dispatch(fetchLabTests());
      } catch (err) {
        console.log("Error Retrieving All Lab Tests", err);
      }
    };

    const getAllLabTestField = async () => {
      try {
        await dispatch(fetchAllLabTestField());
      } catch (err) {
        console.log("Error Retrieving All Lab Test Fields", err);
      }
    };

    const getAllPatient = async () => {
      try {
        await dispatch(fetchAllPatient());
      } catch (err) {
        console.log("Error Retrieving All Patient!!", err);
      }
    };

    const getAllXrayTests = async () => {
      try {
        await dispatch(fetchAllXrayTest());
      } catch (err) {
        console.log("Error Retrieving All Patient!!", err);
      }
    };

    const getAllMedCerts = async () => {
      try {
        await dispatch(fetchAllMedCert());
      } catch (err) {
        console.log("Error Retrieving All Patient!!", err);
      }
    };

    getAllFields();
    getAllLabTests();
    getAllLabTestField();
    getAllPatient();
    getAllXrayTests();
    getAllMedCerts();
  }, []);

  return (
    <>
      <ThemeProviderWrapper>
        <SnackBarComponent handleClose={handleClose} />
        <BackDropComponent handleClose={handleCloseBack} />
        <CssBaseline />
        {content}
      </ThemeProviderWrapper>
    </>
  );
};

export default App;
