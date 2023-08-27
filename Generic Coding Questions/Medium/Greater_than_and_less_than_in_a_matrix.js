function findSpecialValuesWithIndices(matrix) {
  const specialValues = []

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const value = matrix[row][col]
      let rowCheck = true
      let colCheck = true

      for (let i = 0; i < matrix[row].length; i++) {
        if (matrix[row][i] > value) {
          rowCheck = false
          break
        }
      }

      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][col] < value) {
          colCheck = false
          break
        }
      }

      if (rowCheck && colCheck) {
        specialValues.push({
          value: value,
          row: row + 1,
          col: col + 1,
        })
      }
    }
  }

  return specialValues
}

const matrix = [
  [7, 8, 7],
  [5, 4, 2],
  [8, 6, 7],
]

console.log(findSpecialValuesWithIndices(matrix))
