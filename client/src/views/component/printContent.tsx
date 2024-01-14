import { Paper, Box } from "@mui/material";
import React from "react";
import Header from "./header";
import FooterResult from "./FooterResult";
import TestContent from "./content";
import DetailHeader from "./detailHeader";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";
import XrayFooter from "./xRayFooter";
import XrayHeader from "./xRayHeader";
import XrayTestContent from "./xRayContent";
import ec_care_xrayTest from "../../entity/ec_care_xrayTest";

interface PrintContent {
  contentRef: any;
  patient: any;
  patientXrayTests: ec_care_patientXrayTest[];
  xrayTests: ec_care_xrayTest[];
}

const PrintContent: React.FC<PrintContent> = ({
  contentRef,
  patient,
  patientXrayTests,
  xrayTests,
}) => {
  const testFields = patient?.testFields;
  return (
    <>
      <Box ref={contentRef}>
        {testFields &&
          testFields?.map((d: any) => (
            <>
              <Paper
                className="paper"
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3 },
                  height: "1030px",
                  width: "816px",
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  mt: 2,
                }}
              >
                <Header />
                <DetailHeader patient={patient} />
                <TestContent labTestfields={d.labTestFields} type={d.type} />
                <FooterResult />
              </Paper>
            </>
          ))}
        {patientXrayTests &&
          patientXrayTests?.map((d: any) => {
            const xrayTest = xrayTests.find(
              (item: any) => d.lms_xrayTest_id === item.id
            );

            return (
              <>
                <Paper
                  className="paper"
                  elevation={0}
                  sx={{
                    p: { xs: 2, md: 3 },
                    height: "1030px",
                    width: "816px",
                    display: "flex",
                    flexDirection: "column",
                    color: "black",
                    mt: 2,
                  }}
                >
                  <Header />
                  <XrayHeader
                    patient={patient}
                    patientXrayTests={d}
                    xrayTest={xrayTest}
                  />
                  <XrayTestContent patientXrayTests={d} />
                  <XrayFooter />
                </Paper>
              </>
            );
          })}
      </Box>
    </>
  );
};

export default PrintContent;
