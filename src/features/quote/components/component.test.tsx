import { render, screen } from "@testing-library/react";
import QuoteComponent from "./component";

describe("Quote component", () => {
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

  describe("change", () => {
    it("renders the change in price and percentage", () => {
      render(<QuoteComponent price={123.45} comparePrice={100} />);

      expect(screen.getByTestId("copy--underlying-change")).toHaveTextContent(
        "23.45 (23.45%)"
      );
    });
  });
});
