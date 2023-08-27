function calculateEfficiency(k, l, m, n, total) {
  let hits = 0

  for (let i = 1; i <= total; i++) {
    if (i % k === 0 && i % n !== 0) {
      hits++
    } else if (i % l === 0 && i % n !== 0) {
      hits++
    } else if (i % m === 0 && i % n !== 0) {
      hits++
    } else if (i % n === 0) {
      hits++
    }
  }

  return hits
}

const k = 2,
  l = 3,
  m = 4,
  n = 5,
  total = 24
console.log(calculateEfficiency(k, l, m, n, total))
