import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import React from "react";
import katrinaSig from "../../assets/image/esig/KRISTINA ATA.png";
import sorianoSig from "../../assets/image/esig/DR SORIANO.png";

const XrayFooter = () => {
  return (
    <TableContainer
      sx={{
        pt: "50px",
        color: "black",
      }}
    >
      <Table aria-label="simple table" size="small">
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{
                border: "none",
                fontWeight: "600",
                color: "black",
                position: "relative",
              }}
            >
              <img
                src={katrinaSig}
                width={"30%"}
                style={{
                  position: "absolute",
                  top: -60,
                  left: 80,
                  zIndex: 1,
                }}
              />
              KRISTINA M. ATA
            </TableCell>
            <TableCell
              colSpan={3}
              sx={{
                border: "none",
                fontWeight: "600",
                textAlign: "right",
                color: "black",
                position: "relative",
              }}
            >
              <img
                src={sorianoSig}
                width={"50%"}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: -50,
                  right: 50,
                }}
              />
              Franco Alejandro L. Soriano MD.,FPCR
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none", color: "black" }}>
              Registered Radiologic Technologist Lic. No.:0006393
            </TableCell>
            <TableCell
              colSpan={3}
              sx={{ border: "none", textAlign: "right", color: "black" }}
            >
              Radiologist
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default XrayFooter;
