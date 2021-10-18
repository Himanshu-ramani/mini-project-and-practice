// question make a star patten
// step 1 :make a row of stars
// step 2 : add number of stars
let star = "";
function printStar(n) {
  for (row = 1; row <= n; row++) {
    for (let colum = 1; colum <= row; colum++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}

printStar(4);
