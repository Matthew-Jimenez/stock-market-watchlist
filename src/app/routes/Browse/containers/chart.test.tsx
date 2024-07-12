import { render, screen, waitFor } from "@testing-library/react";

import { setupMockServer } from "test-utils/mockServer";
import QueryProvider from "test-utils/MockQueryProvider";

import BrowseViewModel from "../model";
import Chart from "./chart";
import BrowseProvider from "../provider";
import oneDayHistory from "test-utils/fixtures/history/oneDay";

jest.mock("../model");

setupMockServer();

const renderChartWithProvider = (model: BrowseViewModel) => {
  render(
    <BrowseProvider model={model}>
      <Chart symbol="AAPL" width={100} height={100} />
    </BrowseProvider>,
    { wrapper: QueryProvider }
  );
};

describe("Chart container", () => {
  let model: BrowseViewModel;

  beforeEach(() => {
    model = new BrowseViewModel();
    model.setChartComparePoint = jest.fn();
  });

  describe("model.setChartComparePoint", () => {
    it("sets the compare point to undefined when the range is 1", () => {
      renderChartWithProvider(model);

      expect(model.setChartComparePoint).toHaveBeenCalledWith(undefined);
    });

    it("sets the compare point to the first data point when the range is not 1", async () => {
      renderChartWithProvider(model);

      screen.getByTestId(`button--1W`).click();

      const expectation = oneDayHistory[0];
      await waitFor(() => {
        expect(model.setChartComparePoint).toHaveBeenCalledWith(expectation);
      });
    });
  });
});
