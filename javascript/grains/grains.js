/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

export const square = (num) => {
  if (num < 1 || num > 64)
    throw new RangeError("square must be between 1 and 64");
  return BigInt(Math.pow(2, num - 1));
};

export const total = () => {
  const squareBase = Array.from({ length: 64 }, (_v, i) => i + 1);
  return squareBase.reduce((prev, curr) => BigInt(prev) + square(curr), 0);
};
