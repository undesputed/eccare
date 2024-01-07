import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";

interface BackDropProps {
  handleClose: () => void;
}

const BackDropComponent: React.FC<BackDropProps> = ({ handleClose }) => {
  const backDrop = useAppSelector((state: RootState) => state.global.backDrop);
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDrop.open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default BackDropComponent;
