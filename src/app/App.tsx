import { QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./Router";
import { queryClient } from "../lib/react-query";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />

      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
