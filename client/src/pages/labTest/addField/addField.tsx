import React from "react";
import AddFieldView from "../../../views/addField";
import { useAppDispatch, useAppSelector } from "../../../actions/hooks";
import { RootState } from "../../../app/store";
import ec_care_labTest_field from "../../../entity/ec_care_labTestField";
import {
  removeAddedField,
  setAddField,
  setAddedField,
} from "../../../reducers/labTest/labTestSlice";
import { GridRowId } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const AddField = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const field = useAppSelector((state: RootState) => state.labTest.field);
  const addField = useAppSelector((state: RootState) => state.labTest.addField);
  let addedField = useAppSelector(
    (state: RootState) => state.labTest.addedField
  );

  const handleOnAddField = (fieldId: GridRowId) => {
    const addedParams: any = field.find((d) => d.id === fieldId);
    const params = {
      lms_labTest_id: null,
      lms_field_id: addedParams.id,
      orderNum: addedField.length + 1,
    } as unknown as ec_care_labTest_field;

    const find = addField.find((item) => item.lms_field_id === fieldId);
    if (find) {
      alert("Field already Exists");
      return;
    }

    dispatch(setAddField(params));
    dispatch(setAddedField(addedParams));
  };

  const handleOnRemoveField = (fieldId: GridRowId) => {
    if (field) {
      dispatch(removeAddedField(fieldId));
    }
  };

  const handleOnSubmit = () => {
    navigate("/lab-test");
  };

  return (
    <>
      <AddFieldView
        fields={field}
        addedField={addedField}
        handleOnAddField={handleOnAddField}
        handleOnSubmit={handleOnSubmit}
        handleOnRemoveField={handleOnRemoveField}
      />
    </>
  );
};

export default AddField;
