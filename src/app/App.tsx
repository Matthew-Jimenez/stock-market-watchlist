import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "lib/react-query";
import { muiTheme } from "lib/material-ui";

import AppRouter from "./Router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />

        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
