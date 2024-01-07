import {
  Alert,
  Button,
  IconButton,
  Snackbar,
  SnackbarContent,
  Stack,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";

interface SnackbarProps {
  handleClose: () => void;
  //   snackBar: {
  //     message?: string;
  //     type?: string;
  //     key?: number;
  //     field?: string;
  //     open?: boolean;
  //   };
}

const SnackBarComponent: React.FC<SnackbarProps> = ({
  handleClose,
  //   snackBar,
}) => {
  const snackBar = useAppSelector((state: RootState) => state.global.snackBar);
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        aria-label="close"
        color="inherit"
        sx={{ p: 0.5 }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        key={snackBar ? snackBar.key : undefined}
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert severity={snackBar.type.toLowerCase()}>{snackBar.message}</Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarComponent;
