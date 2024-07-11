import { render, screen, waitFor } from "@testing-library/react";

import QuoteContainer from "./container";
import MockQueryProvider from "test-utils/MockQueryProvider";
import { setupMockServer } from "test-utils/mockServer";

setupMockServer();

describe("QuoteContainer", () => {
  describe("it fetches the quote data", () => {
    it("should render the price", async () => {
      // Arrange
      const symbol = "AAPL";

      render(<QuoteContainer symbol={symbol} />, {
        wrapper: MockQueryProvider,
      });

      // Act
      const price = screen.getByTestId("copy--underlying-price");

      // Assert
      await waitFor(() => expect(price.textContent).toBe("$100.00"));
    });

    it("should render the change", async () => {
      // Arrange
      const symbol = "AAPL";

      render(<QuoteContainer symbol={symbol} />, {
        wrapper: MockQueryProvider,
      });

      // Act
      const change = screen.getByTestId("copy--underlying-change");

      // Assert
      await waitFor(() => expect(change.textContent).toBe("-1.00 (-0.99%)"));
    });
  });

  describe("hover states", () => {
    it("should prefer the priceOverride over the data price", () => {
      // Arrange
      const symbol = "AAPL";
      const priceOverride = 100;

      render(<QuoteContainer symbol={symbol} priceOverride={priceOverride} />, {
        wrapper: MockQueryProvider,
      });

      // Act
      const price = screen.getByTestId("copy--underlying-price");

      // Assert
      expect(price.textContent).toBe("$100.00");
    });

    it("should prefer the comparePriceOverride over the data previousClose only when priceOverride also exists", async () => {
      // Arrange
      const symbol = "AAPL";
      const comparePriceOverride = 11;

      render(
        <QuoteContainer
          symbol={symbol}
          comparePriceOverride={comparePriceOverride}
          priceOverride={10}
        />,
        {
          wrapper: MockQueryProvider,
        }
      );

      // Act
      const comparePrice = screen.getByTestId("copy--underlying-change");

      await waitFor(() =>
        expect(comparePrice.textContent).toBe("-1.00 (-9.09%)")
      );
    });
  });
});
