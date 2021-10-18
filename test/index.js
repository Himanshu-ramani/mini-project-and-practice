/*let add = function (x,y) {

console.log( x + y);
}

// add(1,1)
let sub = function (a,b) {
    console.log(a - b);
}
//  sub(1,1)
 let division = function ( p , q) {
     console.log( p / q);
 }
//  division( 3 ,2 )

let multiply = function (c , d) {
    console.log( c * d);
}
// multiply(2,2)
let reminder = function (e , f) {
    console.log( e % f  );
}
reminder(2,3)


*/

function even(number) {
  console.log(number / 2);
}

function odd_even(a) {
  if (a % 2 == 0) {
    return "the number is even number";
  } else if (a % 2 !== 0) return "the number is odd number";
}
console.log(odd_even(5));

// let y ={
//     name ='himanshu',
//     lastName = 'ramani',
// }
// console.log(this.name);
// function x() {
//   console.log(this.x);
// }
// x();

// object destructuring

// const data = {
//   name: "himanshu",
//   age: 19,
//   degree: "hsc",
//   hob: {
//     first: "coding",
//     second: "exploring place",
//   },
// };

// let { name, age, degree, hob } = data;

// let { first: firstHob, second: secondHob } = hob;
// console.log(firstHob);

function display() {
  var x = 10;
}

console.log(x);
