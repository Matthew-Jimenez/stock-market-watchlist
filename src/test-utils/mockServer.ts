import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

import env from "config/env";
import oneDayHistory from "./fixtures/history/oneDay";

// Define handlers
export const createHandlers = () => [
  http.get(`${env.BASE_API}/history`, () => {
    return HttpResponse.json(oneDayHistory);
  }),
  http.get(`${env.BASE_API}/last-trade`, ({ request }) => {
    const url = new URL(request.url);

    const symbol = url.searchParams.get("symbol");

    if (symbol !== "AAPL") {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({ greeting: "hello there" });
  }),
  // Add more handlers...
];

// Initialize the mock server with handlers
export const server = setupServer(...createHandlers());

export const setupMockServer = () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};
