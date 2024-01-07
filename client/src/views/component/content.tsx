import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";

interface ContentProps {
  labTestfields: any;
  type: string;
}

const TestContent: React.FC<ContentProps> = ({ labTestfields, type }) => {
  const [background, setBackground] = React.useState<string>("");

  React.useEffect(() => {
    function setBackgroundColor() {
      if (type === "HEMATOLOGY RESULT") {
        setBackground("#d9d3e9");
      } else if (type === "IMMUNO-SEROLOGY RESULT") {
        setBackground("#d9ead3");
      } else if (type === "CLINICAL MICROSCOPY RESULT") {
        setBackground("#D0E2F3");
      } else if (type === "CLINICAL CHEMISTRY RESULT") {
        setBackground("#D9EAD3");
      } else if (type === "IMAGING") {
        setBackground("#FFFFFF");
      } else {
        setBackground("#FFF3CC");
      }
    }

    setBackgroundColor();
  }, [background, type]);

  return (
    <>
      <TableContainer
        sx={{
          flex: 1,
        }}
      >
        <Table
          aria-label="simple table"
          size="small"
          sx={{
            color: "black",
            overflow: "hidden",
          }}
        >
          <TableBody
            sx={{
              color: "black",
            }}
          >
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{
                  border: "1px solid #ccc",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: { background },
                }}
              >
                {type}
              </TableCell>
            </TableRow>
            <TableRow>
              {(function () {
                let header: any = [];

                if (type.toUpperCase() === "HEMATOLOGY RESULT") {
                  header.push(
                    <>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        TEST NAME
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        RESULT
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        UNIT
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "2px solid #ccc",
                          color: "black",
                        }}
                      >
                        REFERENCE RANGE
                      </TableCell>
                    </>
                  );
                } else {
                  header.push();
                }
                return header;
              })()}
            </TableRow>
            {(function () {
              let content = [];

              if (type.toUpperCase() === "URINALYSIS RESULT") {
                content.push(
                  <>
                    <Grid container sx={{ border: "2px solid #ccc" }}>
                      <Grid item xs={6} md={6}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            border: "1px solid #ccc",
                            color: "black",
                            px: 1.5,
                          }}
                        >
                          PHYSICAL AND CHEMICAL ANALYSIS
                        </Typography>
                        {labTestfields &&
                          labTestfields.map((d: any, index: number) => {
                            if (index <= 11) {
                              return (
                                <Grid container>
                                  <Grid item xs={6} md={6}>
                                    <TableCell
                                      align="left"
                                      sx={{ border: "none" }}
                                    >
                                      {d.name.toUpperCase()}
                                    </TableCell>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={6}
                                    md={6}
                                    sx={{
                                      border: "none",
                                      fontWeight: "bold",
                                      color: "black",
                                    }}
                                  >
                                    <TableCell
                                      align="center"
                                      sx={{
                                        border: "none",
                                        fontWeight: "bold",
                                        color: "black",
                                      }}
                                    >
                                      {d.result}
                                    </TableCell>
                                  </Grid>
                                </Grid>
                              );
                            }
                          })}
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            border: "1px solid #ccc",
                            color: "black",
                            px: 1.5,
                          }}
                        >
                          MICROSCOPIC ANALYSIS
                        </Typography>
                        {labTestfields &&
                          labTestfields.map((d: any, index: number) => {
                            if (index >= 12) {
                              return (
                                <Grid container>
                                  <Grid item xs={4} md={4}>
                                    <TableCell
                                      align="left"
                                      sx={{ border: "none" }}
                                    >
                                      {d.name.toUpperCase()}
                                    </TableCell>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={4}
                                    md={4}
                                    sx={{
                                      border: "none",
                                      fontWeight: "bold",
                                      color: "black",
                                    }}
                                  >
                                    <TableCell
                                      align="center"
                                      sx={{
                                        border: "none",
                                        fontWeight: "bold",
                                        color: "black",
                                      }}
                                    >
                                      {d.result}
                                    </TableCell>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={4}
                                    md={4}
                                    sx={{
                                      border: "none",
                                      fontWeight: "bold",
                                      color: "black",
                                    }}
                                  >
                                    <TableCell
                                      align="center"
                                      sx={{ border: "none" }}
                                    >
                                      {d.other}
                                    </TableCell>
                                  </Grid>
                                </Grid>
                              );
                            }
                          })}
                      </Grid>
                    </Grid>
                  </>
                );
                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              if (type.toUpperCase() === "HEMATOLOGY RESULT") {
                content.push(
                  <TableRow>
                    <TableCell
                      align="left"
                      colSpan={4}
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #ccc",
                        color: "black",
                      }}
                    >
                      BLOOD COUNT
                    </TableCell>
                  </TableRow>
                );

                labTestfields &&
                  labTestfields.map((d: any, index: number) => {
                    if (index === 5) {
                      content.push(
                        <>
                          <TableRow>
                            <TableCell
                              align="left"
                              colSpan={4}
                              sx={{
                                fontWeight: "bold",
                                border: "2px solid #ccc",
                                color: "black",
                              }}
                            >
                              DIFFERENTIAL COUNT
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    }

                    if (index === 11) {
                      content.push(
                        <TableRow>
                          <TableCell
                            align="left"
                            colSpan={4}
                            sx={{
                              fontWeight: "bold",
                              border: "2px solid #ccc",
                              color: "black",
                            }}
                          >
                            RBC PARAMETERS
                          </TableCell>
                        </TableRow>
                      );
                    }
                    content.push(
                      <TableRow
                        sx={{
                          borderRight: "2px solid #ccc",
                          borderLeft: "2px solid #ccc",
                        }}
                      >
                        <TableCell
                          align="left"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.name.toUpperCase()}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {d.result}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            display: "flex",
                            justifyContent: "space-around",
                            color: "black",
                          }}
                        >
                          {d.unit}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.refRange}
                        </TableCell>
                      </TableRow>
                    );
                  });
                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              if (type.toUpperCase() === "STOOL EXAM RESULT") {
                content.push(
                  <TableRow>
                    <TableCell
                      align="left"
                      colSpan={4}
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #ccc",
                        color: "black",
                      }}
                    >
                      GROSS EXAM
                    </TableCell>
                  </TableRow>
                );

                labTestfields &&
                  labTestfields.map((d: any, index: number) => {
                    if (index === 2) {
                      content.push(
                        <TableRow>
                          <TableCell
                            align="left"
                            colSpan={4}
                            sx={{
                              fontWeight: "bold",
                              border: "2px solid #ccc",
                              color: "black",
                            }}
                          >
                            MICROSCOPIC ANALYSIS
                          </TableCell>
                        </TableRow>
                      );
                    }
                    content.push(
                      <TableRow
                        sx={{
                          borderRight: "2px solid #ccc",
                          borderLeft: "2px solid #ccc",
                        }}
                      >
                        <TableCell
                          align="left"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.name.toUpperCase()}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {d.result}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            display: "flex",
                            justifyContent: "space-around",
                            color: "black",
                          }}
                        >
                          {type.toUpperCase() === "URINALYSIS RESULT" ||
                          type.toUpperCase() === "STOOL EXAM RESULT"
                            ? d.other
                            : d.unit}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ border: "none", color: "black" }}
                        >
                          {type.toUpperCase() === "URINALYSIS RESULT" ||
                          type.toUpperCase() === "STOOL EXAM RESULT"
                            ? null
                            : d.refRange}
                        </TableCell>
                      </TableRow>
                    );
                  });

                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              if (
                type.toUpperCase() === "IMMUNO-SEROLOGY RESULT" ||
                type.toUpperCase() === "CLINICAL CHEMISTRY RESULT"
              ) {
                content.push(
                  <TableRow
                    sx={{
                      borderRight: "2px solid #ccc",
                      borderLeft: "2px solid #ccc",
                    }}
                  >
                    <TableCell
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #ccc",
                        color: "black",
                      }}
                    >
                      ANALYTE
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #ccc",
                        color: "black",
                      }}
                    >
                      RESULT
                    </TableCell>
                  </TableRow>
                );
                labTestfields &&
                  labTestfields.map((d: any, index: number) => {
                    content.push(
                      <TableRow
                        sx={{
                          borderRight: "2px solid #ccc",
                          borderLeft: "2px solid #ccc",
                        }}
                      >
                        <TableCell
                          align="center"
                          sx={{ border: "none", color: "black" }}
                        >
                          {d.name.toUpperCase()}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "none",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {d.result}
                        </TableCell>
                      </TableRow>
                    );
                  });
                content.push(
                  <TableRow
                    sx={{
                      border: "2px solid #ccc",
                    }}
                  ></TableRow>
                );
              }

              return content;
            })()}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TestContent;
