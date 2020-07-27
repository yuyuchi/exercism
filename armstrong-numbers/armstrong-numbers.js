export const isArmstrongNumber = (num) => {
  const digits = num.toString().length
  let sum = 0

  for (let i = 0; i < digits; i++) {
    sum += Math.pow(num.toString().charAt(i), digits)
  }

  return sum === num ? true : false
}