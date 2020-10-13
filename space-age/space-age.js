const ORBITAL_PERIODS_PER_EARTH_YEAR = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}
const SECONDS_PER_EARTH_YEAR = 31557600


export const age = (planet, seconds) => {
  const earthYears = getEarthYears(seconds)
  const orbitalPeriods = exchangeRate(earthYears, ORBITAL_PERIODS_PER_EARTH_YEAR[planet])

  return round(orbitalPeriods, 2)
}

function getEarthYears(seconds) {
  return seconds / SECONDS_PER_EARTH_YEAR
}

function exchangeRate(from, to) {
  return from / to
}

function round(value, decimalPlace) {
  const digits = Math.pow(10, decimalPlace)
  return Math.round(value * digits) / digits
}