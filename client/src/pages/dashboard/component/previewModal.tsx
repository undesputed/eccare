import React from "react";
import { ec_care_patient } from "../../../entity/ec_care_patient";
import { Box, Grid, Typography } from "@mui/material";
import ec_care_patientLabTest from "../../../entity/ec_care_patientLabTest";
import logo from "../../../assets/image/logo/Logo.png";
import ec_care_labTest from "../../../entity/ec_care_labTest";
import ec_care_xrayTest from "../../../entity/ec_care_xrayTest";

interface PreviewProps {
  patientInfo: ec_care_patient;
  labTests: ec_care_labTest[];
  patientLabTest: ec_care_patientLabTest[];
  selectedLabTest: ec_care_labTest[];
  selectedXrayTests: ec_care_xrayTest[];
}

const PreviewModal: React.FC<PreviewProps> = ({
  labTests,
  patientInfo,
  patientLabTest,
  selectedLabTest,
  selectedXrayTests,
}) => {
  const getTotal = () => {
    let total = 0; // Initialize total to 0

    if (selectedXrayTests) {
      total += Object.values(selectedXrayTests).reduce(
        (accumulator: any, test) => {
          return accumulator + (test.price || 0);
        },
        0
      );
    }

    total += Object.values(selectedLabTest).reduce((accumulator: any, test) => {
      return accumulator + (test.price || 0);
    }, 0);

    return total.toFixed(2);
  };

  const total = Object.values(selectedLabTest).reduce(
    (accumulator: any, test) => {
      return accumulator + (test.price || 0);
    },
    0
  );

  const formattedTotal = total.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <>
      <Box position={"relative"} sx={{ color: "black" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <img src={logo} width={"30%"} />
              <Typography
                sx={{
                  color: "#1580c3",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                EC CARE MEDICAL LABORATORY
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                No: 254 9527 / 09270796274 / 09202629412
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                Email: eccaremedical@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            * * * * * * * * * * * * * * * * * *
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              textAlign={"center"}
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "normal",
                letterSpacing: "10px",
                m: 0,
                p: 0,
              }}
            >
              RECEIPT
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            * * * * * * * * * * * * * * * * * *
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Lab Tests Names
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Price
            </Typography>
          </Grid>
          {selectedLabTest &&
            selectedLabTest?.map((d: any) => (
              <>
                <Grid item xs={12} md={6}>
                  <Typography
                    textAlign={"left"}
                    sx={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                  >
                    {d.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    textAlign={"right"}
                    sx={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                  >
                    {d.price.toFixed(2)}
                  </Typography>
                </Grid>
              </>
            ))}
          {selectedXrayTests &&
            selectedXrayTests?.map((d: any) => (
              <>
                <Grid item xs={12} md={6}>
                  <Typography
                    textAlign={"left"}
                    sx={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                  >
                    {d.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    textAlign={"right"}
                    sx={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                  >
                    {d.price.toFixed(2)}
                  </Typography>
                </Grid>
              </>
            ))}
          <Grid item xs={12} md={12}>
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            * * * * * * * * * * * * * * * * * *
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              TOTAL
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              ₱{getTotal()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            * * * * * * * * * * * * * * * * * *
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              textAlign={"center"}
              sx={{
                color: "black",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Patient Info
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Full Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {patientInfo.fullName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Date of Visit
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {(function () {
                if (!patientInfo.dateOfVisit) {
                  return "--";
                }
                const dateObject = new Date(patientInfo.dateOfVisit);
                const formattedDate = dateObject.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
                return formattedDate;
              })()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Email
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {patientInfo.email ? patientInfo.email : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Gender
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {patientInfo.gender ? patientInfo.gender : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Birthday
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {(function () {
                if (!patientInfo.birthday) {
                  return "--";
                }
                const dateObject = new Date(patientInfo.birthday);
                const formattedDate = dateObject.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                });
                return formattedDate;
              })()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Age
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {patientInfo.age ? patientInfo.age : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Phone
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {patientInfo.phone ? patientInfo.phone : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"left"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              Company
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              textAlign={"right"}
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "normal",
              }}
            >
              {patientInfo.company ? patientInfo.company : "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            * * * * * * * * * * * * * * * * * *
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              textAlign={"center"}
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              THANK YOU!!
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
            * * * * * * * * * * * * * * * * * *
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PreviewModal;
