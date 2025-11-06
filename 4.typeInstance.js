const num1 = 1;
const num2 = 2;
// const total = num2 - num1;
let total = 0;

// console.log(total, typeof total);
// type coercion => pengubahan paksa tipe data dari suatu variabel
if (typeof num1 !== "number") {
  console.log("num1 invalid");
} else {
  if (typeof num2 !== "number") {
    console.log("num2 invalid");
  } else {
    total = num1 + num2;
    console.log(total);
  }
}
// validasi dulu, baru dioperasikan

// instance => object dan turunannya (class, array)
class Car {}
const x = new Car();
if (x instanceof Object) {
  console.log("valid");
} else {
  console.log("invalid");
}

const y = [];
if (y instanceof Object){
// if (Array.isArray(y)) {
  console.log("array");
} else {
  console.log("bukan array");
}
