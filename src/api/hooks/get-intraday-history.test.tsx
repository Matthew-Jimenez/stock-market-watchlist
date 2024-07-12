import { renderHook, waitFor } from "@testing-library/react";
import { useIntradayHistory } from "./get-intraday-history";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupMockServer } from "test-utils/mockServer";
import oneDayHistory from "test-utils/fixtures/history/oneDay";

setupMockServer();

describe("useIntradayHistory", () => {
  it("should call QuoteAPI.getIntradayHistory with the symbol", async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: any) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const symbol = "AAPL";

    const { result } = renderHook(() => useIntradayHistory({ symbol }), {
      wrapper,
    });

    await waitFor(() => expect(result.current.data).toEqual(oneDayHistory));
  });
});
