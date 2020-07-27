const calHypotenuse = (a, b) => Math.sqrt(a**2 + b**2)

export const score = (x, y) => {
  const h = calHypotenuse(x, y)

  if (h <= 1) {
    return 10
  } else if (h <= 5) {
    return 5
  } else if (h <= 10) {
    return 1
  } else {
    return 0
  }
}