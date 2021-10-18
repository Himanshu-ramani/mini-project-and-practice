//first print 1 1 in one row
//step 2 print 2 in second line

//

function numbertraiangle(n) {
  number = "";
  num = 1;
  //   let str = " ";
  for (row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      number += " ";
    }
    for (let colum = 0; colum < row; colum++) {
      number += row + colum;
    }
    for (let colum = 1; colum <= row - 1; colum++) {
      number += row + colum - 1;
    }
    number += "\n";
  }
  console.log(number);
}
numbertraiangle(3);

// for (i = 0; i < 3 - 1; i++) {
//   console.log(i);
// }
