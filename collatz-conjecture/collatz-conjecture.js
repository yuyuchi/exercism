export const steps = (input) => {
  if (input < 1) throw new Error('Only positive numbers are allowed')
  
  let steps = 0
  let num = input
  while(num !== 1) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num = num * 3 + 1
    }
    steps++
  }
  return steps
}
