import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridToolbar,
} from "@mui/x-data-grid";
import { ec_care_patient } from "../entity/ec_care_patient";
import PrintIcon from "@mui/icons-material/Print";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AddIcon from "@mui/icons-material/Add";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import AnalyticsIcon from "@mui/icons-material/Analytics";

interface PatientProps {
  patients: ec_care_patient[];
  handleOnSubmit: () => void;
  handleOpenDetail: (id: GridRowId) => void;
}

const PatientComponent: React.FC<PatientProps> = ({
  handleOnSubmit,
  handleOpenDetail,
  patients,
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
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      align: "left",
      headerAlign: "left",
      renderCell(params) {
        if (params.row.fullName) {
          return <strong>{params.row.fullName?.toUpperCase()}</strong>;
        }

        return "--";
      },
    },
    {
      field: "birthday",
      headerName: "Birthday",
      width: 200,
      renderCell: (params) => {
        if (!params.row?.birthday) {
          return "--";
        }
        const dateObject = new Date(params.row?.birthday);
        const formattedDate = dateObject.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        return formattedDate;
      },
    },
    {
      field: "age",
      headerName: "Age",
      width: 50,
      renderCell(params) {
        if (params.row.age) {
          return <>{params.row.age}</>;
        }

        return "--";
      },
    },
    {
      field: "gender",
      headerName: "Sex",
      width: 50,
      renderCell(params) {
        if (params.row.gender) {
          return <>{params.row.gender}</>;
        }

        return "--";
      },
    },
    {
      field: "phone",
      headerName: "Contact",
      width: 150,
      renderCell(params) {
        if (params.row.phone) {
          return <>{params.row.phone}</>;
        }

        return "--";
      },
    },
    {
      field: "company",
      headerName: "Company",
      width: 150,
      renderCell(params) {
        if (params.row.company) {
          return <>{params.row.company}</>;
        }

        return "--";
      },
    },
    {
      field: "dateOfVisit",
      headerName: "Date Of Visit",
      align: "center",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => {
        const dateObject = new Date(params.row.dateOfVisit);
        const formattedDate = dateObject.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        return formattedDate;
      },
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
            icon={<PreviewIcon />}
            label="Preview"
            className="textPrimary"
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<AnalyticsIcon />}
            label="Finish"
            color="inherit"
            onClick={() => handleOpenDetail(id)}
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
            PATIENT LISTS
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
              endIcon={<ImportExportIcon />}
            >
              EXCEL IMPORT
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "15rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                mr: 1,
              }}
              color="secondary"
              endIcon={<AddIcon />}
            >
              ADD NORMAL PATIENT
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "15rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                mr: 1,
              }}
              color="secondary"
              endIcon={<CenterFocusWeakIcon />}
            >
              ADD X-RAY PATIENT
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
              endIcon={<PrintIcon />}
              onClick={() => handleOnSubmit()}
            >
              PRINT
            </Button>
          </div>
        </Box>
        <Box position={"relative"} mt={2}>
          <DataGrid
            rows={patients}
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

export default PatientComponent;
