/* 1. Izračunaj sumu svih parnih brojeva nekog proizvoljnog niza od minimalno 10 članova. */

const numbers = [5, 8, 25, 37, 42, 68, 102, 33, 55, 19]
let sum = 0;

for (let i = 0; i < numbers.length; i++) 
  if (numbers[i] % 2 === 0) {
    sum += numbers[i]
}
console.log("Zbroj svih parnih brojeva numbersa je:" + sum);

/* 2.	Pronađi najmanji i najveći član niza i zbroji te brojeve, pa ako je zbroj manji od 10, 
ispiši "Zbroj je jednoznamenkast", a ako je veći od 10, ispiši taj broj  */

const numbers = [5, 8, 13, 17, 19, 20]
let sum = (Math.min (...numbers) + Math.max (...numbers));

if (sum < 10) {
    console.log("Zbroj je jednoznamenkast");
}
else if (sum > 10) {
    console.log(sum);
}

/* 3.	Iz niza stringova unijetih preko konzole, izbaci sve što nije voće  */
// const array = ['mango', 'something', 'banana', 'jabuka', 'kruska', 'in', 'naranca', 'myString']; // test
const array = process.argv.slice(2);
const fruitsArray = [];

function isFruit(fruit) {
  return (
    fruit === "jabuka" ||
    fruit === "naranca" ||
    fruit === "banana" ||
    fruit === "kruska" ||
    fruit === "mango"
  );
}

for (let i = 0; i < array.length; i++) {
  if (isFruit(array[i])) {
    fruitsArray.push(array[i]);
  }
}
console.log(fruitsArray);


/* // 4.	Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, 
te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda */

const myArray = [5, 1, "my", 2, 3, "beautiful", 4, "day"]
let numbersArray = []
let reversedArray = []

for (let i = 0; i < myArray.length; i++) {
    if (+myArray[i]) {
      numbersArray.push(myArray[i]);
    }
  }
  console.log(numbersArray);

  for (let i = numbersArray.length-1; i >= 0; i--) {
    reversedArray.push(numbersArray[i])
  }
  console.log(reversedArray);
  
  /* 5.	Uz pomoć petlji, kreiraj ovakav ispis:
0123456789
012345678
01234567
0123456
012345
01234
0123
012
01
0
*/

const numbers = "0123456789";
for (i=numbers.length; i >= 0; i--) {
    console.log(numbers.slice(0, i));
}

/* s for of petljom */
for (let n of numbers) {
  console.log(numbers.substring (++n, 0));
} /* nema šanse da obrnem */

 