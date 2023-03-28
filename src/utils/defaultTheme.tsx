import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    giga: true;
    gamer: true;
    wider: true;
  }
};

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

  breakpoints: {
    values: {
      xs: 300,
      sm: 500,
      md: 700,
      lg: 900,
      xl: 1200,
      xxl: 1500,
      giga: 1800,
      gamer: 2000,
      wider: 2500
    },
  },

  typography: {
    fontFamily: [
      "Cinzel", "serif"
    ].join(','),
  },

});
