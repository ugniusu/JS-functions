import data from "./script.js";
console.log(data);

import { ugnius } from "./script.js";
console.log(ugnius);

import { datule, myFunction } from "./script.js";
console.log(datule, typeof myFunction);

/////////////////////////////////////////////////////////////
// Funckijos
function test(a, b) {
  return a + b;
}
test(5, 5);

function funkcija(a = "Ugnius", b) {
  console.log(`Sveikas, ${a}, tu turi ${b} namus`);
}
funkcija(undefined, 4);
funkcija("Antanelis", 2);

//// NR1
function currentSum(sk1, sk2) {
  let sum = sk1 + sk2;
  console.log(sum);
  return sum;
}
currentSum(6, 9);

//// NR2
function countSum(a = 5, b = 17) {
  let suma = a + b;
  return suma;
}
console.log(countSum(1));

//// NR2
function calcAge(birthYear) {
  let date = new Date().getFullYear();
  let age = date - birthYear;
  return age;
}
console.log(calcAge(1945));

////
const mark = {
  firstName: "Mark",
  height: 1.95,
  mass: 101,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};

const zac = {
  firstName: "Zac",
  height: 1.95,
  mass: 101,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};

mark.calcBMI();
zac.calcBMI();

if (zac.bmi > mark.bmi) {
  console.log(
    `${zac.firstName}'s BMI is (${zac.bmi}) higher than ${mark.firstName}'s BMI wich is (${mark.bmi})`
  );
} else if (mark.bmi > zac.bmi) {
  console.log(
    `${mark.firstName}'s BMI is (${mark.bmi}) higher than ${zac.firstName}'s (${zac.bmi})`
  );
} else {
  console.log(
    `${mark.firstName}'s and ${zac.firstName}'s BMI are the same and it's ${zac.bmi}`
  );
}

function hello() {
  console.log("Hello world");
}
