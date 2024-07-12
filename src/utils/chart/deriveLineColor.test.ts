import { COLORS } from "lib/material-ui";
import deriveLineColor from "./deriveLineColor";

describe("deriveLineColor", () => {
  it("should return black if price is undefined", () => {
    const price = undefined;
    const comparePrice = 100;

    const result = deriveLineColor(price, comparePrice);

    expect(result).toEqual(COLORS.black);
  });

  it("should return black if comparePrice is undefined", () => {
    const price = 100;
    const comparePrice = undefined;

    const result = deriveLineColor(price, comparePrice);

    expect(result).toEqual(COLORS.black);
  });

  it("should return green if price is greater than comparePrice", () => {
    const price = 100;
    const comparePrice = 50;

    const result = deriveLineColor(price, comparePrice);

    expect(result).toEqual(COLORS.chartGreen);
  });

  it("should return red if price is less than comparePrice", () => {
    const price = 50;
    const comparePrice = 100;

    const result = deriveLineColor(price, comparePrice);

    expect(result).toEqual(COLORS.chartRed);
  });
});
