import toDollarValue from "./toDollarValue";

describe("toDollarValue", () => {
  it("should return undefined if no value is provided", () => {
    expect(toDollarValue()).toBeUndefined();
  });

  it("should return the value in dollar format", () => {
    expect(toDollarValue(123.45)).toBe("$123.45");
  });

  it("should round the value to the nearest cent", () => {
    expect(toDollarValue(123.456)).toBe("$123.46");
  });
});
