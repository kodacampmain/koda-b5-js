// declaration
function helloWorld() {
  console.log("Hello World");
  return "Hello World";
}
// expression
const penjumlahan = function (num1, num2) {
  const total = num1 + num2;
  return total;
};
// arrow function
const celciusToKelvin = (celcius) => {
  const kelvin = celcius + 273;
  return kelvin;
};

/**
 * 2 bentuk:
 * 1. bentuk fungsi ketika sebelum dijalankan (helloWorld, penjumlahan, celciusToKelvin)
 * 2. bentuk ketika fungsi sudah dijalankan (helloWorld(), penjumlahan(1,2), celciusToKelvin(30))
 */
// const outHello = helloWorld();
// const outPenjumlahan = penjumlahan(1, 2);
// const outKelvin = celciusToKelvin(30);
// console.log(helloWorld);
// console.log(outHello);
// console.log(penjumlahan);
// console.log(outPenjumlahan);
// console.log(celciusToKelvin);
// console.log(outKelvin);

// IIFE
// (function () {
//   console.log("Hello World");
// })();
// (function (num1, num2) {
//   const total = num1 + num2;
//   console.log(total);
// })(3, 9);
// (function (celcius) {
//   const kelvin = celcius + 273;
//   console.log(kelvin);
// })(20);

// closure
function createCounter() {
  let counter = 0;
  function increment() {
    counter++;
    console.log(counter);
  }
  return increment;
}
const counter1 = createCounter();
// counter1();
// counter1();
// counter1();
const counter2 = createCounter();
// counter2();
// counter2();

// let count1 = 0;
// let count2 = 0;
// function increaseCounter(counter) {
//   counter++; // counter = counter + 1
//   console.log(counter);
// }
// increaseCounter(count1);
// increaseCounter(count1);
// increaseCounter(count1);
// increaseCounter(count2);
// increaseCounter(count2);

// method
// fungsi yang berada didalam object
// fungsi yang merupakan value dari key di object
const profile = {
  id: 1,
  firstName: "Andi",
  lastName: "Siregar",
  address: "Bogor",
  isMarried: true,
  password: "12345",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }, // deklarasi
  getMarriedStatus: function () {
    if (this.isMarried) {
      return "Sudah Menikah";
    } else {
      return "Tidak Menikah";
    }
  }, // ekspresi
  getCity: () => {
    return `Bertempat tinggal di ${this.address}`;
  }, // arrow function
  changePassword(newPassword) {
    this.password = newPassword;
  },
};

const { getCity } = profile;

const fullName = profile.getFullName();
console.log(fullName);

const marriedStatus = profile.getMarriedStatus();
console.log(marriedStatus);

this.address = "Jakarta";
const domicile = getCity();
console.log(domicile);

console.log(profile.password);
profile.changePassword("54321");
console.log(profile.password);
