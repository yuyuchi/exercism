const BRACKETS_MAP = {
  "{": "}",
  "[": "]",
  "(": ")",
};
const checkIsBracket = (s) => {
  return [
    ...Object.keys(BRACKETS_MAP),
    ...Object.values(BRACKETS_MAP),
  ].includes(s);
};
export const isPaired = (str) => {
  let template = str.split("");
  let acc = [];
  for (let i = 0; i < template.length; i++) {
    // if the current one match the last one, pop the array
    // otherwise push the array
    if (!checkIsBracket(template[i])) continue;

    if (i !== 0 && BRACKETS_MAP[acc[acc.length - 1]] === template[i]) {
      acc.pop();
    } else {
      acc.push(template[i]);
    }
  }

  if (acc.length === 0) return true;
  return false;
};
