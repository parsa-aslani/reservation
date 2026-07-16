import { createTheme } from "@mui/material";
export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#008B8B",
    },
    secondary: {
      main: "#1ABC9C",
    },
  },
  typography: {
    fontFamily: "vazir",
  },
});
export const lighttheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#008B8B",
    },
    secondary: {
      main: "#1ABC9C",
    },
  },
  typography: {
    fontFamily: "vazir",
  },
});
