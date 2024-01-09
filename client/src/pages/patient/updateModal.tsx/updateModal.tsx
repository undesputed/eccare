import { Box, Grid } from "@mui/material";
import React from "react";
import { ec_care_patient } from "../../../entity/ec_care_patient";
import TextFieldComponent from "../../../components/TextField/textField";
import SelectField from "../../../components/SelectField/SelectField";
import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

interface UpdateModalProps {
  patient: ec_care_patient;
  handleOnChange: (event: any) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  patient,
  handleOnChange,
}) => {
  const originalDate: any = patient?.dateOfVisit;
  const convertedDate = originalDate
    ? format(
        utcToZonedTime(parseISO(originalDate), "Asia/Manila"),
        "yyyy-MM-dd"
      )
    : null;

  const originalBirthday: any = patient?.birthday;
  const convertedBirthday = originalBirthday
    ? format(
        utcToZonedTime(parseISO(originalBirthday), "Asia/Manila"),
        "yyyy-MM-dd"
      )
    : null;
  return (
    <>
      <Box position={"relative"} sx={{ color: "black" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Full Name"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              value={patient.fullName}
              name="fullName"
              onChange={handleOnChange}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Date of Visit"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              type="date"
              value={convertedDate}
              name="dateOfVisit"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="E-mail Address"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              type="email"
              value={patient.email}
              name="email"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectField
              label="Gender"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              items={["Male", "Female"]}
              value={patient.gender}
              name="gender"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextFieldComponent
              label="Birthday"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              type="date"
              value={patient?.birthday ? convertedBirthday : null}
              name="birthday"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Age"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              disabled={true}
              value={patient.age}
              onChange={undefined}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Phone Number"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              type="number"
              value={patient.phone}
              name="phone"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Company"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              value={patient.company}
              name="company"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Affiliated HMO"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              disabled={true}
              onChange={undefined}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldComponent
              label="Dr. Referred By"
              width={"100%"}
              labelSize={"15px"}
              backgroundColor="#fefefe"
              disabled={true}
              onChange={undefined}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UpdateModal;
