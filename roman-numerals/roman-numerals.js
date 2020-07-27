//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ROMANS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
]

export const toRoman = (input) => {
  let num = input
  let roman = ''
  
  for (let i = 0; i < ROMANS.length; i++) {
    while(num >= ROMANS[i][0]) {
      roman = `${roman}${ROMANS[i][1]}`
      num -= ROMANS[i][0]
    }
  }
  return roman
};