//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input = []) =>  {
  var output = input
  const mineWidth = input.length > 0 && input[0].length
  const mineHeight = input.length
  
  for (var i = 0; i < mineHeight; i++) {
    for (var j = 0; j < mineWidth; j++) {
  
      // calculate how many mines
      if(input[i].charAt(j) !== '*') {
        var mineAmt = 0
        for (var k = i - 1; k < i + 2; k++) {
          if(input[k]) {
            for (var s = j - 1; s < j + 2; s++){
              if (input[k].charAt(s) && input[k].charAt(s) === '*') {
                mineAmt++
              }
            }
          }
        }
        
        // fomat each string
        if (mineAmt > 0) {
          if (j === 0) {
            output[i] = mineAmt.toString().concat(output[i].substring(1, mineWidth))
          } else if (j === mineWidth - 1) {
            output[i] = output[i].substring(0, mineWidth - 1).concat(mineAmt.toString())
          } else {
            output[i] = output[i].substring(0, j).concat(mineAmt.toString()).concat(output[i].substring(j + 1, mineWidth))
          }
        }
      }
    }
  }
  return output
}