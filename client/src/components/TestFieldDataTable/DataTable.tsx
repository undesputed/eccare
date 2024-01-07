import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface DataTableProps {
  column?: any;
  rows?: readonly any[];
}

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  return (
    <>
      <table className="table-container" aria-label="simple table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIELD NAME</th>
            <th className="text-right">UNIT</th>
            <th className="text-right">Reference Range</th>
            <th className="text-right">Order Number</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows ? (
            rows.map((item, index) => (
              <>
                <tr>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td className="text-left">{item?.unit}</td>
                  <td className="text-left">{item?.refRange}</td>
                  <td className="text-left">{item?.orderNum}</td>
                  <td className="text-left">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <>
              <tr>
                <td colSpan={6}>
                  <Typography textAlign={"center"}>
                    No Fields Selected
                  </Typography>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
