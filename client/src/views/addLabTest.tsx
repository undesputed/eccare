import React, { MutableRefObject } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
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
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import DataTable from "../components/TestFieldDataTable/DataTable";
import { useNavigate } from "react-router-dom";
import ec_care_field from "../entity/ec_care_field";
import {
  GridColDef,
  GridActionsCellItem,
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import { FaMinus } from "react-icons/fa6";
import ec_care_labTest from "../entity/ec_care_labTest";

interface labTestProps {
  handleOnSubmit: () => void;
  handleOnChange: (event: any) => void;
  addedField: ec_care_field[];
  labTest: ec_care_labTest;
  labTestError: boolean;
}

const LabTestComponent: React.FC<labTestProps> = ({
  handleOnSubmit,
  handleOnChange,
  addedField,
  labTest,
  labTestError,
}) => {
  const navigate = useNavigate();

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
    { field: "unit", headerName: "Unit", width: 150 },
    { field: "maleRefRange", headerName: "Male Ref. Range", width: 200 },
    { field: "femaleRefRange", headerName: "Female Ref. Range", width: 200 },
    { field: "refRange", headerName: "Ref. Range", width: 150 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={() => onClickDelete(id)}
            color="warning"
          />,
        ];
      },
    },
  ];
  return (
    <>
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
                mr: 1,
              }}
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              CLEAR FIELDS
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
              endIcon={<SendIcon />}
              onClick={() => handleOnSubmit()}
            >
              SUBMIT
            </Button>
          </div>
        </Box>
        <Box position={"relative"} mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextFieldComponent
                label="Lab Test Name"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                value={labTest.name}
                name="name"
                onChange={handleOnChange}
                autoFocus={true}
                isError={labTestError}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldComponent
                label="Lab Test Description"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                name="description"
                value={labTest.description}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldComponent
                label="Lab Test Price"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                name="price"
                value={labTest.price}
                onChange={handleOnChange}
                type="number"
                isError={labTestError}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectField
                label="Lab Test Type"
                width={"100%"}
                labelSize={"15px"}
                backgroundColor="#fefefe"
                items={[
                  "HEMATOLOGY RESULT",
                  "IMMUNO-SEROLOGY RESULT",
                  "CLINICAL MICROSCOPY RESULT",
                  "CLINICAL CHEMISTRY RESULT",
                  "IMAGING",
                  "URINALYSIS RESULT",
                  "STOOL EXAM RESULT",
                ]}
                name="type"
                value={labTest.type}
                onChange={handleOnChange}
                isError={labTestError}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          mt={5}
        >
          <Typography
            variant="h4"
            component={"h3"}
            color={"black"}
            alignContent={"center"}
            mb={2}
          >
            TEST FIELDS
          </Typography>
          <div>
            <Button
              sx={{
                height: "30px",
                width: "10rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                color: "#0d7f3f",
                mr: 1,
              }}
              endIcon={<PlaylistAddIcon />}
              onClick={() => navigate("/lab-test/addField")}
            >
              ADD FIELDS
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "15rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                color: "#1382c5",
                ml: 1,
              }}
              endIcon={<AddShoppingCartIcon />}
            >
              ADD NEW FIELDS
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "15rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                ml: 1,
              }}
              color="secondary"
              endIcon={<ChangeCircleIcon />}
            >
              CHANGE ORDER
            </Button>
          </div>
        </Box>
        <Box position={"relative"} mt={2}>
          <DataGrid
            rows={addedField}
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
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            sx={{
              borderRadius: 0,
            }}
            rowHeight={35}
          />
        </Box>
      </Paper>
    </>
  );
};

export default LabTestComponent;
