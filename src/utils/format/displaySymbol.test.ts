import displaySymbol from "./displaySymbol";

describe("displaySymbol", () => {
  it("should return undefined if no symbol is provided", () => {
    expect(displaySymbol()).toBeUndefined();
  });

  it("should return the symbol in uppercase", () => {
    expect(displaySymbol("aapl")).toBe("AAPL");
  });
});
