import { Box, Typography } from "@mui/material";
import React, { MutableRefObject } from "react";

interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  onChange?: any;
  value?: any;
  fontWeight?: string;
  labelSize?: string | number;
  backgroundColor?: string;
  height?: string | number;
  width?: string | number;
  type?: string;
  alignLabel?: string;
  disabled?: boolean;
  name?: string;
  items?: any[];
  onKeyDown?: any;
  ref?: any;
  isError?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  onChange,
  value,
  fontWeight,
  labelSize,
  backgroundColor,
  height,
  width,
  type,
  alignLabel,
  disabled,
  name,
  items,
  onKeyDown,
  ref,
  isError,
}) => {
  return (
    <>
      <Box
        display={"flex"}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={backgroundColor}
        height={height}
        width={width}
        flexDirection={"row"}
      >
        <Box
          maxWidth={"30%"}
          width={"100%"}
          display={"flex"}
          position={"relative"}
          justifyContent={alignLabel}
          alignItems={"center"}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: `${labelSize}`,
              fontWeight: "500",
            }}
            fontWeight={fontWeight}
          >
            {label}
          </Typography>
        </Box>
        <Box
          maxWidth={"70%"}
          width={"100%"}
          display={"flex"}
          position={"relative"}
          justifyContent={"flext-start"}
          alignItems={"start"}
          flexDirection={"column"}
        >
          <select
            name={name}
            value={value}
            style={{
              height: "35px",
              width: "100%",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              fontStyle: "normal",
              border: isError ? "1px solid red" : "",
            }}
            onChange={(e) => onChange(e)}
            onKeyDown={onKeyDown}
            ref={ref}
          >
            <option value={""}>Choose an {name}</option>
            {items?.map((value, index) => (
              <>
                <option value={value}>{value}</option>
              </>
            ))}
            <hr />
            <option value={"others"}>Other</option>
          </select>
          <p
            style={{
              color: "red",
              padding: 0,
              margin: 0,
              textAlign: "left",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              letterSpacing: 2,
              fontStyle: "italic",
              fontSize: "11px",
            }}
          >
            {isError ? "* is Required" : null}
          </p>
        </Box>
      </Box>
    </>
  );
};

export default SelectField;
