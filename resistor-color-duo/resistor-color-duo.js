//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const RESISTOR_COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]

export const decodedValue = (colorBands) => {
  const selectedColors = colorBands.slice(0, 2)

  const value = selectedColors
    .map(color => RESISTOR_COLORS.indexOf(color))
    .join('')
  
  return Number(value)
}
