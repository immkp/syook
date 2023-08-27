function isPerfectNumber(number) {
  if (number <= 0) {
    return false
  }
  let sumOfFactors = 0
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sumOfFactors += i
    }
  }
  if (sumOfFactors === number) return "Perfect"
  else if (sumOfFactors > number) return "Abundant"
  else if (sumOfFactors < number) return "Deficient"
}

console.log(isPerfectNumber(6))
console.log(isPerfectNumber(8))
console.log(isPerfectNumber(12))
