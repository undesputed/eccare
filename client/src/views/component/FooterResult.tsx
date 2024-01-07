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
import emmanSig from "../../assets/image/esig/emmanuel garces.png";
import cenizaSig from "../../assets/image/esig/DOC CENIZA.png";
import lorieSig from "../../assets/image/esig/DOC Lorie.png";
import zamoraSig from "../../assets/image/esig/Doc_Zamora_Esig-removebg-preview.png";
import pippoSig from "../../assets/image/esig/DR. PIPPO MANGUBAT.png";
import romeroSig from "../../assets/image/esig/DR. ROMERO.png";
import maritesSig from "../../assets/image/esig/MAAM_MARITES-removebg-preview.png";
import rrrcvSig from "../../assets/image/esig/rrcv.png";
import { useAppDispatch, useAppSelector } from "../../actions/hooks";
import katrinaSig from "../../assets/image/esig/KRISTINA ATA.png";
import sorianoSig from "../../assets/image/esig/DR SORIANO.png";
import { RootState } from "../../app/store";

const FooterResult = () => {
  const medTech = useAppSelector((state: RootState) => state.patient.medTech);
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
              {(function () {
                let sig = [];
                switch (medTech.toString()) {
                  case "0":
                    sig.push(
                      <>
                        <img
                          src={rrrcvSig}
                          width={"30%"}
                          style={{
                            position: "absolute",
                            top: -40,
                            left: 80,
                            zIndex: 1,
                          }}
                        />
                      </>
                    );
                    break;
                  case "1":
                    sig.push(
                      <>
                        <img
                          src={emmanSig}
                          width={"30%"}
                          style={{
                            position: "absolute",
                            top: -50,
                            left: 80,
                            zIndex: 1,
                          }}
                        />
                      </>
                    );
                    break;
                  case "2":
                    sig.push(
                      <>
                        <img
                          src={maritesSig}
                          width={"30%"}
                          style={{
                            position: "absolute",
                            top: -50,
                            left: 80,
                            zIndex: 1,
                          }}
                        />
                      </>
                    );
                    break;
                }
                return sig;
              })()}
              {(function () {
                let tech: string = "";
                switch (medTech.toString()) {
                  case "0":
                    tech = "ROCHELLE REUBEN C. VALLECERA, RMT, MLS (ASCPi)";
                    break;
                  case "1":
                    tech = "EMMANUEL B. GARCES, RMT";
                    break;
                  case "2":
                    tech = "MARITES DE LOS CIENTOS, RMT";
                    break;
                }

                return tech;
              })()}
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
                src={zamoraSig}
                width={"50%"}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: -50,
                  right: 50,
                }}
              />
              THEODORE M. ZAMORA, MD, FPSP
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} sx={{ border: "none", color: "black" }}>
              {(function () {
                switch (medTech.toString()) {
                  case "0":
                    return "Medical Technologist     Lic. No.: 0108908";
                  case "1":
                    return "Medical Technologist     Lic. No.: 0099087";
                  case "2":
                    return "Medical Technologist     Lic. No.: 0028407";
                }
              })()}
            </TableCell>
            <TableCell
              colSpan={3}
              sx={{
                border: "none",
                textAlign: "right",
                color: "black",
              }}
            >
              Pathologist Lic. No.: 93576
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FooterResult;
