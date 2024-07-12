import Decimal from "./decimal";

describe("decimal", () => {
  describe("when value is undefined", () => {
    it("returns undefined", () => {
      expect(new Decimal().dec).toBeUndefined();
    });
  });

  describe("when followup value is undefined", () => {
    it("returns undefined", () => {
      expect(new Decimal(1)?.plus(undefined)).toBeUndefined();
    });
  });

  describe("it returns a new Decimal and does not mutate the original", () => {
    const decimal = new Decimal(1);
    const result = decimal.plus(1);

    expect(decimal.toFixed(2)).toBe("1.00");
    expect(result?.toFixed(2)).toBe("2.00");
  });
});
