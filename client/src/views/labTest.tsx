import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Paper,
  Box,
  Typography,
  Button,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ec_care_labTest from "../entity/ec_care_labTest";
import {
  GridColDef,
  GridActionsCellItem,
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface LabTestProp {
  onClickAddLabTest: () => void;
  labTests: ec_care_labTest[];
}

const LabTestView: React.FC<LabTestProp> = ({
  onClickAddLabTest,
  labTests,
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
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
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
            LABORATORY TEST MANAGEMENT
          </Typography>
          <div>
            <Button
              sx={{
                height: "30px",
                width: "13rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                ml: 1,
              }}
              endIcon={<AddIcon />}
              onClick={onClickAddLabTest}
              color="secondary"
            >
              ADD LAB TEST
            </Button>
            <Button
              sx={{
                height: "30px",
                width: "13rem",
                borderRadius: 0,
                border: "1px solid #20679f",
                ml: 1,
              }}
              endIcon={<AddIcon />}
              onClick={onClickAddLabTest}
              color="secondary"
            >
              ADD NEW PACKAGE
            </Button>
          </div>
        </Box>
        <Box position={"relative"} mt={2}>
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
          />
        </Box>
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          mt={2}
        >
          <Typography
            variant="h4"
            component={"h3"}
            color={"black"}
            alignContent={"center"}
          >
            LABORATORY PACKAGES
          </Typography>
        </Box>
        <Box position={"relative"} mt={2}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ borderRadius: 0, border: "1px solid #ccc" }}
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </>
  );
};

export default LabTestView;
