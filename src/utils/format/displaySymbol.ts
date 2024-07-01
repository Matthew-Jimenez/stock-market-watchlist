const displaySymbol = (symbol?: string) => {
  if (!symbol) {
    return undefined;
  }

  return symbol.toUpperCase();
};

export default displaySymbol;
