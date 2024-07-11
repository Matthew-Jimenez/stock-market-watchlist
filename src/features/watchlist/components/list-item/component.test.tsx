import { render, screen } from "@testing-library/react";
import WatchlistListItem from "./component";

describe("WatchlistListItem", () => {
  it("should render", () => {
    render(<WatchlistListItem symbol="aapl" price={100} comparePrice={99} />);

    expect(screen.getByTestId("copy--watchlist-symbol")).toHaveTextContent(
      "AAPL"
    );

    expect(screen.getByTestId("copy--watchlist-price")).toHaveTextContent(
      "$100.00"
    );

    expect(screen.getByTestId("copy--watchlist-change")).toHaveTextContent(
      "1.00 (1.01%)"
    );
  });
});
