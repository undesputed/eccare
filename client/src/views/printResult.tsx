import React from "react";
import {
  Paper,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  NativeSelect,
} from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintContent from "./component/printContent";
import SelectField from "../components/SelectField/SelectField";
import ec_care_patientXrayTest from "../entity/ec_care_patientXrayTest";
import ec_care_xrayTest from "../entity/ec_care_xrayTest";

interface PrintResultProp {
  handleOnback: () => void;
  handleOnChangeMedTech: (event: any) => void;
  handlePrint: any;
  componentRef: any;
  patient: any;
  paperSize: string;
  medTech: number;
  patientXrayTests: ec_care_patientXrayTest[];
  xrayTests: ec_care_xrayTest[];
}

const PrintResultComponent: React.FC<PrintResultProp> = ({
  handleOnback,
  handleOnChangeMedTech,
  handlePrint,
  componentRef,
  patient,
  paperSize,
  medTech,
  patientXrayTests,
  xrayTests,
}) => {
  return (
    <>
      <Paper className="paper" elevation={0} sx={{ p: { xs: 2, md: 3 } }}>
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h4"
            component={"h3"}
            color={"black"}
            alignContent={"center"}
          >
            PRINT PATIENT RESULT
          </Typography>
          <div>
            <Button
              sx={{
                height: "30px",
                width: "10rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                mr: 1,
              }}
              color="secondary"
              startIcon={<ArrowBackIcon />}
              onClick={handleOnback}
            >
              BACK
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "10rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                color: "#1382c5",
                ml: 1,
              }}
              endIcon={<LocalPrintshopIcon />}
              onClick={handlePrint}
            >
              PRINT RESULT
            </Button>
          </div>
        </Box>
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"row"}
          mt={2}
        >
          <FormControl
            sx={{
              width: "20rem",
              mx: 1,
            }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Medical Technologists
            </InputLabel>
            <NativeSelect
              defaultValue={medTech}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              onChange={handleOnChangeMedTech}
            >
              <option value={0}>
                ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)
              </option>
              <option value={1}>EMMANUEL B. GARCES, RMT</option>
              <option value={2}>MARITES DE LOS CIENTOS, RMT</option>
            </NativeSelect>
          </FormControl>
          <FormControl
            sx={{
              width: "20rem",
              mx: 1,
            }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Paper Size
            </InputLabel>
            <NativeSelect
              defaultValue={paperSize}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              disabled
            >
              <option value={"legal"}>Legal</option>
              <option value={"letter"}>Letter</option>
              <option value={"A4"}>A4</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Paper>
      <Box
        position={"relative"}
        mt={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <PrintContent
          contentRef={componentRef}
          patient={patient}
          patientXrayTests={patientXrayTests}
          xrayTests={xrayTests}
        />
      </Box>
    </>
  );
};

export default PrintResultComponent;
