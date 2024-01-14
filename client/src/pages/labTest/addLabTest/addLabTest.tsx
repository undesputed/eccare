import React from "react";
import LabTestComponent from "../../../views/addLabTest";
import { useAppDispatch, useAppSelector } from "../../../actions/hooks";
import { RootState } from "../../../app/store";
import {
  addLabTest,
  addLabTestField,
  cleanLabTest,
  setLabTest,
  setLabTestError,
} from "../../../reducers/labTest/labTestSlice";
import ec_care_labTest_field from "../../../entity/ec_care_labTestField";

const labTest = () => {
  const dispatch = useAppDispatch();
  const addedField = useAppSelector(
    (state: RootState) => state.labTest.addedField
  );
  const addField = useAppSelector((state: RootState) => state.labTest.addField);
  const labTest = useAppSelector((state: RootState) => state.labTest.labTest);
  const labTestError = useAppSelector(
    (state: RootState) => state.labTest.isLabTestError
  );

  const handleOnSubmit = async () => {
    if (
      labTest.name === null ||
      labTest.name === "" ||
      labTest.type === null ||
      labTest.type === "" ||
      labTest.price === null ||
      labTest.price === ""
    ) {
      alert("All Fields is Required!!");
      dispatch(setLabTestError(true));
      return;
    }

    if (addField.length === 0) {
      alert("Test Fields is Required!!");
      return;
    }

    dispatch(setLabTestError(false));
    // Save lms_labTest firsts
    // Save lms_labTest_field Second
    try {
      const res: any = await dispatch(addLabTest(labTest));
      if (res.type === "labTest/addLabTest/fulfilled") {
        const updatedAddField = addField?.map((d: any) => {
          return { ...d, lms_labTest_id: res.payload.id };
        });

        updatedAddField.map(async (d: ec_care_labTest_field) => {
          await dispatch(addLabTestField(d));
          dispatch(cleanLabTest());
        });
        alert("New Lab test added Successfully!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    const payload = {
      name: name,
      value: value,
    };
    dispatch(setLabTest(payload));
  };

  return (
    <>
      <LabTestComponent
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        addedField={addedField}
        labTest={labTest}
        labTestError={labTestError}
      />
    </>
  );
};

export default labTest;
