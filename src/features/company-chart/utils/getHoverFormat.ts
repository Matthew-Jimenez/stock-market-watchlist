const getHoverFormat = (range: number) => {
  // range is less than 1 week
  let formatString = "MMM dd h:mma";

  if (range >= 90) {
    formatString = "MMM dd yyyy";
  }

  return formatString;
};

export default getHoverFormat;
