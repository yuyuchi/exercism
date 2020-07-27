export const gigasecond = (moment) => {
  const gigamsec = Math.pow(10, 9) * 1000
  return new Date(Date.parse(moment) + gigamsec)
};
