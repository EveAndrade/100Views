import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#F0BE89",
      dark: "#DB752B"
    },
    secondary: {
      main: "#EBA731",
    }
  },
typography: {
  fontFamily: [
    "Cinzel", "serif"
  ].join(','),
},

});
