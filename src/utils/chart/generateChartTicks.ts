import dateFromFormat from "../dates/dateFromFormat";

const generateChartTicks = (latestDate?: string, range?: number) => {
  const lastPointDate = dateFromFormat({
    date: latestDate,
    format: "yyyy-MM-dd HH:mm:ss",
  });

  if (!lastPointDate) {
    return [];
  }

  if (!lastPointDate.isValid) {
    console.error("Invalid date found in generateChartTicks");
    throw new Error("Invalid date");
  }

  const ticks = [];

  if (range === 1) {
    const startDate = lastPointDate
      .startOf("day")
      .plus({ hour: 9, minute: 30 });
    const endDate = lastPointDate.startOf("day").plus({ hour: 16, minute: 0 });

    let current = startDate;

    while (current <= endDate) {
      ticks.push(current.toFormat("yyyy-MM-dd HH:mm:ss"));
      current = current.plus({ minutes: 5 });
    }
  }

  return ticks;
};

export default generateChartTicks;
