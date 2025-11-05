// operator perbandingan
// console.log(3 == "3"); // value
// console.log(3 === "3"); // value & tipedata
// console.log(4 != "4");
// console.log(4 !== "4");

// const num = 12;
// if (num % 3 == 0 || num % 5 == 0) {
//   console.log("kelipatan 3 atau 5");
// }

// if - else
// if (kondisi) {}
// else {}
let nilai = 67;
if (nilai > 85 && nilai <= 100) {
  // (nilai > 85 && nilai <= 100) == true
  console.log("A");
} else if (nilai > 75 && nilai <= 85) {
  // (nilai > 75 && nilai <= 85) == true
  console.log("B");
} else if (nilai > 60 && nilai <= 75) {
  // (nilai > 60 && nilai <= 75) == true
  console.log("C");
} else if (nilai > 50 && nilai <= 60) {
  console.log("D");
} else if (nilai > 0 && nilai <= 50) {
  console.log("E");
} else {
  console.log("Error: Nilai diluar jangkauan");
}

// switch(variabel_pembanding/dicek){
//  case value_yang_dibandingkan: aksi
//  default:
// }
let day = 7;
switch (day) {
  case 1: // day == 1
    console.log("Senin");
    break;
  case 2: // day == 2
    console.log("Selasa");
    break;
  case 3: // day == 3
    console.log("Rabu");
    break;
  case 4: // day == 4
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Invalid");
}

// menggunakan switch pada kasus range
let score = 67;
switch (true) {
  case score > 85 && score <= 100:
    console.log("A");
    break;
  case score > 75 && score <= 85:
    console.log("B");
    break;
  case score > 60 && score <= 75:
    console.log("C");
    break;
  case score > 50 && score <= 60:
    console.log("D");
    break;
  case score > 0 && score <= 50:
    console.log("E");
    break;
  default:
    console.log("Error: Nilai diluar jangkauan");
}

let input = 2;
// validasi nilai
// hanya yang bernilai truthy yang
// ditampilkan
if (input) {
  console.log("konten input: ", input);
}

// ternary operator
let output = input ? input * 2 : input * 1;
// short circuit logic
let out = input * 2 || input * 1;
// hashmap
const numToDay = {
  1: "Senin",
  2: "Selasa",
  3: "Rabu",
  4: "Kamis",
  5: "Jumat",
  6: "Sabtu",
  7: "Minggu",
};
let num = 1;
if (numToDay[num]) {
  console.log(numToDay[num]);
} else {
  console.log("Invalid Num");
}
console.log(numToDay[num] || "Invalid Num");
