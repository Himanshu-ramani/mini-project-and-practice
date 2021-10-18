function numbertri(n) {
  num = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      num += " ";
    }
    for (let number = 0; number < row; number++) {
      num += row + number;
    }
    num += "\n";
  }
  console.log(num);
}
numbertri(3);
