//map (immutable)
const numbers = [10, 20, 30];
console.log(numbers.map((num) => num + 5));
console.log(numbers.map((num) => num * 5.74));
const devs = [
  { name: "Nereu", salary: 6500 },
  { name: "Fred", salary: 5800 },
  { name: "Neemias", salary: 7000 },
];

console.log;
const newsalaries = devs.map((dev) => dev.salary * 1.1);
console.log(newsalaries);
console.log(devs);
