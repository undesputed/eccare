import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";
// import { StyledEngineProvider } from "@mui/material/StyledEngineProvider";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

type WrapperProps = {
  children?: any;
};

const ThemeProviderWrapper: React.FC<WrapperProps> = (props) => {
  const curThemeName = localStorage.getItem("appTheme") || "PureLightTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    // <StylesProvider injectFirst>
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
    // </StylesProvider>
  );
};

export default ThemeProviderWrapper;
