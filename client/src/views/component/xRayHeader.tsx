import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Grid,
} from "@mui/material";
import React from "react";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";
import ec_care_xrayTest from "../../entity/ec_care_xrayTest";

interface XrayHeaderProps {
  patient: any;
  patientXrayTests: ec_care_patientXrayTest;
  xrayTest: ec_care_xrayTest;
}

const XrayHeader: React.FC<XrayHeaderProps> = ({
  patient,
  patientXrayTests,
  xrayTest,
}) => {
  return (
    <TableContainer
      sx={{
        borderBottom: "1px solid grey",
        color: "black",
      }}
    >
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                border: "none",
                fontWeight: "bold",
                color: "black",
              }}
            >
              <Grid container>
                <Grid item xs={2} md={2}>
                  Name:
                </Grid>
                <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                  {patient.fullName.toUpperCase()}
                </Grid>
                <Grid item xs={2} md={2}>
                  Date:
                </Grid>
                <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                  {(function () {
                    const dateObject = new Date(patientXrayTests?.testDate);
                    const formattedDate = dateObject.toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    );

                    return formattedDate;
                  })()}
                </Grid>
                <Grid item xs={2} md={2}>
                  ID NO:
                </Grid>
                <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                  {patientXrayTests.idNum}
                </Grid>
                <Grid item xs={2} md={2}>
                  DOB:
                </Grid>
                <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                  {(function () {
                    if (!patient.birthdate) {
                      return "N/A";
                    }
                    const dateObject = new Date(patient.birthday);
                    const formattedDate = dateObject.toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    );

                    return formattedDate;
                  })()}
                </Grid>
                <Grid item xs={2} md={2}>
                  EXAMINATION:
                </Grid>
                <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                  {xrayTest?.name}
                </Grid>
                <Grid item xs={2} md={2}>
                  AGE/SEX:
                </Grid>
                <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                  {patient.age}/{patient.gender}
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default XrayHeader;
