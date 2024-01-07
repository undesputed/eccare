import React, { useEffect, useRef } from "react";
import PatientDetailsComponent from "../../../views/details";
import { useAppDispatch, useAppSelector } from "../../../actions/hooks";
import { RootState } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import {
  fetchLabTestByPatient,
  fetchLabTestByPatientAndTest,
  fetchLabTestFieldByPatient,
  fetchLabTestNotByPatient,
  fetchPatientById,
  fetchPatientDetailsById,
  handleOnChangeResult,
  openAddTestModal,
  removePatientLabTest,
  removePatientLabTestField,
  setFieldToPatient,
  setLoading,
  setPatientDetails,
  setPatientId,
  setTestId,
  updatePatientLabTestField,
} from "../../../reducers/patient/patientSlice";
import {
  savePatientLabTest,
  savePatientLabTestField,
} from "../../../reducers/dashboard/dashboardSlice";
import ec_care_patientLabTest from "../../../entity/ec_care_patientLabTest";
import ec_care_patientLabTestField from "../../../entity/ec_care_patientLabTestField";
import { openSnackBar } from "../../../reducers/global/globalSlice";

const PatientDetails = () => {
  const searchParams = new URLSearchParams(location.search);
  const id: any = searchParams.get("id");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const patientId = useAppSelector(
    (state: RootState) => state.patient.patientId
  );
  const patientDetail = useAppSelector(
    (state: RootState) => state.patient.patient
  );
  const patientLabTests = useAppSelector(
    (state: RootState) => state.patient.patientLabTest
  );
  const patientLabTestField = useAppSelector(
    (state: RootState) => state.patient.patientLabTestField
  );
  const patient = useAppSelector(
    (state: RootState) => state.patient.patientForm
  );
  const testId = useAppSelector((state: RootState) => state.patient.testId);
  const addTestModal = useAppSelector(
    (state: RootState) => state.patient.addTestModal
  );
  const labTest = useAppSelector((state: RootState) => state.patient.labTest);
  const labTestField = useAppSelector(
    (state: RootState) => state.labTest.labTestField
  );

  const handleAddtest = () => {
    dispatch(openAddTestModal());
  };

  const handleAddTestSubmit = () => {
    console.log("HEllo world");
  };

  const onSelectTest = async (selection: any) => {
    const testId = selection[0];
    try {
      const findTests = patient.testFields.find((d: any) => d.id === testId);

      if (findTests) {
        const updatedFields = findTests.labTestFields.map((field: any) => {
          if (field.fieldId >= 33 && field.fieldId <= 39) {
            return {
              ...field,
              result: "NONE SEEN",
            };
          }
          return field;
        });
        const payload = {
          testFields: updatedFields,
          testId: testId,
        };
        dispatch(setTestId(testId));
        dispatch(setFieldToPatient(payload));
        dispatch(setPatientDetails(updatedFields));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const calculateMCHC = (labTestField) => {
    const hgbFieldId = 3;
    const hctFieldId = 4;

    const hgb = labTestField.find(
      (item) => item.fieldId === hgbFieldId
    )?.result;
    const hct = labTestField.find(
      (item) => item.fieldId === hctFieldId
    )?.result;

    if (hgb !== null && hct !== null) {
      const mchh = (hgb / hct) * 100;
      return mchh.toFixed(1);
    }

    return 0;
  };

  const calculateMCH = (labTestField) => {
    const rbcFieldId = 2;
    const hgbFieldId = 3;

    const hgb = labTestField.find(
      (item) => item.fieldId === hgbFieldId
    )?.result;
    const rbc = labTestField.find(
      (item) => item.fieldId === rbcFieldId
    )?.result;

    if (hgb !== null && rbc !== null) {
      const mch = 10 * (parseFloat(hgb) / rbc);
      return mch.toFixed(1);
    }

    return 0;
  };

  const calculateMCV = (labTestField) => {
    const rbcFieldId = 2;
    const hctFieldId = 4;

    const hct = labTestField.find(
      (item) => item.fieldId === hctFieldId
    )?.result;
    const rbc = labTestField.find(
      (item) => item.fieldId === rbcFieldId
    )?.result;

    if (hct !== null && rbc !== null) {
      const mcv = (parseFloat(hct) * 10) / parseFloat(rbc);
      return mcv.toFixed(1);
    }

    return 0;
  };

  const calculateTotal = (labTestField) => {
    const fieldIdsToSum = [6, 7, 8, 9, 10];
    return fieldIdsToSum.reduce((total, fieldId) => {
      const field = labTestField.find((item) => item.fieldId === fieldId);
      return total + (field ? parseFloat(field.result) || 0 : 0);
    }, 0);
  };

  const handleOnChange = (event: any, fieldId: number) => {
    const { name, value } = event.target;

    const fintTestFields = patient.testFields?.find(
      (d: any) => d.id === testId
    );

    const findFields = fintTestFields?.labTestFields?.find(
      (d: any) => d.name === name
    );

    if (findFields) {
      const updatedArray = fintTestFields?.labTestFields?.map((item: any) =>
        item.name === name ? { ...item, result: value } : item
      );

      const total = calculateTotal(updatedArray);
      const mcvCalculation = calculateMCV(updatedArray);
      const mchCalculation = calculateMCH(updatedArray);
      const mchcCalculation = calculateMCHC(updatedArray);

      const updatedWithTotalArr = updatedArray.map((items: any) =>
        items.fieldId === 11 ? { ...items, result: total } : items
      );

      const updateWithMcv = updatedWithTotalArr.map((i: any) =>
        i.fieldId === 12 ? { ...i, result: mcvCalculation } : i
      );

      const updateWithMch = updateWithMcv.map((i: any) =>
        i.fieldId === 13 ? { ...i, result: mchCalculation } : i
      );

      const updateWithMchc = updateWithMch.map((i: any) =>
        i.fieldId === 14 ? { ...i, result: mchcCalculation } : i
      );

      const payload = {
        testId: testId,
        updatedResults: updateWithMchc,
      };
      dispatch(handleOnChangeResult(payload));
    }
  };

  const handleOnSubmitAddTests = async (labTestId: any) => {
    try {
      const labTestParams: ec_care_patientLabTest = {
        id: 0,
        lms_labTest_id: labTestId,
        lms_patient_id: parseInt(id),
        status: 0,
        created_at: "",
        updated_at: "",
      };
      const onErrorParams = {
        message: "",
        type: "Error",
        key: 0,
        field: "",
        open: true,
      };
      const labTestRes: any = await dispatch(savePatientLabTest(labTestParams));
      if (labTestRes.type === "dashboard/savePatientLabTest/fulfilled") {
        const findLabTestField: any = labTestField.filter(
          (item) => item.lms_labTest_id === labTestId
        );
        findLabTestField.map(async (i) => {
          const par: ec_care_patientLabTestField = {
            id: null,
            lms_patient_labTest_id: labTestRes.payload.id,
            lms_labTest_field_id: i.id,
            result: null,
            status: null,
            created_at: null,
            updated_at: null,
          };
          await dispatch(savePatientLabTestField(par));
        });
        fetchPatientDetails();
        onErrorParams.message = "New Test Added Successfully!!!";
        onErrorParams.type = "success";
        dispatch(openSnackBar(onErrorParams));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnRemoveTest = async (testId: any) => {
    try {
      const params = {
        patientId: id,
        labTestId: testId,
      };
      const patientLabTestParams = {
        lms_patient_id: id,
        lms_labTest_id: testId,
      };
      const onErrorParams = {
        message: "",
        type: "Error",
        key: 0,
        field: "",
        open: true,
      };
      const res: any = await dispatch(fetchLabTestByPatientAndTest(params));
      if (res.type === "patient/fetchLabTestByPatientAndTest/fulfilled") {
        // Remove Patient Lab Test Field
        await dispatch(removePatientLabTestField(res.payload.id));
        await dispatch(removePatientLabTest(patientLabTestParams));
      }

      fetchPatientDetails();
      onErrorParams.message = "Test Removed Successfully!!!";
      onErrorParams.type = "success";
      dispatch(openSnackBar(onErrorParams));
    } catch (err) {
      console.log(err);
    }
    console.log(testId);
  };

  const handleOnProceed = () => {
    navigate(`/patient/print?id=${patient.id}`);
  };

  const handleTestSubmit = () => {
    try {
      patient.testFields?.map(async (d: any) => {
        const result = d.labTestFields;
        await dispatch(updatePatientLabTestField(result));
      });
      alert("Results Recorded!!");
    } catch (err) {
      console.log("Error updating Patient Results", err);
    }
  };

  const fetchPatientDetails = async () => {
    try {
      dispatch(setPatientId(id));
      await dispatch(fetchPatientById(id));
      await dispatch(fetchLabTestByPatient(id));
      await dispatch(fetchPatientDetailsById(id));
      await dispatch(fetchLabTestNotByPatient(id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (patientId === 0) {
      fetchPatientDetails();
    }
  }, []);

  return (
    <>
      <PatientDetailsComponent
        handleOnProceed={handleOnProceed}
        onSelectTest={onSelectTest}
        handleOnChange={handleOnChange}
        handleTestSubmit={handleTestSubmit}
        handleAddtest={handleAddtest}
        handleAddTestSubmit={handleAddTestSubmit}
        handleOnSubmitAddTests={handleOnSubmitAddTests}
        handleOnRemoveTest={handleOnRemoveTest}
        patientLabTests={patientLabTests}
        patientDetail={patientDetail}
        patientLabTestField={patientLabTestField}
        patient={patient}
        addTestModal={addTestModal}
        labTest={labTest}
      />
    </>
  );
};

export default PatientDetails;
