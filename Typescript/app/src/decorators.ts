// console.log("decorators.ts is running.");

// decorators

// function Logger(target: Function) {
//   console.log("Loging...");
// }

// @Logger
// class Decorators {
//   name = "harchi";

//   constructor() {
//     console.log("constructor Runnig");
//   }
// }

// const newDec = new Decorators();
// console.log(newDec);

// decorators factories

// function Logger(status: string) {
//   return (target: Function) => {
//     console.log(status);
//     console.log(target);
//   };
// }

// @Logger("Loging...")
// class Decorators {
//   name = "harchi";

//   constructor() {
//     console.log("constructor Runnig");
//   }
// }

// const newDec = new Decorators();
// console.log(newDec);

// multiple decorators

// function Logger1(target: Function) {
//   console.log("Loging...");
// }

// function Logger2(status: string) {
//   return (target: Function) => {
//     console.log(status);
//     console.log(target);
//   };
// }

// @Logger1
// @Logger2("Loging...")
// class Decorators {
//   name = "harchi";

//   constructor() {
//     console.log("constructor Runnig");
//   }
// }

// const newDec = new Decorators();
// console.log(newDec);

// advanced decorators

// function Logger(typeSelector: string, content: string) {
//   return (target: Function) => {
//     const element = document.querySelector(typeSelector)!;
//     element.textContent = content;
//   };
// }

// function Logger(typeSelector: string, content: string) {
//   return (target: Function) => {
//     const element = document.querySelector(typeSelector)!;
//     element.innerHTML = content;
//   };
// }

// // @Logger("h2", "Advanced Decorator")
// @Logger(
//   "ul",
//   "<li>Advanced Decorator 1</li><li>Advanced Decorator 2</li><li>Advanced Decorator 3</li><li>Advanced Decorator 4</li><li>Advanced Decorator 5</li>"
// )
// class Decorators {
//   name = "harchi";

//   constructor() {
//     console.log("constructor Runnig");
//   }
// }

// const newDec = new Decorators();
// console.log(newDec);

// propery decorator

// function Logger(target: any, properyName: string) {
//   console.log(target);
//   console.log(properyName);
// }

// class Decorators {
//   @Logger
//   name = "harchi";

//   constructor() {
//     console.log("constructor Runnig");
//   }
// }

// const newDec = new Decorators();
// console.log(newDec);
