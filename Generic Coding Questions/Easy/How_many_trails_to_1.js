function numberOfStepsToOne(x) {
  if (x <= 0) {
    return 0
  }
  let steps = 0
  while (x !== 1) {
    if (x % 2 === 0) {
      x /= 2
    } else {
      x = 3 * x + 1
    }
    steps++
  }
  return steps
}

console.log(numberOfStepsToOne(12))
