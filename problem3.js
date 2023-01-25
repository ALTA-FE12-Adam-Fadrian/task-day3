function primeNumber(number) {
    let primeNumber = true;
    if (number === 0 || number === 1) return false;
    if (number === 2) return true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (primeNumber) {
        if(number % i === 0) {
          primeNumber = false;
        } else {
          primeNumber = true;
        }
      }
    }
    return primeNumber;
  }

  console.log(primeNumber(11))
  console.log(primeNumber(17))
  console.log(primeNumber(15))