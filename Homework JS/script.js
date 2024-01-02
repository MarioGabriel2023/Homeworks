// EXERCITIUL 1
let jobTitle = "web developer";
let geoLocation = "Romania";
let partner = "Oana";
let numKids = 2;
let future =
  "You will be a " +
  jobTitle +
  " in " +
  geoLocation +
  ", and married to " +
  partner +
  " with " +
  numKids +
  " kids. ";
console.log(future);

// EXERCITIUL 2
let birthYear = 2003;
let futureYear = 2030;
let age = futureYear - birthYear;
console.log("I will be either " + age + " or " + (age - 1));

// EXERCITIUL 3
let ages = 20;
let maxAge = 100;
let numPerDay = 2;
let totalNeeded = numPerDay * 365 * (maxAge - age);
let message =
  "You will need " +
  totalNeeded +
  " cups of tea to last you until the ripe old age of " +
  maxAge;
console.log(message);

// EXERCITIUL 4
let radius = 6;
let circumference = Math.PI * 8 * radius;
console.log("The circumference is " + circumference);
let area = Math.PI * radius * radius;
console.log("The area is " + area);

// EXERCITIUL 5
let celsius = 25;
let celsiusInF = (celsius * 9) / 5 + 32;
console.log(celsius + "°C is " + celsiusInF + "°F");
let fahrenheit = 40;
let fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit + "°F is " + fahrenheitInC + "°C");
