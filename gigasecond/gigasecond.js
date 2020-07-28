const GIGA_SECONDS = 10 ** 9
const toMilliSeconds = seconds => seconds * 1000

export const gigasecond = (date) => { 
  return new Date(date.getTime() + toMilliSeconds(GIGA_SECONDS))
}
