import React from "react";
import PatientComponent from "../../views/patient";
import { useAppDispatch, useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";
import { GridRowId } from "@mui/x-data-grid";
import {
  fetchLabTestByPatient,
  fetchLabTestNotByPatient,
  fetchPatientById,
  fetchPatientDetailsById,
  setPatientId,
} from "../../reducers/patient/patientSlice";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const patients = useAppSelector((state: RootState) => state.global.patient);

  const handleOnSubmit = () => {
    console.log(patients);
  };

  const handleOpenDetail = async (id: any) => {
    try {
      dispatch(setPatientId(id));
      await dispatch(fetchPatientById(id));
      await dispatch(fetchLabTestByPatient(id));
      await dispatch(fetchPatientDetailsById(id));
      await dispatch(fetchLabTestNotByPatient(id));
      navigate(`/patient/detail?id=${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PatientComponent
        handleOnSubmit={handleOnSubmit}
        handleOpenDetail={handleOpenDetail}
        patients={patients}
      />
    </>
  );
};

export default Patient;
