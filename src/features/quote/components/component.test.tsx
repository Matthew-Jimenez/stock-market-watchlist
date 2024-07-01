import { render, screen } from "@testing-library/react";
import QuoteComponent from "./component";

describe("Quote component", () => {
  describe("underlying symbol", () => {
    it("renders the symbol in all caps", () => {
      render(<QuoteComponent symbol="aapl" />);

      expect(screen.getByTestId("copy--underlying-symbol")).toHaveTextContent(
        "AAPL"
      );
    });

    it("renders a loading skeleton when no symbol is provided", () => {
      render(<QuoteComponent />);

      expect(
        screen.getByTestId("loading-skeleton--underlying-symbol")
      ).toBeInTheDocument();
    });
  });

  describe("price", () => {
    it("renders the price in dollar format", () => {
      render(<QuoteComponent price={123.45} />);

      expect(screen.getByTestId("copy--underlying-price")).toHaveTextContent(
        "$123.45"
      );
    });

    it("renders a loading skeleton when no price is provided", () => {
      render(<QuoteComponent />);

      expect(
        screen.getByTestId("loading-skeleton--underlying-price")
      ).toBeInTheDocument();
    });
  });
});
