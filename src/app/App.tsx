import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./Router";
import { queryClient } from "../lib/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
