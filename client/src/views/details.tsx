import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Paper, Box, Typography, Button, Grid } from "@mui/material";
import { ec_care_patient } from "../entity/ec_care_patient";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridToolbar,
} from "@mui/x-data-grid";
import ec_care_labTest from "../entity/ec_care_labTest";
import AddIcon from "@mui/icons-material/Add";
import TextFieldComponent from "../components/TextField/textField";
import DialogComponent from "../components/Dialog/Dialog";
import AddTest from "../pages/patient/addTest/addTest";

interface DetailProps {
  handleOnProceed: () => void;
  onSelectTest: (selection: any) => void;
  handleOnChange: (event: any, fieldId: number) => void;
  handleTestSubmit: () => void;
  handleAddtest: () => void;
  handleAddTestSubmit: () => void;
  handleOnSubmitAddTests: (id: GridRowId) => void;
  handleOnRemoveTest: (id: GridRowId) => void;
  patientDetail: ec_care_patient;
  patientLabTests: ec_care_labTest[];
  labTest: ec_care_labTest[];
  patientLabTestField: any[];
  patient: any;
  addTestModal: boolean;
}

const PatientDetailsComponent: React.FC<DetailProps> = ({
  handleOnProceed,
  onSelectTest,
  handleOnChange,
  handleTestSubmit,
  handleAddtest,
  handleAddTestSubmit,
  handleOnSubmitAddTests,
  handleOnRemoveTest,
  labTest,
  patientDetail,
  patientLabTests,
  patientLabTestField,
  patient,
  addTestModal,
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
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            onClick={() => handleOnRemoveTest(id)}
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
        open={addTestModal}
        handleClose={handleAddtest}
        title="Add New Test"
        scroll="paper"
        handleSubmit={handleAddTestSubmit}
        showSubmit={false}
      >
        <AddTest
          labTest={labTest}
          handleOnSubmitAddTests={handleOnSubmitAddTests}
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
            PATIENT DETAIL
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
              startIcon={<KeyboardDoubleArrowLeftIcon />}
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
              endIcon={<KeyboardDoubleArrowRightIcon />}
              onClick={() => handleOnProceed()}
            >
              PROCCEED
            </Button>
          </div>
        </Box>
        <Box position={"relative"} mt={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Full Name
              </Typography>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                variant="h3"
                component={"h4"}
              >
                {patient.fullName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Birthday
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {(function () {
                  if (!patient.birthday) {
                    return "N/A";
                  }
                  const dateObject = new Date(patient.birthday);
                  const formattedDate = dateObject.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });
                  return formattedDate;
                })()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Date Of Visit
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {(function () {
                  const dateObject = new Date(patient.dateOfVisit);
                  const formattedDate = dateObject.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });
                  return formattedDate;
                })()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Company
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {patient.company ? patient.company : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                e-mail Address
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {patient.email ? patient.email : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Gender
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {patient.gender ? patient.gender : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Phone Number
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {patient.phone ? patient.phone : "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography sx={{ color: "black", fontWeight: "normal" }}>
                Status
              </Typography>
              <Typography sx={{ color: "black", fontWeight: "bold" }}>
                {patient.status === 0 ? "PENDING" : "IN-PROGRESS"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <hr style={{ margin: "20px 0", backgroundColor: "gray" }} />
        <Box
          position={"relative"}
          m={2}
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
            LABORATORY TESTS
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
              endIcon={<AddIcon />}
              onClick={handleAddtest}
            >
              ADD TEST
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "13rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                color: "#1382c5",
                ml: 1,
              }}
              endIcon={<SaveAltIcon />}
              onClick={() => handleTestSubmit()}
            >
              RECORD RESULT
            </Button>
          </div>
        </Box>
        <Box
          position={"relative"}
          mt={2}
          width={"100%"}
          display={"flex"}
          flexDirection={"row"}
          mb={10}
        >
          <Box width={"40%"} position={"relative"}>
            <DataGrid
              rows={patient?.testFields ? patient?.testFields : []}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[2, 10, 20]}
              sx={{
                borderRadius: 0,
              }}
              rowHeight={35}
              onRowSelectionModelChange={onSelectTest}
            />
          </Box>
          <Box
            width={"60%"}
            position={"relative"}
            py={2}
            px={5}
            border={"1px solid #ccc"}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              sx={{
                fontSize: "18px",
                mb: 2,
              }}
            >
              LABORATORY TEST FIELDS
            </Typography>
            <Grid container spacing={2}>
              {patientLabTestField.length > 0 ? (
                patientLabTestField.map((d) => (
                  <>
                    <Grid item xs={12} md={6}>
                      <TextFieldComponent
                        label={d.name}
                        width={"100%"}
                        labelSize={"15px"}
                        backgroundColor="#fefefe"
                        value={d.result ? d.result : ""}
                        name={d.name}
                        alignLabel="left"
                        onChange={(e) => handleOnChange(e, d.fieldId)}
                      />
                    </Grid>
                  </>
                ))
              ) : (
                <>
                  <Grid item xs={12} md={12}>
                    <Typography textAlign={"center"}>
                      Please Select a Test
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default PatientDetailsComponent;
