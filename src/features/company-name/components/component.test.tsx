import { render, screen } from "@testing-library/react";
import Component from "./component";

describe("Quote component", () => {
  describe("price", () => {
    it("renders the price in dollar format", () => {
      render(<Component name="HELLO" />);

      expect(screen.getByTestId("copy--company-name")).toHaveTextContent(
        "HELLO"
      );
    });

    it("renders a loading skeleton when no price is provided", () => {
      render(<Component />);

      expect(
        screen.getByTestId("loading-skeleton--company-name")
      ).toBeInTheDocument();
    });
  });
});
