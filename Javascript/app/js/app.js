// alert("Hello To js-external");
// console.log("Hello To js-external");
// document.write("Hello To js-external");

// show variables

// alert()
// console.log()
// document.write()

// js-fundamental :

// js-variables

// var content1 = "content1"; // ES5
// let content2 = "content2";
// const content3 = "content3";

// tips:

// var content1;
// let content2;
// const content3 = "content3";

// content1 = "content1";
// content2 = "content2";
// console.log(content1, content2);

// why lat const

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// const

// const arr = []

// const obj = {}

// function point() {}
// const func = point;
// const func = function () {};
// const func = () => {};

// js-data types

// let content;

//number

// content = 1;
// console.log(typeof content); // number

//not a number

// content = NaN;
// console.log(typeof content); // number

//string

// content = "data types";
// console.log(typeof content); // string

//boolean

// content = true;
// content = false;
// console.log(typeof content); // boolean

//undefined

// content;
// console.log(typeof content); // undefined

//null

// content = null;
// console.log(typeof content); // object

// function

// function dataType() {}
// content = dataType;
// content = function () {};
// content = () => {};
// console.log(typeof content); // function

//array

// content = [];
// console.log(typeof content); // object

//object

// content = {};
// console.log(typeof content); //objext

// symbol

// content = "✬";
// console.log(typeof content); //string

//big int

// content = 12154544441;
// console.log(typeof content); //string

// js-operators :

// arithmetic operator

// let content1 = 5;
// let content2 = 6;

// const result = content1 + content2;
// console.log(result);

// const result = content1 - content2;
// console.log(result);

// const result = content1 * content2;
// console.log(result);

// const result = content1 / content2;
// console.log(result);

// const result = content1 ** content2;
// console.log(result);

// const result = content1 % content2;
// console.log(result);

// assignment operator

// let content;

// assignmet

// content = "harchi";

// incrememt

// content = 9;

// console.log(++content);
// console.log(content++);

// decrememt

// console.log(--content);
// console.log(content--);

// tips

// content += 5;
// content -= 5;
// content *= 5;
// content /= 5;
// content **= 5;
// content %= 5;
// console.log(content);

// comparison operator

// let content1 = 6;
// let content2 = 7;

// console.log(content1 == content1);
// console.log(content1 === content1);
// console.log(content1 != content1);
// console.log(content1 !== content1);
// console.log(content1 < content1);
// console.log(content1 <= content1);
// console.log(content1 > content1);
// console.log(content1 >= content1);

// string concatenation

// let content1 = "1";
// let content2 = "2";

// const result = content1 + content2;
// console.log(result);

// content2 = 2;

// const result = content1 + content2;
// console.log(result);

// template literals

// const fullname = "Pouriya Sedaghat";
// const age = 24;

// console.log(`im ${fullname}, my age is ${age}`);

// scape code

// console.log("H\'ello");
// console.log("H\tello");
// console.log("H\nello");
// console.log("H\aello");

// conditional statements

// if, else if, else

// const age = 24;

// if (age > 24) {
//   console.log("age > 24");
// } else if (age < 24) {
//   console.log("age < 24");
// } else {
//   console.log("age === 24");
// }

// ternary operator

// age > 24 ? console.log(true) : console.log(false);

// logical operator

// let content1 = 1;
// let content2 = 2;

// // and &&

// console.log(content1 && content2);

// // or ||

// console.log(content1 || content2);

// // invet !

// console.log(!content1);

// short if

// const boolean = content1 && content2;

// switch

// let day = "شنبه";

// switch (day) {
//   case "شنبه":
//     {
//       console.log("شنبه");
//     }
//     break;
//   case "یکشنبه":
//     {
//       console.log("یکشنبه");
//     }
//     break;
//   case "دوشنبه":
//     {
//       console.log("دوشنبه");
//     }
//     break;
//   case "سه شنبه":
//     {
//       console.log("سه شنبه");
//     }
//     break;
//   case "چهارشنبه":
//     {
//       console.log("چهارشنبه");
//     }
//     break;
//   case "پنجشنبه":
//     {
//       console.log("پنجشنبه");
//     }
//     break;
//   case "جمعه":
//     {
//       console.log("جمعه");
//     }
//     break;
//   default: {
//     throw new Error("Invalid Day.");
//   }
// }

// truthy and falsy

// 0
// NaN
// '' "" ``
// undefined
// null
// document.all

// type conversion

// Number();
// String();
// Boolean();

// type coercion

// console.log("1" + 2);

// prompt

// const fullName = prompt("Enter Your Full Name :", "Pouriya Sedaghat");
// console.log(fullName);

// use strict mode

// "use strict";

// functions :

// declaration function

// function sayHi() {
//   console.log("Pouriya Sedaghat");
// }

// sayHi();

// function sayHi(fullName, age, cd) {
//   console.log(`im ${fullName},my age is ${age}.`);
//   typeof cd === "function" && cd(fullName, age);
// }

// sayHi("Pouriya Sedaghat", 24, (fullName, age) => {
//   console.log(`Callback Function : ${fullName} and ${age}`);
// });

// function sayHi() {
//   return "Pouriya Sedaghat"
// }

//  const fullName = sayHi();
// console.log(fullName);

// expression, anonymouse, regular function

// const sayHi = function () {
//   console.log("Pouriya Sedaghat");
// };

// sayHi();

// const sayHi = function (fullName, age) {
//   console.log(`im ${fullName},my age is ${age}.`);
// };

// sayHi("Pouriya Sedaghat", 24);

// const sayHi = function (fullName, age) {
//   return `im ${fullName},my age is ${age}.`;
// };

// const userInfo = sayHi("Pouriya Sedaghat", 24);
// console.log(userInfo);

// arrow function

// const sayHi = () => {
//   console.log("Pouriya Sedaghat");
// };

// sayHi();

// const sayHi = (fullName, age) => {
//   console.log(`im ${fullName},my age is ${age}.`);
// };

// sayHi("Pouriya Sedaghat", 24);

// const sayHi = (fullName, age) => {
//   return `im ${fullName},my age is ${age}.`;
// };

// const userInfo = sayHi("Pouriya Sedaghat", 24);
// console.log(userInfo);

// tips

// const sayHi = fullName => console.log(fullName);

// sayHi("Pouriya Sedaghat");

// const sayHi = fullName => fullName;

// const fullName = sayHi("Pouriya Sedaghat");
// console.log(fullName);

// call apply bind methods

// function sayHi() {
//   console.log(this);
// }

// sayHi(); // window

// function sayHi() {
//   console.log(this);
// }

// sayHi.call({ fullName: "Pouriya Sedaght", age: 24 });

// sayHi.apply({ fullName: "Pouriya Sedaght", age: 24 });

// const func = sayHi.bind({ fullName: "Pouriya Sedaght", age: 24 });
// func();

// call, bind [1,2,3,4,5,6] => 1,2,3,4,5,6
// apply [1,2,3,4,5,6] => [1,2,3,4,5,6]

// global variable window

// Math.ceil(0.1);
// Math.floor(0.1);
// Math.round(0.5);
// Math.round(0.4);
// Math.random();

// Random Number

// function Random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const rndNum = Random(0, 10);
// console.log(rndNum);

// array

// const arr = [];

// access data

// const combine = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "f",
//   1,
//   2,
//   3,
//   4,
//   5,

//   "aa",
//   "bb",
//   "cc",
//   "dd",
//   "ff",
// ];

// console.log(combine);
// console.log(combine[0], combine[combine.length - 1]);

// array methods

// combine.concat(["harchi"]);
// console.log(combine);

// console.log(combine.indexOf("aa"));

// console.log(combine.join(" "));

// console.log(Array.isArray(combine));

// combine.push("fs");
// console.log(combine); // effect to source

// combine.pop();
// console.log(combine); // effect to source

// combine.unshift("fs");
// console.log(combine); // effect to source

// combine.shift();
// console.log(combine); // effect to source

// combine.splice(0,2,'ssdxs','xscsc','xsx');
// console.log(combine); // effect to source

// combine.sort();
// console.log(combine); // effect to source

// combine.sort((a, b) => a > b ? 1 : -1);
// combine.sort((a, b) => a < b ? 1 : -1);
// console.log(combine); // effect to source

// combine.reverse();
// console.log(combine); // effect to source

// console.log(combine.includes("d")); // effect to source

// object

// const obj = {};

// access to data

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info() {
//     console.log(`im ${fullName}, my age is ${age}.`);
//   },
// };

// console.log(user.age);
// console.log(user["fullName"]);

// this

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info() {
//     console.log(`im ${fullName}, my age is ${age}.`);
//   },
// };

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info: function () {
//     console.log(`im ${fullName}, my age is ${age}.`);
//   },
// };

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info: () => {
//     console.log(`im ${fullName}, my age is ${age}.`);
//   },
// };

// console.log(user);

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info() {
//     console.log(`im ${fullName}, my age is ${age}.`);
//   },
// };

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info: function () {
//     console.log(`im ${this.fullName}, my age is ${this.age}.`);
//   },
// };

// const user = {
//   id: 1,
//   fullName: "Pouriya Sedaghat",
//   age: 24,
//   info: () => {
//     console.log(`im ${this.fullName}, my age is ${this.age}.`);
//   },
// };

// user.info();

// object methods

// console.log(Object.keys(user));

// loops

// for

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while

// while (1) {
//   console.log("infinit");
// }

// break and continue

// let sum = 0;

// while (1) {
//   const num = Number(prompt("Enter Your Number", -1));
//   if (num === -1) break;
//   if (num === 0) continue;
//   sum += num;
// }

// console.log(sum);

// do while

// do {
//   console.log("on time");
// } while (0);

// loop and array

// const names = ["a", "b", "c", "d", "e", "f"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i], i);
// }

// //

// names.forEach((item, index) => {
//   console.log(item, index);
// });

// console.log(names.map((item, index) => item + " " + index));

// console.log(names.filter((item, index) => item !== "a"));

// string methods

// let content = " harchi ";

// console.log(content.length);

// console.log(content.concat(0));

// console.log(content.indexOf("a"));

// console.log(content.slice(0, 2));

// console.log(content.replace("a", "c"));

// console.log(content.toLowerCase());

// console.log(content.toUpperCase());

// console.log(content.trim());

// console.log(content.split(""));

// console.log(content.charCodeAt(0));

// console.log(String.fromCharCode(90));

// content = 123456;

// console.log(content.toString());
// console.log(content.toLocaleString());

// number methods

// console.log(parseInt(content));
// console.log(parseFloat(content));
// console.log(+content);

// content = 123;

// console.log(content.toFixed(3));

// OTP

// const ASCII_COLDE = {
//   number: { min: 48, max: 57 },
//   lower: { min: 97, max: 122 },
//   upper: { min: 65, max: 95 },
// };

// const keys = Object.keys(ASCII_COLDE);

// function Random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generatorPassword(type, count) {
//   let generatedPassword = "";
//   switch (type) {
//     case "NUMBER":
//       {
//         for (let i = 0; i < count; i++) {
//           generatedPassword += String.fromCharCode(
//             Random(ASCII_COLDE.number.min, ASCII_COLDE.number.max)
//           );
//         }
//       }
//       break;
//     case "LOWER":
//       {
//         for (let i = 0; i < count; i++) {
//           generatedPassword += String.fromCharCode(
//             Random(ASCII_COLDE.lower.min, ASCII_COLDE.lower.max)
//           );
//         }
//       }
//       break;
//     case "UPPER":
//       {
//         for (let i = 0; i < count; i++) {
//           generatedPassword += String.fromCharCode(
//             Random(ASCII_COLDE.upper.min, ASCII_COLDE.upper.max)
//           );
//         }
//       }
//       break;
//     case "MIX":
//       {
//         for (let i = 0; i < count; i++) {
//           const key = keys[Random(0, keys.length - 1)];
//           generatedPassword += String.fromCharCode(
//             Random(ASCII_COLDE[key].min, ASCII_COLDE[key].max)
//           );
//         }
//       }
//       break;
//     default: {
//       throw new Error("Invalid Password Type.");
//     }
//   }
//   return generatedPassword;
// }

// console.log(generatorPassword("NUMBER", 5));
// console.log(generatorPassword("LOWER", 5));
// console.log(generatorPassword("UPPER", 5));
// console.log(generatorPassword("MIX", 5));

// promise

// const harchi = () =>
//   new Promise((resolve, reject) => {
//     if (1 > 2) {
//       resolve("Yes.");
//     } else {
//       reject("No.");
//     }
//   });

// using promise

// harchi()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// or

// async function get() {
//   try {
//     const response = await harchi();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// get();

// class

// class Team {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const newTeam = new Team("Dev");

// console.log(newTeam);

// inheriance

// class DevTeam extends Team {
//   constructor(name, members) {
//     super(name);
//     this.members = members;
//   }
//   addMember(member) {
//     this.members.push(member);
//   }
// }

// const newTeam = new DevTeam("Dev", ["Pouriya", "Masood"]);
// newTeam.addMember('Zahra')
// console.log(newTeam);

// timers

// setInterval(() => {},1000);

// setTimeout(() => {},1000);

// const key = setInterval(() => {
//   console.log("Hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(key);
// }, 10000);

// class Date

// const date = new Date();

// js-advance

// js-DOM

// js-DOM selector

// const domNode = document.getElementById("p1");
// console.log(domNode);

// const nodeList = document.getElementsByClassName("mix");
// console.log(nodeList);

// const nodeList = document.getElementsByTagName("h2");
// console.log(nodeList);

// const domNode = document.querySelector("#p1");
// const domNode = document.querySelector(".mix");
// const domNode = document.querySelector("h2");
// console.log(domNode);

// const nodeList = document.querySelectorAll("#p1");
// const nodeList = document.querySelectorAll(".mix");
// const nodeList = document.querySelectorAll("h2");
// console.log(nodeList);

// combinators

// document.querySelector("h2 i").style.color = "red";
// document.querySelector("h2>i").style.color = "red";
// document.querySelector("h2+i").style.color = "red";
// document.querySelector("h2~i").style.color = "red";

// pseudo class

// document.querySelector("h2>i:first-of-type").style.color = "red";
// document.querySelector("h2>i:last-of-type").style.color = "red";
// document.querySelector("h2>i:nth-of-type(odd)").style.color = "red";
// document.querySelector("h2>i:nth-of-type(even)").style.color = "red";
// document.querySelector("h2>i:not($:first-of-type)").style.color = "red";
// document.querySelector("h2>i:first-child").style.color = "red";
// document.querySelector("h2>i:last-child").style.color = "red";
// document.querySelector("h2>i:nth-child(odd)").style.color = "red";
// document.querySelector("h2>i:nth-child(even)").style.color = "red";
// document.querySelector("h2>i:not($:first-child)").style.color = "red";

// closest method

// document.querySelector("i").closest('h2').style.color = "red"; // select parents element

// tips

// optimaizition

// null

// a DOMnode or jquety object =>  properies and methods

// access to content

// const heading2 = document.getElementsByTagName("h2");

// console.log(heading2[0].innerText);
// console.log(heading2[0].textContent);

// const input = document.querySelector("input");

// console.log(input.value);

// heading2.innerText = "hello";
// heading2.textContent = "bye";

// input.value = "harchi";

// events

// inline

// function f1() {
//   console.log("onClick");
// }

// external

// const btn = document.querySelectorAll("button");

// function dec() {
//   console.log("onClick");
// }

// btn[1].addEventListener("click", dec);
// btn[1].addEventListener("click", function () {
//   console.log("onClick");
// });
// btn[1].addEventListener("click", () => {
//   console.log("onClick");
// });
// btn[1].addEventListener("contextmenu", () => {
//   console.log("onContextmenu");
// });
// btn[1].addEventListener("dblclick", () => {
//   console.log("onDblclick");
// });
// btn[1].addEventListener("mousedown", () => {
//   console.log("onMousedown");
// });
// btn[1].addEventListener("mouseup", () => {
//   console.log("onMouseup");
// });
// btn[1].addEventListener("mouseenter", () => {
//   console.log("onMouseenter");
// });
// btn[1].addEventListener("mouseout", () => {
//   console.log("onMouseout");
// });
// btn[1].addEventListener("mouseover", () => {
//   console.log("onMouseover");
// });
// btn[1].addEventListener("mouseleave", () => {
//   console.log("onMouseleave");
// });
// btn[1].addEventListener("mousemove", () => {
//   console.log("onMousemovemousemove");
// });
// btn[1].addEventListener("keydown", () => {
//   console.log("onKeydown");
// });
// btn[1].addEventListener("keyup", () => {
//   console.log("onKeyup");
// });
// btn[1].addEventListener("keypress", () => {
//   console.log("onKeypress");
// });
// btn[1].addEventListener("keypress", () => {
//   console.log("onKeypress");
// });

// const input = document.querySelector("input");

// input.addEventListener("focus", () => {
//   console.log("onFocus");
// });
// input.addEventListener("input", () => {
//   console.log("onInput");
// });
// input.addEventListener("change", () => {
//   console.log("onChange");
// });
// input.addEventListener("blur", () => {
//   console.log("onBlur");
// });

// document.addEventListener("scroll", () => {
//   console.log("onScrool");
// });

// document.addEventListener("wheel", () => {
//   console.log("onWheel");
// });

// document.addEventListener("load", () => {
//   console.log("onLoad");
// });

// document.addEventListener("unload", () => {
//   console.log("onUnload");
// });

// document.addEventListener("resize", () => {
//   console.log("onresize");
// });

// document.addEventListener("reset", () => {
//   console.log("onScrool");
// });

// document.getElementById("#form").addEventListener("submit", () => {
//   console.log("onSubmit");
// });

// access to styles

// console.log(document.querySelector("h2").style);
// document.querySelector("h2").style.backgroundColor = "red";

// access to class

// console.log(document.querySelectorAll("p")[1].classList);

// document.querySelector("button:last-of-type").addEventListener("click", () => {
//   //   document.querySelectorAll("p")[1].classList.add("harchi");
//   // document.querySelectorAll("p")[1].classList.remove("harchi");
//   // document.querySelectorAll("p")[1].classList.toggle("harchi");
// });

// access to attribute

// console.log(document.querySelectorAll("p")[1].title);

// document.querySelector("button:last-of-type").addEventListener("click", () => {
//   document.querySelectorAll("p")[1].title = "hello";
// });

// add element

// innerHTML

// const users = [
//   { useename: "Pouriya Sedaghat", id: 1, age: 24 },
//   { useename: "Zahra Sedaghat", id: 2, age: 19 },
// ];

// let html = "";

// users.forEach((item) => {
//   html += `<li data-id=${item.id.toString()}>username: ${item.useename} age: ${
//     item.age
//   }</li>`;
// });

// document.querySelector("div ul").innerHTML = html;

// access to data-...

// console.log(document.querySelector("div>ul>li:first-of-type").attributes[0]);

// remove element

// document.querySelector("input").remove();

// scopes

// block scope or global scope
