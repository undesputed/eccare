import React, { MutableRefObject } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TextFieldComponent from "../components/TextField/textField";
import SelectField from "../components/SelectField/SelectField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { ec_care_patient } from "../entity/ec_care_patient";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import ec_care_labTest from "../entity/ec_care_labTest";
import EditIcon from "@mui/icons-material/Edit";
import DialogComponent from "../components/Dialog/Dialog";
import PreviewModal from "../pages/dashboard/component/previewModal";
import ec_care_patientLabTest from "../entity/ec_care_patientLabTest";

interface dashboardProps {
  handleOnChange: (event: any) => void;
  handlePreview: () => void;
  handleKeyDown: (event: KeyboardEvent, nextInputRef: any) => void;
  handleClearFields: () => void;
  handleOnSelect: (e: any) => void;
  handleModal: () => void;
  handleModalSubmit: () => void;
  patientInfo: ec_care_patient;
  patientLabTest: ec_care_patientLabTest[];
  labTests: ec_care_labTest[];
  selectedLabTest: ec_care_labTest[];
  fullNameRef: any;
  dateOfVisitRef: any;
  emailRef: any;
  genderRef: any;
  birthdayRef: any;
  ageRef: any;
  phoneRef: any;
  companyRef: any;
  hmoRef: any;
  docRef: any;
  isError: boolean;
  openModal: boolean;
}

const DashboardComponent: React.FC<dashboardProps> = ({
  handleOnChange,
  handlePreview,
  handleKeyDown,
  handleClearFields,
  handleOnSelect,
  handleModal,
  handleModalSubmit,
  selectedLabTest,
  patientLabTest,
  patientInfo,
  fullNameRef,
  dateOfVisitRef,
  emailRef,
  genderRef,
  birthdayRef,
  ageRef,
  phoneRef,
  companyRef,
  hmoRef,
  docRef,
  isError,
  labTests,
  openModal,
}) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Test Name",
      width: 200,
      align: "left",
      headerAlign: "left",
      renderCell(params) {
        return <strong>{params.row.name.toUpperCase()}</strong>;
      },
    },
    { field: "description", headerName: "Description", width: 250 },
    { field: "type", headerName: "Department", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Delete"
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <>
      <DialogComponent
        open={openModal}
        handleClose={handleModal}
        title="Patient Preview"
        scroll="body"
        handleSubmit={handleModalSubmit}
        showSubmit={true}
      >
        <PreviewModal
          patientInfo={patientInfo}
          patientLabTest={patientLabTest}
          labTests={labTests}
          selectedLabTest={selectedLabTest}
        />
      </DialogComponent>
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
            PATIENT FORM
          </Typography>
          <div>
            <Button
              sx={{
                height: "30px",
                width: "10rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                color: "#1382c5",
                ml: 1,
              }}
              endIcon={<SendIcon />}
              onClick={handlePreview}
            >
              PREVIEW
            </Button>
          </div>
        </Box>
        <Box position={"relative"} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextFieldComponent
                label="Full Name"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                value={patientInfo.fullName}
                name="fullName"
                onChange={handleOnChange}
                autoFocus={true}
                ref={fullNameRef}
                onKeyDown={(e) => handleKeyDown(e, dateOfVisitRef)}
                isError={isError}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextFieldComponent
                label="Date of Visit"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                type="date"
                value={patientInfo.dateOfVisit}
                name="dateOfVisit"
                onChange={handleOnChange}
                ref={dateOfVisitRef}
                onKeyDown={(e) => handleKeyDown(e, emailRef)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextFieldComponent
                label="E-mail Address"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                type="email"
                value={patientInfo.email}
                name="email"
                onChange={handleOnChange}
                ref={emailRef}
                onKeyDown={(e) => handleKeyDown(e, genderRef)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectField
                label="Gender"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                items={["Male", "Female"]}
                value={patientInfo.gender}
                name="gender"
                onChange={handleOnChange}
                ref={genderRef}
                onKeyDown={(e) => handleKeyDown(e, birthdayRef)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextFieldComponent
                label="Birthday"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                type="date"
                value={patientInfo.birthday}
                name="birthday"
                onChange={handleOnChange}
                ref={birthdayRef}
                onKeyDown={(e) => handleKeyDown(e, phoneRef)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextFieldComponent
                label="Age"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                disabled={true}
                value={patientInfo.age}
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
                value={patientInfo.phone}
                name="phone"
                onChange={handleOnChange}
                ref={phoneRef}
                onKeyDown={(e) => handleKeyDown(e, companyRef)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextFieldComponent
                label="Company"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                value={patientInfo.company}
                name="company"
                onChange={handleOnChange}
                ref={companyRef}
                onKeyDown={(e) => handleKeyDown(e, hmoRef)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextFieldComponent
                label="Affiliated HMO"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                ref={hmoRef}
                onKeyDown={(e) => handleKeyDown(e, docRef)}
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
                ref={docRef}
                onKeyDown={(e) => handleKeyDown(e, fullNameRef)}
                disabled={true}
                onChange={undefined}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          my={3}
        >
          <Box position={"relative"} my={2}>
            <Typography
              variant="h4"
              component={"h3"}
              color={"black"}
              alignContent={"center"}
            >
              LABORATORY TESTS
            </Typography>
          </Box>
          <Box>
            <DataGrid
              rows={labTests}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 20, 30]}
              slots={{ toolbar: GridToolbar }}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              checkboxSelection
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              sx={{
                borderRadius: 0,
                color: "black",
              }}
              rowHeight={35}
              onRowSelectionModelChange={handleOnSelect}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default DashboardComponent;
