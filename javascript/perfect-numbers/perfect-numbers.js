/**
 * Function to calculate all proper divisors
 *
 * @param {number} n
 * @returns {number}
 */
const aliquotSum = (n) => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};

/**
 * Function to determine if a number is perfect, abundant, or deficient
 * based on Nicomachus' (60 - 120 CE) classification scheme for positive integers.
 * @param {number} num
 * @returns {string}
 */
export const classify = (num) => {
  if (num < 1)
    throw new Error("Classification is only possible for natural numbers.");

  const sum = aliquotSum(num);
  if (sum === num) {
    return "perfect";
  } else if (sum > num) {
    return "abundant";
  } else {
    return "deficient";
  }
};
