import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

import { renderHook, waitFor } from "@testing-library/react";
import { useLastTrade } from "./get-last-trade";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const server = setupServer(
  http.get("http://localhost:3000/api/last-trade", ({ request }) => {
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

    await waitFor(() =>
      expect(result.current.data).toEqual({ greeting: "hello there" })
    );
  });
});
