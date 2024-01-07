import { Paper, Box } from "@mui/material";
import React from "react";
import Header from "./header";
import FooterResult from "./FooterResult";
import TestContent from "./content";
import DetailHeader from "./detailHeader";

interface PrintContent {
  contentRef: any;
  patient: any;
}

const PrintContent: React.FC<PrintContent> = ({ contentRef, patient }) => {
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
      </Box>
    </>
  );
};

export default PrintContent;
