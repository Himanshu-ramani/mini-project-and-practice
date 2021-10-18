// const person = (firstName) => (this.firstName = firstName);

// person("himanshu");

// console.log(person());
// let firstName = "Himanshu";
let person = {
  firstName: "himanshu",
  lastName: "Ramani",
  //   walking: () => console.log( `${}`),
  walking: () => console.log(`${person["firstName"]} is walking`),
  walk: function (firstName) {
    console.log(`${firstName}`);
  },
};

// console.log(person.walking());
person.walking();
person.walk();

let himanshu = {
  firstName: "himanshu",
  lastName: "Ramani",
  birthYeah: 1991,
  calaAge: function () {
    console.log(2021 - this.birthYeah);
  },
};

himanshu.calaAge();
