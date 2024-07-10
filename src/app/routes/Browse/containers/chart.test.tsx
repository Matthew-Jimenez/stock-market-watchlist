import { render, screen, waitFor } from "@testing-library/react";
import BrowseViewModel from "../model";
import Chart from "./chart";
import BrowseProvider from "../provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/lib/node";
import { HttpResponse, http } from "msw";
import env from "config/env";
import mondayAtCloseData from "features/company-chart/stubs/intraday-history-one-day";

jest.mock("../model");

// todo: extract shared logic to a test-utils file
const server = setupServer(
  http.get(`${env.BASE_API}/history`, ({ request }) => {
    return HttpResponse.json(mondayAtCloseData);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Chart container", () => {
  describe("model.setChartComparePoint", () => {
    it("sets the compare point to undefined when the range is 1", () => {
      const model = new BrowseViewModel();
      model.setChartComparePoint = jest.fn();

      render(
        <QueryClientProvider client={new QueryClient()}>
          <BrowseProvider model={model}>
            <Chart symbol="AAPL" width={100} height={100} />
          </BrowseProvider>
        </QueryClientProvider>
      );

      // Assert
      expect(model.setChartComparePoint).toHaveBeenCalledWith(undefined);
    });

    it("sets the compare point to the first data point when the range is not 1", async () => {
      const model = new BrowseViewModel();

      model.setChartComparePoint = jest.fn();

      render(
        <QueryClientProvider client={new QueryClient()}>
          <BrowseProvider model={model}>
            <Chart symbol="AAPL" width={100} height={100} />
          </BrowseProvider>
        </QueryClientProvider>
      );

      const range5Btn = screen.getByTestId(`button--1W`);

      range5Btn.click();

      await waitFor(() => {
        expect(model.setChartComparePoint).toHaveBeenCalledWith(
          mondayAtCloseData[0]
        );
      });
    });
  });
});
