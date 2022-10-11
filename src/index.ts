// console.log("Hello World!");

// let age: number = 20;
// if (age < 50) {
//   age += 10;
// }
// console.log(age);

// Arrays
let numbers: number[] = [];
numbers[0] = 1;

// Tuples -  use like key value pairs
let user: [number, string] = [1, "Nawaz"];

// Enum - Represents a list of realted items
// const small = 1;
// const medium = 2;
// const large = 3;
// Insted of above content we can go with enum

// PascalCase
// By using const before enum the compiler will generate more optimized code

const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize: Size = Size.Medium;
console.log(mySize);
