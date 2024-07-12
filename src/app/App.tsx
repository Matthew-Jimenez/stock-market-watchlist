import { CssBaseline, ThemeProvider } from "@mui/material";
import * as Sentry from "@sentry/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "lib/react-query";
import { muiTheme } from "lib/material-ui";

import AppRouter from "./Router";

function App() {
  return (
    <Sentry.ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />

          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
}

export default App;
