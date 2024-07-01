const toDollarValue = (value?: number) => {
  try {
    if (value === undefined) {
      return undefined;
    }

    const roundToNearestCent = (value: number) => Math.round(value * 100) / 100;

    return `$${roundToNearestCent(value).toFixed(2)}`;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default toDollarValue;
