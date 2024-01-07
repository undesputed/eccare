import React, { ReactNode } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Box,
  ButtonGroup,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/image/logo/Logo.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

interface HeaderProps {
  helmetTitle?: string;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ helmetTitle, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currentPathname = location.pathname;

  const onNavigateHome = () => {
    navigate("/admin");
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Container maxWidth="lg">
          <AppBar
            position="relative"
            sx={{
              backgroundColor: "#fff",
              color: "#20679f",
              height: "80px",
              boxShadow: "none",
            }}
            className="AppBar-section"
          >
            <Helmet>
              <title>{helmetTitle}</title>
            </Helmet>
            <Toolbar sx={{ mt: 3, mb: 3, mx: 10 }} className="toolBar-section">
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: 100,
                  height: 100,
                  cursor: "pointer",
                  margin: "20px",
                }}
                onClick={onNavigateHome}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 3,
                  cursor: "pointer",
                  fontWeight: "bold",
                  letterSpacing: 5,
                  textIndent: 5,
                }}
                className="logo-label"
                onClick={onNavigateHome}
                color={"#1382c5"}
              >
                EC-CARE MEDICAL LABORATORY
              </Typography>
              {isMobile ? (
                <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <div>
                  <Button color="inherit" disabled>
                    About Us
                  </Button>
                  <Button color="inherit" disabled>
                    Contact Us
                  </Button>
                  <Button color="inherit" disabled>
                    Services
                  </Button>
                  <Button color="inherit" disabled>
                    FAQs
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            position={"relative"}
            bgcolor={"#fff"}
          >
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                className="sub-header"
                onClick={() => {
                  navigate("/patient");
                }}
                sx={
                  currentPathname === "/patient" ||
                  currentPathname === "/patient/detail"
                    ? {
                        backgroundColor: "#e6e6e6",
                      }
                    : null
                }
              >
                Patient
              </Button>
              <Button className="sub-header">X-Ray Patient</Button>
              <Button
                className="sub-header"
                onClick={() => {
                  navigate("/lab-test");
                }}
                sx={
                  currentPathname === "/lab-test" ||
                  currentPathname === "/lab-test/addField"
                    ? {
                        backgroundColor: "#e6e6e6",
                      }
                    : null
                }
              >
                Add Lab Test
              </Button>
              <Button className="sub-header">Lab Test Lists</Button>
              <Button className="sub-header">HMO / Affliate</Button>
              <Button className="sub-header">Med Techs</Button>
              <Button className="sub-header">Appointments</Button>
              <Button className="sub-header">Partner Clinics</Button>
              <Button className="sub-header">Partner Hospitals</Button>
            </ButtonGroup>
          </Box>
          <body>
            <Box
              sx={{
                flex: 1,
                height: "100%",
              }}
              width={"100%"}
              position={"relative"}
            >
              {children || <Outlet />}
            </Box>
          </body>
        </Container>
      </Box>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
