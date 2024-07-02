import { QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./Router";
import { queryClient } from "../lib/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "../lib/material-ui";

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
