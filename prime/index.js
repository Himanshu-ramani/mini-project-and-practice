function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return console.log(`${number} is not prime number`);
    }
  }
  return console.log(`${number}is Prime`);
}
isPrime(97);
