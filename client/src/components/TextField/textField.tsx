import { Box, Typography } from "@mui/material";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MutableRefObject,
} from "react";

interface textFieldProps {
  label?: string;
  placeholder?: string;
  onChange: any;
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
  autoFocus?: boolean;
  onKeyDown?: any;
  ref?: any;
  isError?: boolean;
}

const TextField: React.FC<textFieldProps> = ({
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
  autoFocus,
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
              wordBreak: "break-all",
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
          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            style={{
              height: "35px",
              width: "100%",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              fontStyle: "normal",
              border: isError ? "1px solid red" : "",
            }}
            disabled={disabled ? disabled : false}
            autoFocus={autoFocus ? autoFocus : false}
            onKeyDown={onKeyDown}
            ref={ref}
          />
          {/* <p
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
          </p> */}
        </Box>
      </Box>
    </>
  );
};

export default TextField;
