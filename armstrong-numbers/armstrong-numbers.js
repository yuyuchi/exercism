const reducer = (acc, cur, _idx, arr) => {
  return acc + Math.pow(cur, arr.length)
}

export const isArmstrongNumber = (num) => {
  const splitNum = [...`${num}`]
  const sum = splitNum.reduce(reducer, 0)

  return sum === num
}
