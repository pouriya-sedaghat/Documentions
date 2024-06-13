"use strict";
// console.log("app.ts Is Runnig.");
// sample :
// function add(num1, num2) {
//   return num1 + num2;
// }
// const result = add(5, 6);
// console.log(result);
// const result = add(5, "6");
// console.log(result); //  the application bug
// resolve bug
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// const result = add(5, 6);
// const result = add(5, "6"); // ts err : num2 is number
// console.log(result);
// resolve ts err
// const result = add(5, 6);
// console.log(result);
// compare type maneging in js and ts
// function add(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
//   throw new Error("Invalid Type.");
// }
// const result = add(5, "6");
// console.log(result);
//  object data type
// const user = { username: "Pouriya Sedaghat", age: 24, id: 1 };
// const user: object = { username: "Pouriya Sedaghat", age: 24, id: 1 };
// access to data
// console.log(user.username); // ts err : not defined data in this object
// resolve ts err
// const user: { username: string; age: number; id: number } = {
//   username: "Pouriya Sedaghat",
//   age: 24,
//   id: 1,
// };
// console.log(user.username);
//  array data type
// const orders = [
//   {
//     user: 1,
//     orderItems: [{ title: "Producet one", price: 299, quantity: 5 }],
//     shipingData: {
//       fullnam: "Pouriya Sedaghat",
//       postaColde: 23551512,
//       address: "harchi",
//     },
//     paymentMethod: "Offline Payment",
//   },
// ];
// const orders: object[] = [
//   {
//     user: 1,
//     orderItems: [{ title: "Producet one", price: 299, quantity: 5 }],
//     shipingData: {
//       fullnam: "Pouriya Sedaghat",
//       postaColde: 23551512,
//       address: "harchi",
//     },
//     paymentMethod: "Offline Payment",
//   },
// ];
// access to data
// console.log(orders[0].user); // ts err
// resolve ts err
// const orders: {
//   user: number;
//   orderItems: { title: string; price: number; quantity: number }[];
//   shipingData: { fullnam: string; postaColde: number; address: string };
//   paymentMethod: string;
// }[] = [
//   {
//     user: 1,
//     orderItems: [{ title: "Producet one", price: 299, quantity: 5 }],
//     shipingData: {
//       fullnam: "Pouriya Sedaghat",
//       postaColde: 23551512,
//       address: "harchi",
//     },
//     paymentMethod: "Offline Payment",
//   },
// ];
// tuple type
// const orders: {
//   user: number;
//   orderItems: [
//     { title: string; price: number; quantity: number },
//     { title: string; price: number; quantity: number }
//   ];
//   shipingData: { fullnam: string; postaColde: number; address: string };
//   paymentMethod: string;
// }[] = [
//   {
//     user: 1,
//     orderItems: [
//       { title: "Producet one", price: 299, quantity: 5 },
//       { title: "Producet one", price: 299, quantity: 5 },
//     ],
//     shipingData: {
//       fullnam: "Pouriya Sedaghat",
//       postaColde: 23551512,
//       address: "harchi",
//     },
//     paymentMethod: "Offline Payment",
//   },
// ];
// enum type
// const product = {
//   title: "Producet one",
//   price: 299,
//   color: "red",
// };
// if (product.color === "red") console.log("Product Is Our.");
// in js
// const RED = 1;
// const GREEN = 2;
// const BLUE = 3;
// const product = {
//   title: "Producet one",
//   price: 299,
//   color: RED,
// };
// if (product.color === RED) console.log("Product Is Our.");
// in ts
// enum Color {
//   RED,
//   GREEN,
//   BLUE,
// }
// // enum Color {
// //   RED = "",
// //   GREEN = "",
// //   BLUE = "",
// // }
// const product = {
//   title: "Producet one",
//   price: 299,
//   color: Color.RED,
// };
// if (product.color === Color.RED) console.log("Product Is Our.");
// any type
// const orders: any = [
//   {
//     user: 1,
//     orderItems: [
//       { title: "Producet one", price: 299, quantity: 5 },
//       { title: "Producet one", price: 299, quantity: 5 },
//     ],
//     shipingData: {
//       fullnam: "Pouriya Sedaghat",
//       postaColde: 23551512,
//       address: "harchi",
//     },
//     paymentMethod: "Offline Payment",
//   },
// ];
// access to data
// console.log(orders[0].user);
// const orders: any[] = [
//   {
//     user: 1,
//     orderItems: [
//       { title: "Producet one", price: 299, quantity: 5 },
//       { title: "Producet one", price: 299, quantity: 5 },
//     ],
//     shipingData: {
//       fullnam: "Pouriya Sedaghat",
//       postaColde: 23551512,
//       address: "harchi",
//     },
//     paymentMethod: "Offline Payment",
//   },
// ];
// union type
// function add(num1: number | string, num2: number | string) {
//   return num1 + num2; // ts err : + operator cant apply to sting | number sting | number
// }
// const result = add(5, 6);
// const result = add("5", "6");
// console.log(result);
// resolve ts err
// function add(num1: number | string, num2: number | string) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// const result = add(5, 6);
// const result = add("5", "6");
// console.log(result);
// literal type
// function add(num1: number | string, num2: number | string, returnType: string) {
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     returnType === "number"
//   ) {
//     return +num1 + +num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// const result = add(5, 6, "number");
// const result = add("5", "6", "string");
// const result = add("5", "6", "number");
// console.log(result);
// literal
// function add(
//   num1: number | string,
//   num2: number | string,
//   returnType: "number" | "string"
// ) {
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     returnType === "number"
//   ) {
//     return +num1 + +num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// const result = add(5, 6, "number");
// const result = add("5", "6", "string");
// const result = add("5", "6", "number");
// console.log(result);
// aliase type
// type Num1 = number | string;
// type RetType = "number" | "string";
// function add(num1: Num1, num2: Num1, returnType: RetType) {
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     returnType === "number"
//   ) {
//     return +num1 + +num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// const result = add(5, 6, "number");
// // const result = add("5", "6", "string");
// // const result = add("5", "6", "number");
// console.log(result);
// function return type
// type Num1 = number | string;
// type RetType = "number" | "string";
// function add(num1: Num1, num2: Num1, returnType: RetType): number | string {
//   if (
//     (typeof num1 === "number" && typeof num2 === "number") ||
//     returnType === "number"
//   ) {
//     return +num1 + +num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// }
// const result = add(5, 6, "number");
// // const result = add("5", "6", "string");
// // const result = add("5", "6", "number");
// console.log(result);
// function data type
// type Num1 = number | string;
// type RetType = "number" | "string";
// const add: (num1: Num1, num2: Num1, returnType: RetType) => number | string =
//   function (num1, num2, returnType) {
//     if (
//       (typeof num1 === "number" && typeof num2 === "number") ||
//       returnType === "number"
//     ) {
//       return +num1 + +num2;
//     } else {
//       return num1.toString() + num2.toString();
//     }
//   };
// const result = add(5, 6, "number");
// // const result = add("5", "6", "string");
// // const result = add("5", "6", "number");
// console.log(result);
// callback
// const sayHi = function (
//   fullName: string,
//   age: number,
//   cb: (fullnam: string, age: number) => void
// ) {
//   typeof cb === "function" && cb(fullName, age);
// };
// sayHi("Pouriya Sedaghat", 24, (fullnam, age) => {
//   console.log(`Im ${fullnam}, My Age Is ${age}.`);
// });
// unkown type
// let username: unknown = "harchi";
// let input: string;
// input = username; // ts err
// resolve ts err
// if (typeof username === "string") {
//   input = username;
// }
// generic type
// function generic<Type>(){
// ...
// }
// ts compiler
// using watch mode
// tsc app.ts --watch
// tsc app.ts -w
// compiling multi file
// tsc --init
// tsc
// using watch mode
// tsc --watch
// tsc -w
//# sourceMappingURL=app.js.map