import React, { useEffect, useRef } from "react";
import { Container, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/header";
import DashboardComponent from "../../views/dashboard";
import { useAppDispatch, useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";
import {
  clean,
  clearFields,
  savePatient,
  savePatientLabTest,
  savePatientLabTestField,
  savePatientXrayTest,
  setAge,
  setError,
  setModal,
  setPatientInfo,
  setPatientLabTest,
  setPatientXrayTests,
  setSelectedLabTest,
  setSelectedXrayTests,
} from "../../reducers/dashboard/dashboardSlice";
import ec_care_patientLabTest from "../../entity/ec_care_patientLabTest";
import { useNavigate } from "react-router-dom";
import ec_care_patientLabTestField from "../../entity/ec_care_patientLabTestField";
import ec_care_labTest_field from "../../entity/ec_care_labTestField";
import {
  fetchAllPatient,
  openSnackBar,
} from "../../reducers/global/globalSlice";
import ec_care_labTest from "../../entity/ec_care_labTest";
import ec_care_xrayTest from "../../entity/ec_care_xrayTest";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const patient = useAppSelector(
    (state: RootState) => state.dashboard.patientInfo
  );
  const patientLabTest = useAppSelector(
    (state: RootState) => state.dashboard.patientLabTest
  );
  const labTestField = useAppSelector(
    (state: RootState) => state.labTest.labTestField
  );
  const labTests = useAppSelector((state: RootState) => state.labTest.labTests);
  const isError = useAppSelector((state: RootState) => state.dashboard.isError);
  const openModal = useAppSelector(
    (state: RootState) => state.dashboard.isModalOpen
  );
  const selectedLabTest = useAppSelector(
    (state: RootState) => state.dashboard.selectedLabTest
  );
  const xrayTests = useAppSelector(
    (state: RootState) => state.dashboard.xrayTests
  );
  const patientXrayTest = useAppSelector(
    (state: RootState) => state.dashboard.patientXrayTests
  );
  const selectedXrayTests = useAppSelector(
    (state: RootState) => state.dashboard.selectedXrayTests
  );

  const fullNameRef = useRef<HTMLInputElement>();
  const dateOfVisitRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const genderRef = useRef<HTMLInputElement>();
  const birthdayRef = useRef<HTMLInputElement>();
  const ageRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();
  const companyRef = useRef<HTMLInputElement>();
  const hmoRef = useRef<HTMLInputElement>();
  const docRef = useRef<HTMLInputElement>();

  const handleModal = () => {
    dispatch(setModal());
  };

  const handleKeyDown = (
    event: any,
    nextInputRef: React.RefObject<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      nextInputRef.current?.focus();
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

  const handleClearFields = () => {
    dispatch(clearFields());
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

  const handleOnSelect = (selection: any) => {
    let params: ec_care_patientLabTest[] = [];
    let labTestsParams: ec_care_labTest[] = [];
    selection?.map((d) => {
      const newParams = {
        id: null,
        lms_patient_id: null,
        lms_labTest_id: d,
        status: null,
        created_at: null,
        updated_at: null,
      };

      const findLabTest: any = labTests.find((e: any) => e.id === d);
      labTestsParams.push(findLabTest);
      params.push(newParams);
    });
    dispatch(setSelectedLabTest(labTestsParams));
    dispatch(setPatientLabTest(params));
  };

  const handleOnSelectXrayTest = (selection: any) => {
    let patientParams: ec_care_patientXrayTest[] = [];
    let selectedXrayTest: ec_care_xrayTest[] = [];
    selection?.map((d) => {
      const newParams: ec_care_patientXrayTest = {
        id: null,
        lms_patient_id: null,
        lms_xrayTest_id: d,
        result: "NORMAL",
        idNum: generateIdNum(d),
        description: `PA view of the chest reveals the lungs are clear.
        Pulmonary structure is and shows vascular markings.
        The mediastinum is centered and of normal width.
        The tracheal air shadow is midline.
        The cardiac size and configuration are within normal
        limits.
        Both hemidiaphragms and costophrenic angles are sharp
        and intact.
        The visualized osseous thoracic cage shows no bony
        abnormality.`,
        testDate: new Date(),
        status: 0,
        created_at: null,
        updated_at: null,
      };

      const findXrayTest = xrayTests.find((e: any) => e.id === d);
      patientParams.push(newParams);
      selectedXrayTest.push(findXrayTest);
    });

    dispatch(setSelectedXrayTests(selectedXrayTest));
    dispatch(setPatientXrayTests(patientParams));
  };

  const generateIdNum = (id: number) => {
    const getDay = new Date(patient.dateOfVisit);
    const year = getDay.getUTCFullYear();
    const month = getDay.getUTCMonth() + 1;
    const day = getDay.getUTCDate();
    return month + "" + day + "" + year + "" + id;
  };

  const handlePreview = async () => {
    const onErrorParams = {
      message: "",
      type: "Error",
      key: 0,
      field: "",
      open: true,
    };
    if (patient.fullName === null || patient.fullName === "") {
      onErrorParams.message = "FullName field is Required!!!";
      dispatch(openSnackBar(onErrorParams));
      dispatch(setError(true));
      return;
    }
    if (patientLabTest.length === 0 && selectedXrayTests.length === 0) {
      onErrorParams.message = "Please Select Tests!!!";
      dispatch(openSnackBar(onErrorParams));
      return;
    }
    onErrorParams.type = "success";
    dispatch(openSnackBar(onErrorParams));
    dispatch(setError(false));
    dispatch(setModal());
  };

  const handleSubmit = async () => {
    try {
      const res: any = await dispatch(savePatient(patient));
      if (res.type === "dashboard/savePatient/fulfilled") {
        const patientXray = patientXrayTest?.map((item: any) => {
          return { ...item, lms_patient_id: res.payload.id };
        });
        const updatedPatientTestField = patientLabTest?.map((d: any) => {
          return { ...d, lms_patient_id: res.payload.id };
        });
        // Save into lms_patient_xrayTest
        patientXray.map(async (d: ec_care_patientXrayTest) => {
          await dispatch(savePatientXrayTest(d));
        });

        // Save into lms_patient_labTest
        updatedPatientTestField.map(async (d: ec_care_patientLabTest) => {
          const response: any = await dispatch(savePatientLabTest(d));
          if (response.type === "dashboard/savePatientLabTest/fulfilled") {
            const findLabTestField: any = labTestField.filter(
              (item) => item.lms_labTest_id === d.lms_labTest_id
            );
            findLabTestField.map(async (i) => {
              const par: ec_care_patientLabTestField = {
                id: null,
                lms_patient_labTest_id: response.payload.id,
                lms_labTest_field_id: i.id,
                result: null,
                status: null,
                created_at: null,
                updated_at: null,
              };
              await dispatch(savePatientLabTestField(par));
            });
          }
        });
        alert("New Patient Added!!!");
        await dispatch(fetchAllPatient());
        dispatch(clean());
        navigate("/patient");
      }
    } catch (err) {
      console.log("Error Saving New Patient.. ", err);
    }
  };

  return (
    <>
      <DashboardComponent
        handleOnChange={handleOnChange}
        handlePreview={handlePreview}
        handleKeyDown={handleKeyDown}
        handleClearFields={handleClearFields}
        handleOnSelect={handleOnSelect}
        handleModal={handleModal}
        handleModalSubmit={handleSubmit}
        handleOnSelectXrayTest={handleOnSelectXrayTest}
        selectedXrayTests={selectedXrayTests}
        xrayTests={xrayTests}
        selectedLabTest={selectedLabTest}
        labTests={labTests}
        patientLabTest={patientLabTest}
        patientInfo={patient}
        fullNameRef={fullNameRef}
        dateOfVisitRef={dateOfVisitRef}
        emailRef={emailRef}
        genderRef={genderRef}
        birthdayRef={birthdayRef}
        ageRef={ageRef}
        phoneRef={phoneRef}
        companyRef={companyRef}
        hmoRef={hmoRef}
        docRef={docRef}
        isError={isError}
        openModal={openModal}
      />
    </>
  );
};

export default Dashboard;
