import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

import { renderHook, waitFor } from "@testing-library/react";
import { useIntradayHistory } from "./get-intraday-history";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// todo: extract shared logic to a test-utils file
const server = setupServer(
  http.get("http://localhost:3000/api/history", ({ request }) => {
    const url = new URL(request.url);

    const symbol = url.searchParams.get("symbol");

    if (symbol !== "AAPL") {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({ greeting: "hello there" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

    await waitFor(() =>
      expect(result.current.data).toEqual({ greeting: "hello there" })
    );
  });
});
