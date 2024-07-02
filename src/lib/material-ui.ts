import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, responsiveFontSizes } from "@mui/material";

export const muiTheme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontSize: 32,
        fontWeight: 500,
      },
      h2: {
        fontSize: 24,
        fontWeight: 500,
      },
      body1: {
        fontSize: 15,
      },
      body2: {
        fontSize: 12,
      },
      subtitle1: {
        fontSize: 15,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: 12,
        fontWeight: 500,
      },
    },
  })
);
