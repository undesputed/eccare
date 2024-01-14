import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";

interface XrayContentProps {
  patientXrayTests: ec_care_patientXrayTest;
}

const XrayTestContent: React.FC<XrayContentProps> = ({ patientXrayTests }) => {
  return (
    <>
      <TableContainer
        sx={{
          flex: 1,
        }}
      >
        <Table
          aria-label="simple table"
          size="small"
          sx={{
            color: "black",
            overflow: "hidden",
          }}
        >
          <TableBody
            sx={{
              color: "black",
            }}
          >
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{
                  border: "none",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                IMAGING
              </TableCell>
            </TableRow>
            <TableRow>
              <Box m={5}>
                <Box
                  display={"flex"}
                  mt={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "bolder",
                    }}
                  >
                    X-RAY RESULT
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "bolder",
                    }}
                  >
                    Results:
                  </Typography>
                </Box>
                <Box display={"flex"} flexDirection={"column"} mt={1}>
                  <FormatString originalString={patientXrayTests.description} />
                </Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bolder",
                  }}
                  mt={5}
                >
                  IMPRESSION:
                </Typography>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bolder",
                  }}
                >
                  {patientXrayTests.result}
                </Typography>
              </Box>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const FormatString: React.FC<{ originalString: string }> = ({
  originalString,
}) => {
  // Split the original string into an array of sentences
  const sentences = originalString.split(". ");

  // Format each sentence
  const formattedSentences = sentences.map((sentence, index) => (
    <p
      key={index}
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      {sentence.trim()}
    </p>
  ));

  return <>{formattedSentences}</>;
};

export default XrayTestContent;
