import {
  TableCell,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Grid,
} from "@mui/material";
import React from "react";

interface DetailProps {
  patient: any;
}

const DetailHeader: React.FC<DetailProps> = ({ patient }) => {
  return (
    <>
      <TableContainer>
        <Table
          aria-label="a dense table"
          size="small"
          sx={{
            color: "black",
            minWidth: 650,
          }}
        >
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
                    {patient.fullName}
                  </Grid>
                  <Grid item xs={2} md={2}>
                    Date:
                  </Grid>
                  <Grid item xs={4} md={4} sx={{ fontWeight: "light" }}>
                    {(function () {
                      if (!patient.dateOfVisit) {
                        return "--";
                      }
                      const dateObject = new Date(patient.dateOfVisit);
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
                    Age / Sex:
                  </Grid>
                  <Grid item xs={10} md={10} sx={{ fontWeight: "light" }}>
                    {(function () {
                      const body = [];
                      if (patient.age && !patient.gender) {
                        body.push(patient.age, " / --");
                      } else if (!patient.age && patient.gender) {
                        body.push("-- / ", patient.gender);
                      } else if (patient.age && patient.gender) {
                        body.push(patient.age, " / ", patient.gender);
                      } else {
                        body.push("-- / --");
                      }
                      return body;
                    })()}
                  </Grid>
                  <Grid item xs={2} md={2}>
                    Birth date:
                  </Grid>
                  <Grid item xs={10} md={10} sx={{ fontWeight: "light" }}>
                    {(function () {
                      if (!patient.birthday) {
                        return "--";
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
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DetailHeader;
