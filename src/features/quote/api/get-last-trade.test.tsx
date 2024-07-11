import { renderHook, waitFor } from "@testing-library/react";
import { useLastTrade } from "./get-last-trade";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupMockServer } from "test-utils/mockServer";
import aaplQuote from "test-utils/fixtures/quote/aapl-quote";

setupMockServer();

describe("useLastTrade", () => {
  it("should call QuoteAPI.getLastTrade with the symbol", async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: any) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const symbol = "AAPL";

    const { result } = renderHook(() => useLastTrade({ symbol }), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(aaplQuote));
  });
});
