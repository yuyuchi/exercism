//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ROMAN_NUMERALS = [
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
  var num = input
  var roman = ''
  
  for (var i = 0; i < ROMAN_NUMERALS.length; i++) {
    while(num >= ROMAN_NUMERALS[i][0]) {
      roman = roman.concat(ROMAN_NUMERALS[i][1])
      num = num - ROMAN_NUMERALS[i][0]
    }
  }
  return roman
};