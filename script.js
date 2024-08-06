// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// sayHello();

// const person = {
//   name: "James",
//   walk() {},
//   talk() {},
// };

// person.talk();
// person.name = ''

// const targetMember = "name";
// person["name"] = "john";

// const person = {
//   name: "James",
//   walk() {
//     console.log(this);
//   },
// };

// person.walk();

// const walk = person.walk;
// walk();

const square = function (number) {
  return number * number;
};

//es6

// const square = (number) => number * number;

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const activeJobs = jobs.filter(function (job) {
//   return job.isActive;
// });

// const activeGigs = (jobs.filter = (job) => job.isActive);

/**/
// const person = {
//   talk() {
//     var self = this;
//     setTimeout(function () {
//       console.log("self", self);
//     }, 1000);
//   },
// };

// person.talk();

/*map method*/
// const colors = ["red", "green", "blue"];
// const items = colors.map(function (color) {
//   return "<li>" + color + "<li/>";
// });

// const colors = ["red", "green", "blue"];
// const items = colors.map((color) => "<li>" + color + "<li/>");

/*arrow function and Object */
// const colors = ["red", "green", "blue"];
// const items = colors.map((color) => `<li> ${color}  <li/>`); //object literal

//object destructuring

// const address = {
//   street: "",
//   city: "",
//   country: "",
// };

// const { street, city, country } = address;

/*spread operator as an improvement of the concat method*/

/*const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined = [...first, 'a',...second, 'b']; */

const first = [1, 2, 3];
const second = [4, 5, 6];

const clone = [...first];
console.log(first);
console.log(clone);
