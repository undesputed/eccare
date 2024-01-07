import {
  DialogProps,
  SelectChangeEvent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  DialogActions,
  Button,
  Breakpoint,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";

interface DialogProp {
  handleClose?: () => void;
  handleSubmit?: () => void;
  open: boolean;
  maxWidth?: false | Breakpoint;
  children: ReactNode;
  title?: string;
  scroll?: "body" | "paper";
  showSubmit?: boolean;
}

const DialogComponent: React.FC<DialogProp> = ({
  handleClose,
  handleSubmit,
  open,
  maxWidth,
  children,
  title,
  scroll,
  showSubmit,
}) => {
  return (
    <>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        scroll={scroll}
      >
        {title ? (
          <>
            <DialogTitle>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
            </DialogTitle>
          </>
        ) : null}
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {showSubmit ? (
            <>
              <Button onClick={handleSubmit}>Submit</Button>
            </>
          ) : null}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogComponent;
