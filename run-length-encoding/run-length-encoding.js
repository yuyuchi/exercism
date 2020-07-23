//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  return input.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
};

export const decode = (input) => {
   return input.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));
};