import { COLORS } from "lib/material-ui";

const deriveLineColor = (price?: number, comparePrice?: number) => {
  if (price === undefined || comparePrice === undefined) {
    return COLORS.black;
  }

  if (price > comparePrice) {
    return COLORS.chartGreen;
  }

  return COLORS.chartRed;
};

export default deriveLineColor;
