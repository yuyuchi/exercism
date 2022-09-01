const BRACKETS_MAP = {
  "{": "}",
  "[": "]",
  "(": ")",
};
const isBracketCharacter = (s) => {
  return [
    ...Object.keys(BRACKETS_MAP),
    ...Object.values(BRACKETS_MAP),
  ].includes(s);
};
const isPairedBrackets = (openBracket, closeBracket) => {
  return BRACKETS_MAP[openBracket] === closeBracket;
};
const isEmptyStack = (stack) => stack.length === 0;

export const isPaired = (str) => {
  let template = str.split("");
  let acc = [];

  /**
   * Solving this by using stack.
   * Iterate through all the characters,
   * if the current one match the last one, pop the array,
   * otherwise push the array.
   */
  template.every((currentBracket, i) => {
    const lastBracket = acc[acc.length - 1];

    if (!isBracketCharacter(currentBracket)) return true;

    if (i !== 0 && isPairedBrackets(lastBracket, currentBracket)) {
      return acc.pop();
    } else {
      return acc.push(currentBracket);
    }
  });

  return isEmptyStack(acc);
};
