//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const caculateHypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

export const score = (x, y) => {
  const a = Math.abs(x)
  const b = Math.abs(y)

  const c = caculateHypotenuse(a, b)

  if (c <= 1) {
    // inner circle
    return 10
  } else if ( c > 1 && c <= 5) {
    // middle circle
    return 5
  } else if ( c > 5 && c <= 10) {
    // outer circle
    return 1
  } else {
    return 0
  }
}