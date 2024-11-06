//flag
let count = 0;
while (count < 10) {
  count += 1;
  if (count >= 3 && count <= 7) {
    continue;
    break;
  }
  if (count % 2 == 0) {
    console.log(count);
  }
}

for (let count = 0; count <= 10; count += 1) {
  console.log(count);
}
const students = [
  { Name: "pelé", n1: 7, n2: 8 },
  { Name: "vinicius jr", n1: 8, n2: 6 },
  { Name: "mané garrincha", n1: 5, n2: 6 },
];

for (let i = 0; i < students.length; i++) {
  const avg = (students[i].n1 + students[i].n2) / 2;

  if (avg >= 7) {
    console.log(`${students[i].Name} aprovado com media ${avg}`);
  } else {
    console.log(`${students[i].Name} aprovado com media ${avg}`);
  }
}

console.log("End!");

//EXERCIO
const numbers = [];
while (numbers.length < 6) {
  const draw = Math.ceil(Math.random() * 60);
  const numbersformatted = String(draw).padStart(2, 0);

  if (!numbers.includes(numbersformatted)) {
    continue;
  } else {
    numbers.push(numbersformatted);
  }
}
console.log(numbers.sort((a, b) => a - b).join("-"));
