//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const digits = num.toString().length
  var sum = 0

  for (var i = 0; i < digits; i++) {
    sum = sum + Math.pow(num.toString().charAt(i), digits)
  }
  if (sum !== num) {
    return false
  }
  return true
};