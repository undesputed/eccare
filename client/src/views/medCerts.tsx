import { Box, Stack } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import ec_care_med_cert from "../entity/ec_care_med_cert";
import MedCertContent from "./component/medCert";

interface MedCertProp {
  medCert: ec_care_med_cert[];
  formattedDate: any;
}

const MedCertComponent: React.FC<MedCertProp> = ({
  medCert,
  formattedDate,
}) => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Helmet>
          <title>Print Result</title>
        </Helmet>
        <Stack>
          {medCert &&
            medCert?.map((d: ec_care_med_cert) => (
              <MedCertContent
                formattedDate={formattedDate}
                medCertContent={d}
              />
            ))}
        </Stack>
      </Box>
    </>
  );
};

export default MedCertComponent;
