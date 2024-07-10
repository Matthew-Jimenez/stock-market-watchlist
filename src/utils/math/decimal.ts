import { Decimal as DDecimal } from "decimal.js";

class Decimal {
  public dec?: DDecimal;

  constructor(_value?: string | number) {
    this.dec = _value !== undefined ? new DDecimal(_value) : undefined;
  }

  public plus(adden?: string | number): Decimal | undefined {
    if (adden === undefined) {
      return undefined;
    }

    return new Decimal(this.dec?.plus(adden)?.toString());
  }

  public minus(subtrahend?: string | number): Decimal | undefined {
    if (subtrahend === undefined) {
      return undefined;
    }

    return new Decimal(this.dec?.minus(subtrahend)?.toString());
  }

  public div(divisor?: string | number): Decimal | undefined {
    if (divisor === undefined) {
      return undefined;
    }

    return new Decimal(this.dec?.div(divisor).toString());
  }

  public times(multiplier?: string | number): Decimal | undefined {
    if (multiplier === undefined) {
      return undefined;
    }

    return new Decimal(this.dec?.times(multiplier)?.toString());
  }

  public toNearest(nearest: number): Decimal | undefined {
    if (this.dec === undefined) {
      return undefined;
    }

    return new Decimal(this.dec.toNearest(nearest)?.toString());
  }

  public toFixed(decimalPlaces: number): string | undefined {
    if (this.dec === undefined) {
      return undefined;
    }

    return this.dec.toFixed(decimalPlaces);
  }
}

export default Decimal;
