const howLongAgo = (hours?: number) => {
  if (hours === undefined) {
    return undefined;
  }

  if (hours < 1.5) {
    return "last hour";
  }

  if (hours < 5) {
    return `last ${Math.floor(hours)} hours`;
  }

  if (hours < 48) {
    return `today`;
  }

  const hoursAsDays = hours / 24;

  if (hoursAsDays < 7) {
    return `last ${Math.ceil(hoursAsDays)} days`;
  }

  const hoursAsWeeks = hoursAsDays / 7;

  if (hoursAsWeeks < 2) {
    return `last week`;
  }

  if (hoursAsWeeks < 4) {
    return `last ${Math.floor(hoursAsWeeks)} weeks`;
  }

  const hoursAsMonths = hoursAsWeeks / 4;

  if (hoursAsMonths < 2) {
    return `last month`;
  }

  if (hoursAsMonths < 12) {
    return `last ${Math.floor(hoursAsMonths)} months`;
  }

  const hoursAsYears = hoursAsMonths / 12;

  if (hoursAsYears < 2) {
    return `last year`;
  }

  return `last ${Math.floor(hoursAsYears)} years`;
};

export default howLongAgo;
