function calculate(calculationSteps) {
  for (let i = 0; i < calculationSteps.length; i++) {
    // if (calculationSteps[i] != NaN) {
    //   Number.calculationSteps[i]
    // }
    if (calculationSteps[i] === null) {
      calculationSteps[i] = 0
    }
    if ((calculationSteps[i] === undefined) || (calculationSteps[i] === '') || (isNaN(calculationSteps[i]))) {
      return false
    }

    return true
  }

  // multiplies two numbers when one is stringified
  // treats null values as zeroes and includes them in the calculation
  // ignores undefined and empty string values and continues operation
  // ignores non-numeric values  and continues operation
  return calculationSteps
}

module.exports = calculate
