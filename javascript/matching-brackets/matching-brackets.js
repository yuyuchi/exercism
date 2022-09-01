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
  for (let i = 0; i < template.length; i++) {
    // if the current one match the last one, pop the array
    // otherwise push the array
    const lastBracket = acc[acc.length - 1];
    const currentBracket = template[i];

    if (!isBracketCharacter(currentBracket)) continue;

    if (i !== 0 && isPairedBrackets(lastBracket, currentBracket)) {
      acc.pop();
    } else {
      acc.push(template[i]);
    }
  }

  return isEmptyStack(acc);
};
