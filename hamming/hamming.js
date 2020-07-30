export const compute = (strand1, strand2) => {  
  if (strand1.length !== strand2.length) {
    if (!strand1.length) throw new Error('left strand must not be empty')
    if (!strand2.length) throw new Error('right strand must not be empty')
    throw new Error('left and right strands must be of equal length')
  }
  return [...strand1].reduce((acc, val, idx) => acc + (val !== [...strand2][idx]), 0)
}
