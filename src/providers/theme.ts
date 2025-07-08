"use client";

import { createTheme } from "@mui/material";


export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
    disableCssColorScheme: true,
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#F9F9FE",
          paper: "#EEEEF9",
        },
        primary: { main: "#06669e" },
        secondary: { main: "#1e88e5" }, // Vibrant pink
      },
    },
    dark: {
      palette: {
        background: {
          default: "#111111",
          paper: "#131313",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
