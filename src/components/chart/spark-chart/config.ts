import { COLORS } from "lib/material-ui";
import { CallbackArgs } from "victory";

export const axisStyles = {
  axis: { display: "none" },
  tickLabels: { display: "none" },
};

export const LINE_STYLES = {
  data: {
    stroke: (d: CallbackArgs) => {
      const data = d.data;

      const initialPrice = data?.[0].close;
      const currentPrice = data?.[data.length - 1].close;

      if (!initialPrice || !currentPrice) return "#000";

      return currentPrice > initialPrice ? COLORS.chartGreen : COLORS.chartRed;
    },
  },
};

export const CHART_PADDING = 2;
