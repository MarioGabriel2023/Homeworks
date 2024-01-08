// 1. Scrie o secvență de cod, care verifica dacă un elev are nota mai mare de 5 și printeaza “Admis”, in caz contrar printeaza “Respins”.
let studentGrade = 7;

if (studentGrade > 5) {
  console.log("Admis");
} else {
  console.log("Respins");
}

// 2. Scrie o secvență de cod, care afișează maximul dintre 3 numere.
let number1 = 19;
let number2 = 23;
let number3 = 27;

let maxim = Math.max(number1, number2, number3);
console.log("Maximul dintre cele trei numere este:", maxim);

// 3.Scrie o secvență de cod, care contine o zi a saptamanii sub forma de număr și printeaza numele zilei.
let day = 1;

switch (day) {
  case 1:
    console.log("Luni");
    break;
  case 2:
    console.log("Marți");
    break;
  case 3:
    console.log("Miercuri");
    break;
  case 4:
    console.log("Joi");
    break;
  case 5:
    console.log("Vineri");
    break;
  case 6:
    console.log("Sâmbătă");
    break;
  case 7:
    console.log("Duminică");
    break;
  default:
    console.log("Numărul nu corespunde unei zile");
    break;
}

// 4. Scrie o secvență de cod, care printeaza pe ecran, toate numerele prime de la 10.000 la 1.

for (let number = 10000; number >= 2; number--) {
  let prim = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      prim = false;
      break;
    }
  }

  if (prim) {
    console.log(number);
  }
}
