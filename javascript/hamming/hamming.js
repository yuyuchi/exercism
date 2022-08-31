export const compute = (a, b) => {  
  if (a.length !== b.length) {
    if (!a.length) throw new Error('left strand must not be empty')
    if (!b.length) throw new Error('right strand must not be empty')
    throw new Error('left and right strands must be of equal length')
  }
  return [...a].reduce((acc, val, idx) => acc + (val !== [...b][idx]), 0)
}
