function printstar(n) {
  star = "";
  for (row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      star += " ";
    }
    for (let colum = 1; colum <= row; colum++) {
      star += 1 + " ";
    }
    star += "\n";
  }
  console.log(star);
}
printstar(5);
