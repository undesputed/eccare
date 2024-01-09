import React from "react";
import PatientComponent from "../../views/patient";
import { useAppDispatch, useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";
import { GridRowId } from "@mui/x-data-grid";
import {
  clearFields,
  fetchLabTestByPatient,
  fetchLabTestNotByPatient,
  fetchPatientById,
  fetchPatientDetailsById,
  onUpdateModal,
  removeLabTestByPatient,
  removeLabTestFieldByPatient,
  removePatientById,
  setAge,
  setPatientId,
  setPatientInfo,
  updatePatientInfo,
} from "../../reducers/patient/patientSlice";
import { useNavigate } from "react-router-dom";
import {
  fetchAllPatient,
  openSnackBar,
} from "../../reducers/global/globalSlice";

const Patient = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const patients = useAppSelector((state: RootState) => state.global.patient);
  const patientInfo = useAppSelector(
    (state: RootState) => state.patient.patient
  );
  const updateModal = useAppSelector(
    (state: RootState) => state.patient.patientUpdateModal
  );

  const handleOnDelete = async (id: any) => {
    const confirm = window.confirm(
      "Are you sure you want to Delete this Patient??"
    );
    if (!confirm) {
      return;
    }
    try {
      const onErrorParams = {
        message: "",
        type: "Error",
        key: 0,
        field: "",
        open: true,
      };
      const res: any = await dispatch(removeLabTestFieldByPatient(id));
      if (res.type === "patient/removeLabTestFieldByPatient/fulfilled") {
        await dispatch(removeLabTestByPatient(id));
        await dispatch(removePatientById(id));
        getAllPatient();
        onErrorParams.type = "success";
        onErrorParams.message = "Patient Deleted Successfully!!!";
        dispatch(openSnackBar(onErrorParams));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnEdit = async (patientId: any) => {
    try {
      handleUpdateModal();
      await dispatch(fetchPatientById(patientId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (event: any) => {
    const { value, name } = event.target;
    if (name === "birthday") {
      dispatch(setAge(calculateAge(value)));
    }
    const payload = {
      name: name,
      value: value,
    };
    dispatch(setPatientInfo(payload));
  };

  function calculateAge(dateOfBirth: string | Date | number): number {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }

  const handleUpdateModal = () => {
    dispatch(clearFields());
    dispatch(onUpdateModal());
  };

  const handleModalSubmit = async () => {
    try {
      const onErrorParams = {
        message: "",
        type: "Error",
        key: 0,
        field: "",
        open: true,
      };
      await dispatch(updatePatientInfo(patientInfo));
      getAllPatient();
      onErrorParams.type = "success";
      onErrorParams.message = "Patient Upadated Successfully!!!";
      dispatch(openSnackBar(onErrorParams));
      dispatch(clearFields());
      dispatch(onUpdateModal());
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnSubmit = async () => {
    console.log(patientInfo);
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

  const getAllPatient = async () => {
    try {
      await dispatch(fetchAllPatient());
    } catch (err) {
      console.log("Error Retrieving All Patient!!", err);
    }
  };

  return (
    <>
      <PatientComponent
        handleOnSubmit={handleOnSubmit}
        handleOpenDetail={handleOpenDetail}
        handleUpdateModal={handleUpdateModal}
        handleModalSubmit={handleModalSubmit}
        handleOnEdit={handleOnEdit}
        handleOnChange={handleOnChange}
        handleOnDelete={handleOnDelete}
        patients={patients}
        updateModal={updateModal}
        patientInfo={patientInfo}
      />
    </>
  );
};

export default Patient;
