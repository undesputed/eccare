import { Box } from "@mui/material";
import {
  GridColDef,
  GridActionsCellItem,
  DataGrid,
  GridToolbar,
  GridRowId,
} from "@mui/x-data-grid";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ec_care_labTest from "../../../entity/ec_care_labTest";

interface AddTestProp {
  handleOnSubmitAddTests: (id: GridRowId) => void;
  labTest: ec_care_labTest[];
}

const AddTest: React.FC<AddTestProp> = ({
  handleOnSubmitAddTests,
  labTest,
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
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            icon={<AddIcon />}
            label="add"
            onClick={() => handleOnSubmitAddTests(id)}
            color="primary"
          />,
        ];
      },
    },
  ];
  return (
    <>
      <Box position={"relative"} sx={{ color: "black" }}>
        <DataGrid
          rows={labTest}
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
    </>
  );
};

export default AddTest;
