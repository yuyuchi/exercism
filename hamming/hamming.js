export const compute = (strand1, strand2) => {  
  if (strand1.length !== strand2.length) {
    if (strand1 === '') throw new Error('left strand must not be empty')
    if (strand2 === '') throw new Error('right strand must not be empty')
    throw new Error('left and right strands must be of equal length')
  }

  let hummingDistance = 0
  for (let i = 0; i < strand1.length; i++) {
    if (strand1.charAt(i) !== strand2.charAt(i)) hummingDistance++
  }
  return hummingDistance
}
