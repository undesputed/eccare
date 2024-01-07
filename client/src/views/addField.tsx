import { Paper, Box, Button, Typography, IconButton } from "@mui/material";
import React from "react";
import DataTable from "../components/TestFieldDataTable/DataTable";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../actions/hooks";
import { RootState } from "../app/store";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridActionsCellItem,
  GridToolbar,
  GridRowId,
} from "@mui/x-data-grid";
import { FaPlus, FaMinus } from "react-icons/fa6";
import ec_care_field from "../entity/ec_care_field";

interface AddFieldProps {
  fields: ec_care_field[];
  addedField: ec_care_field[];
  handleOnAddField: (fieldId: GridRowId) => void;
  handleOnSubmit: () => void;
  handleOnRemoveField: (fieldId: GridRowId) => void;
}

const AddField: React.FC<AddFieldProps> = ({
  fields,
  handleOnAddField,
  handleOnSubmit,
  addedField,
  handleOnRemoveField,
}) => {
  const navigate = useNavigate();

  const fieldColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: true,
    },
    {
      field: "name",
      headerName: "Test name",
      width: 200,
      editable: true,
    },
    {
      field: "unit",
      headerName: "Unit",
      width: 100,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={
              <IconButton
                aria-label="right"
                onClick={() => handleOnAddField(id)}
              >
                <FaPlus size={15} color="#1382c5" />
              </IconButton>
            }
            label="Edit"
            className="textPrimary"
            color="inherit"
          />,
        ];
      },
    },
  ];

  const addedColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: true,
    },
    {
      field: "name",
      headerName: "Test name",
      width: 200,
      editable: true,
    },
    {
      field: "unit",
      headerName: "Unit",
      width: 100,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={
              <IconButton
                aria-label="right"
                onClick={() => handleOnRemoveField(id)}
              >
                <FaMinus size={15} color="maroon" />
              </IconButton>
            }
            label="Edit"
            className="textPrimary"
            color="inherit"
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
            ADD FIELD
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
              startIcon={<CancelIcon />}
              onClick={() => {
                navigate("/lab-test");
              }}
            >
              CANCEL
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

        <Box
          position={"relative"}
          mt={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Box position={"relative"}>
            <DataGrid
              rows={fields}
              columns={fieldColumns}
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
          <Box position={"relative"}>
            <IconButton aria-label="delete">
              <TransferWithinAStationIcon />
            </IconButton>
          </Box>
          <Box position={"relative"}>
            <DataGrid
              rows={addedField}
              columns={addedColumns}
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
        </Box>
      </Paper>
    </>
  );
};

export default AddField;
