function printStar(n) {
  let star = "";
  for (row = 1; row <= n - 1; row++) {
    for (let space = 1; space <= n - row + n; space++) {
      star += " ";
    }
    for (let colum = 1; colum <= row; colum++) {
      star += " *";
    }
    star += "\n";
  }
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n + row; space++) {
      star += " ";
    }
    for (let colum = 0; colum <= n - row; colum++) {
      star += "* ";
    }
    star += "\n";
  }
  console.log(star);
}

printStar(5);
