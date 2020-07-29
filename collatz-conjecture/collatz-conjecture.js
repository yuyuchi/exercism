export const steps = (input, step = 0) => {
  if (input <= 0) throw new Error('Only positive numbers are allowed')
  if (input === 1) return step
  
  return steps(input % 2 === 0 ? input / 2 : input * 3 + 1, step + 1)
}
