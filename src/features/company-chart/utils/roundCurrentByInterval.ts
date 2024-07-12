import { DateTime } from "luxon";
import dateFromFormat from "utils/dates/dateFromFormat";

interface Params {
  date?: string;
  interval?: {
    value: number;
    unit: "min" | "hour" | "day" | "week";
  };
}

const roundCurrentByInterval = ({ date, interval }: Params) => {
  const dateObj = dateFromFormat({ date, format: "yyyy-MM-dd HH:mm:ss" })?.set({
    second: 0,
  });

  const { value, unit } = interval || {};

  if (!dateObj) {
    return;
  }

  switch (unit) {
    case "min": {
      // if the dateObj is already at 4pm or greater then we just return the dateObj

      if (dateObj?.hour && dateObj.hour >= 16) {
        return dateObj?.toFormat("yyyy-MM-dd HH:mm:ss");
      }

      // round to nearest 5 minuts
      const minutes = Math.floor(dateObj.minute / 5) * 5;

      return dateObj
        .set({ minute: minutes })
        ?.plus({ minute: value })
        .toFormat("yyyy-MM-dd HH:mm:ss");
    }

    case "hour": {
      if (dateObj?.hour && dateObj.hour >= 16) {
        return dateObj?.toFormat("yyyy-MM-dd HH:mm:ss");
      }

      return dateObj?.plus({ hour: value }).toFormat("yyyy-MM-dd HH:mm:ss");
    }

    case "day": {
      return dateObj
        ?.set({ hour: 0, minute: 0, second: 0 })
        .toFormat("yyyy-MM-dd HH:mm:ss");
    }

    case "week": {
      return dateObj
        ?.set({ weekday: 1, hour: 0, minute: 0, second: 0 })
        .toFormat("yyyy-MM-dd HH:mm:ss");
    }

    default: {
      return dateObj?.set({ second: 0 }).toFormat("yyyy-MM-dd HH:mm:ss");
    }
  }
};

export default roundCurrentByInterval;
