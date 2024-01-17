import { ReactNode } from "react";
import { ec_care_patient } from "../../entity/ec_care_patient";
import { AlertColor } from "@mui/material";
import ec_care_med_cert from "../../entity/ec_care_med_cert";

export type GlobalType = {
  patient: ec_care_patient[];
  medCerts: ec_care_med_cert[];
  snackBar: {
    message?: string;
    type?: any;
    key?: number;
    field?: string;
    open?: boolean;
  };
  backDrop: {
    open: boolean;
  };
  isOpenAlert: boolean;
  isSuccess: boolean;
  status: string;
  error: any;
};
