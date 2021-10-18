function prime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return;
    }
  }
  return console.log(`${number}`);
}

for (let index = 1; index < 100; index++) {
  prime(index);
}
