import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import React from "react";
import logo from "../../assets/image/logo/Logomark-01.png";
import { Helmet } from "react-helmet-async";
import docJin from "../../assets/image/esig/DOC JIN.png";
import { useAppSelector } from "../../actions/hooks";
import { RootState } from "../../app/store";
import MedCertComponent from "../../views/medCerts";

const MedCert = () => {
  const medCerts = useAppSelector((state: RootState) => state.global.medCerts);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <>
      <MedCertComponent medCert={medCerts} formattedDate={formattedDate} />
    </>
  );
};

export default MedCert;
