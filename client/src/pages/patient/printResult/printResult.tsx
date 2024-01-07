import React, { useEffect, useRef } from "react";
import PrintResultComponent from "../../../views/printResult";
import {
  fetchLabTestByPatient,
  fetchPatientById,
  fetchPatientDetailsById,
  setLoading,
  setMedTech,
  setPatientId,
} from "../../../reducers/patient/patientSlice";
import { useAppDispatch, useAppSelector } from "../../../actions/hooks";
import { RootState } from "../../../app/store";
import { useReactToPrint } from "react-to-print";
import { id } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import {
  openSnackBar,
  setBackDrop,
} from "../../../reducers/global/globalSlice";

const PrintResult = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id: any = searchParams.get("id");
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.patient.loading);
  const componentRef = useRef(null);
  const onBeforeGetContentResolve = React.useRef(null);
  const patient = useAppSelector(
    (state: RootState) => state.patient.patientForm
  );
  const medTech = useAppSelector((state: RootState) => state.patient.medTech);
  const paperSize = useAppSelector(
    (state: RootState) => state.patient.paperSize
  );

  const handleOnback = () => {
    navigate(`/patient/detail?id=${id}`);
  };

  const handleOnChangeMedTech = (event: any) => {
    dispatch(setMedTech(event.target.value));
  };

  const handleAfterPrint = React.useCallback(() => {
    console.log("OnAfterPrint called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("onBeforePrint called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    dispatch(setLoading());

    return new Promise((resolve: any) => {
      onBeforeGetContentResolve.current = resolve;
      const open = {
        open: true,
      };
      const close = {
        open: false,
      };
      const snackBar = {
        message: "Print Result Successfull",
        type: "success",
        key: 0,
        field: "",
        open: true,
      };
      dispatch(setBackDrop(open));
      setTimeout(() => {
        dispatch(setLoading());
        resolve();
        dispatch(setBackDrop(close));
        dispatch(openSnackBar(snackBar));
      }, 2000);
    });
  }, [loading]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: patient.fullName,
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });

  const fetchPatientDetails = async () => {
    try {
      dispatch(setPatientId(id));
      await dispatch(fetchPatientById(id));
      await dispatch(fetchLabTestByPatient(id));
      await dispatch(fetchPatientDetailsById(id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatientDetails();
  }, []);
  return (
    <>
      <PrintResultComponent
        handlePrint={handlePrint}
        handleOnback={handleOnback}
        handleOnChangeMedTech={handleOnChangeMedTech}
        componentRef={componentRef}
        patient={patient}
        paperSize={paperSize}
        medTech={medTech}
      />
    </>
  );
};

export default PrintResult;
