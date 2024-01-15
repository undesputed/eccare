import React from "react";
import PatientComponent from "../../views/patient";
import { useAppDispatch, useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";
import { GridRowId } from "@mui/x-data-grid";
import {
  bulkAddPatient,
  clearFields,
  fetchLabTestByPatient,
  fetchLabTestNotByPatient,
  fetchPatientById,
  fetchPatientDetailsById,
  fetchPatientXrayTestsByPatient,
  fetchXrayTestByPatient,
  onUpdateModal,
  removeLabTestByPatient,
  removeLabTestFieldByPatient,
  removePatientById,
  setAge,
  setLoading,
  setPatientId,
  setPatientInfo,
  updatePatientInfo,
} from "../../reducers/patient/patientSlice";
import { useNavigate } from "react-router-dom";
import {
  fetchAllPatient,
  openSnackBar,
  setBackDrop,
} from "../../reducers/global/globalSlice";
import * as XLSX from "xlsx";
import { ec_care_patient } from "../../entity/ec_care_patient";
import {
  savePatient,
  savePatientLabTest,
  savePatientLabTestField,
  savePatientXrayTest,
} from "../../reducers/dashboard/dashboardSlice";
import ec_care_patientLabTest from "../../entity/ec_care_patientLabTest";
import ec_care_patientLabTestField from "../../entity/ec_care_patientLabTestField";

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
  const labTestField = useAppSelector(
    (state: RootState) => state.labTest.labTestField
  );

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

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
      dispatch(setBackDrop(close));
      dispatch(openSnackBar(snackBar));
    }, 2000);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming you have a single sheet in the workbook
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const patientList: ec_care_patient[] = [];
      // Extract data from the sheet
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 2 });
      jsonData.map((d: any) => {
        const patientParams: ec_care_patient = {
          id: null,
          fullName: d.FULLNAME,
          birthday: new Date((d.BIRTHDATE - 1) * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0],
          age: d.AGE ? d.AGE : null,
          gender: d.GENDER ? d.GENDER : null,
          dateOfVisit: new Date().toISOString().split("T")[0],
          email: d.EMAIL ? d.EMAIL : null,
          phone: d.PHONE ? d.PHONE : null,
          company: d.COMPANY ? d.COMPANY : null,
          status: 0,
          created_at: new Date().toISOString().split("T")[0],
          updated_at: null,
        };
        patientList.push(patientParams);
      });

      handleSaveImported(patientList);
    };

    reader.readAsArrayBuffer(file);
  };

  const generateIdNum = (id: number) => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${timestamp}${id}${randomNum}`;
  };

  const handleSaveImported = async (patientList: ec_care_patient[]) => {
    try {
      await dispatch(bulkAddPatient(patientList));
    } catch (err) {
      console.log(err);
    }
    // try {
    //   const labTest = [
    //     {
    //       id: null,
    //       lms_patient_id: null,
    //       lms_labTest_id: 1,
    //       status: null,
    //       created_at: null,
    //       updated_at: null,
    //     },
    //     {
    //       id: null,
    //       lms_patient_id: null,
    //       lms_labTest_id: 2,
    //       status: null,
    //       created_at: null,
    //       updated_at: null,
    //     },
    //     {
    //       id: null,
    //       lms_patient_id: null,
    //       lms_labTest_id: 3,
    //       status: null,
    //       created_at: null,
    //       updated_at: null,
    //     },
    //     {
    //       id: null,
    //       lms_patient_id: null,
    //       lms_labTest_id: 10,
    //       status: null,
    //       created_at: null,
    //       updated_at: null,
    //     },
    //   ];
    //   const xrayTest = {
    //     id: null,
    //     lms_patient_id: null,
    //     lms_xrayTest_id: 2,
    //     result: "NORMAL CHEST",
    //     idNum: null,
    //     description: `PA view of the chest reveals the lungs are clear. Pulmonary structure is and shows vascular markings. The mediastinum is centered and of normal width. The tracheal air shadow is midline. The cardiac size and configuration are within normal limits. Both hemidiaphragms and costophrenic angles are sharp and intact. The visualized osseous thoracic cage shows no bony abnormality.`,
    //     testDate: new Date(),
    //     status: 0,
    //     created_at: null,
    //     updated_at: null,
    //   };
    //   patientList.map(async (d: any) => {
    //     const res: any = await dispatch(savePatient(d));
    //     if (res.type === "dashboard/savePatient/fulfilled") {
    //       const updatedPatientTestField = labTest?.map((d: any) => {
    //         return { ...d, lms_patient_id: res.payload.id };
    //       });
    //       xrayTest.lms_patient_id = res.payload.id;
    //       xrayTest.idNum = generateIdNum(res.payload.id);
    //       await dispatch(savePatientXrayTest(xrayTest));

    //       updatedPatientTestField.map(async (d: ec_care_patientLabTest) => {
    //         const response: any = await dispatch(savePatientLabTest(d));
    //         if (response.type === "dashboard/savePatientLabTest/fulfilled") {
    //           const findLabTestField: any = labTestField.filter(
    //             (item) => item.lms_labTest_id === d.lms_labTest_id
    //           );
    //           findLabTestField.map(async (i) => {
    //             const par: ec_care_patientLabTestField = {
    //               id: null,
    //               lms_patient_labTest_id: response.payload.id,
    //               lms_labTest_field_id: i.id,
    //               result: null,
    //               status: null,
    //               created_at: null,
    //               updated_at: null,
    //             };
    //             await dispatch(savePatientLabTestField(par));
    //           });
    //         }
    //       });
    //     }
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

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
      await dispatch(fetchPatientXrayTestsByPatient(id));
      await dispatch(fetchXrayTestByPatient(id));
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
        handleFileChange={handleFileChange}
        patients={patients}
        updateModal={updateModal}
        patientInfo={patientInfo}
      />
    </>
  );
};

export default Patient;
