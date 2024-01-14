import React from "react";
import LabTestView from "../../views/labTest";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";

const LabTest = () => {
  const navigate = useNavigate();
  const labTests = useAppSelector((state: RootState) => state.labTest.labTests);

  const onClickAddLabTest = () => {
    navigate("/lab-test/addLabtest");
  };

  return (
    <>
      <LabTestView onClickAddLabTest={onClickAddLabTest} labTests={labTests} />{" "}
    </>
  );
};

export default LabTest;
