function numbertri(n) {
  number = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      number += " ";
    }
    for (let cl1 = 1; cl1 <= row; cl1++) {
      number += row + cl1 - 1;
    }
    for (let cl2 = 1; cl2 < row; cl2++) {
      number += row * 2 - 1 - cl2;
    }
    number += "\n";
  }
  console.log(number);
}

numbertri(5);
