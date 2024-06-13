// console.log("class.ts is running.");

//  creating class

// class Team {
//   constructor(name: string) {
//     this.name = name; // ts err
//   }
// }

// resolve ts err

// class Team {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const newTeam = new Team("Dev");
// console.log(newTeam);

// this

// class Team {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   describ(): void {
//     console.log(`Team : ${name}`);
//   }
// }

// const newTeam = new Team("Dev");
// console.log(newTeam.describ());

// class Team {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
// }

// const newTeam = new Team("Dev");
// console.log(newTeam.describ());

// newTeamCopy object

// const newTeamCopy = { describ: newTeam.describ };
// console.log(newTeamCopy.describ());

// resolve ts err

// class Team {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   describ(this: Team): void {
//     console.log(`Team : ${this.name}`);
//   }
// }

// const newTeam = new Team("Dev");
// const newTeamCopy = { describ: newTeam.describ }; // ts err
// console.log(newTeamCopy.describ());

// resolve ts err

// const newTeamCopy = { name: "Dev", describ: newTeam.describ };
// console.log(newTeamCopy.describ());

// modifier public and praivate

// class Team {
//   public name: string;
//   private members: string[] = [];

//   constructor(name: string): void {
//     this.name = name;
//   }

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// const newTeam = new Team("Dev");

// newTeam.addMember("Masood Sadri");
// newTeam.members.push("Pouriya Sedaghat"); // ts err

// newTeam.membersInfo();

// console.log(newTeam);

// resolve ts err

// class Team {
//   public name: string;
//   private members: string[] = [];

//   constructor(name: string) {
//     this.name = name;
//   }

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// const newTeam = new Team("Dev");

// newTeam.addMember("Masood Sadri");
// newTeam.addMember("Pouriya Sedaghat");

// newTeam.membersInfo();

// console.log(newTeam);

// shorthand initialization

// class Team {
//   //   id: number;
//   //   public name: string;
//   private members: string[] = [];

//   constructor(private id: number, public name: string) {
//     //     this.id = id;
//     //     this.name = name;
//   }

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// const newTeam = new Team(1, "Dev");

// newTeam.addMember("Masood Sadri");
// newTeam.addMember("Pouriya Sedaghat");

// newTeam.membersInfo();

// console.log(newTeam);

// modifier readonly

// class Team {
//   private members: string[] = [];

//   constructor(private readonly id: number, public name: string) {}

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// const newTeam = new Team(1, "Dev");

// newTeam.addMember("Masood Sadri");
// newTeam.addMember("Pouriya Sedaghat");

// newTeam.membersInfo();

// console.log(newTeam);

// inheritance

// class Team {
//   private members: string[] = [];

//   constructor(private readonly id: number, public name: string) {}

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// class DevTeam extends Team {
//   admins: string[];

//   constructor(id: number, admins: string[]) {
//     super(id, "Dev");

//     this.admins = admins;
//   }
// }

// const newTeam = new DevTeam(1, ["Pouriya Sedaghat", "Masood Sadri"]);
// console.log(newTeam);

// modifire protected

// class Team {
//   protected members: string[] = [];

//   constructor(private readonly id: number, public name: string) {}

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// class DevTeam extends Team {
//   admins: string[];

//   constructor(id: number, admins: string[]) {
//     super(id, "Dev");

//     this.admins = admins;
//   }

//   addMember(member: string): void {
//     this.members.push(member);
//   }
// }

// const newTeam = new DevTeam(1, ["Pouriya Sedaghat", "Masood Sadri"]);
// console.log(newTeam);

// getter and setter

// class Team {
//   protected members: string[] = [];

//   constructor(private readonly id: number, public name: string) {}

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// class DevTeam extends Team {
//   admins: string[];

//   constructor(id: number, admins: string[]) {
//     super(id, "Dev");

//     this.admins = admins;
//   }

//   addMember(member: string): void {
//     this.members.push(member);
//   }

//   get getMembers() {
//     return this.members;
//   }

//   set setMember(member: string) {
//     this.members.push(member);
//   }
// }

// const newTeam = new DevTeam(1, ["Pouriya Sedaghat", "Masood Sadri"]);

// console.log(newTeam.getMembers);
// newTeam.setMember = "Zahra Sedaghat";
// newTeam.setMember = "Pouriya Sedaghat";
// newTeam.setMember = "Masood Sadri";

// console.log(newTeam);

// static method

// class Team {
//   protected members: string[] = [];

//   constructor(private readonly id: number, public name: string) {}

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// class DevTeam extends Team {
//   private admins: string[];

//   constructor(id: number, admins: string[]) {
//     super(id, "Dev");

//     this.admins = admins;
//   }

//   static describ(): void {
//     console.log(`Team : ${this.name}`);
//   }

//   addMember(member: string): void {
//     this.members.push(member);
//   }

//   get getMembers() {
//     return this.members;
//   }

//   set setMember(member: string) {
//     this.members.push(member);
//   }
// }

// DevTeam.describ();

// abstract class

// abstract class Team {
//   protected members: string[] = [];

//   constructor(private readonly id: number, public name: string) {}

//   abstract describ(): void;
//   addMember(member: string): void {
//     this.members.push(member);
//   }
//   membersInfo(): void {
//     console.log(this.members);
//   }
// }

// class DevTeam extends Team {
//   private admins: string[];

//   constructor(id: number, admins: string[]) {
//     super(id, "Dev");

//     this.admins = admins;
//   }

//   describ(): void {
//     console.log(`Team : ${this.name}`);
//   }

//   addMember(member: string): void {
//     this.members.push(member);
//   }

//   get getMembers() {
//     return this.members;
//   }

//   set setMember(member: string) {
//     this.members.push(member);
//   }
// }

// const newTeam = new DevTeam(1, ["Pouriya Sedaghat"]);

// newTeam.describ();

// console.log(newTeam);

// praivate constractor

// class PraivateConstractor {
//   private static instance: PraivateConstractor;

//   private constructor(private readonly id: number, private name: string) {}

//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new PraivateConstractor(1, "PraivateConstractor");
//       return this.instance;
//     }
//     return this.instance;
//   }
// }

// PraivateConstractor.getInstance();

// interface

// interface User {
//   id: number;
//   username: string;
//   age: number;
// }

// const obj: User = { id: 1, username: "Pouriya Sedaghat", age: 24 };

// interface with class

// interface User {
//   id: number;
//   username: string;
//   age: number;
// }

// class UserInfo implements User {
//   id: number;
//   username: string;
//   age: number;

//   constructor(id: number, username: string, age: number) {
//     this.id = id;
//     this.username = username;
//     this.age = age;
//   }
// }

// const info: User = new UserInfo(1, "Pouriya Sedaghat", 24);
// console.log(info);
