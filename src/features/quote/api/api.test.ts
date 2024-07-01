import API from "./api";

describe("QuoteAPI", () => {
  describe("getLastTrade", () => {
    it("should call the api with the correct path", () => {
      const mockGet = jest.fn();
      const api = new API();
      api.get = mockGet;

      api.getLastTrade("AAPL");

      expect(mockGet).toHaveBeenCalledWith("/last-trade?symbol=AAPL");
    });
  });
});
