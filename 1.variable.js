// scope
// ruang lingkup dimana variabel bisa dipanggil/digunakan
// global scope => pembatas nya adalah file
// function scope => pembatasnya adalah {} fungsi
// block scope => pembatasnya adalah {}
var satu = "satu";
function f() {
  //   var satu = 1;
  console.log(satu);
}
// f();
// console.log(satu);

{
  let dua = 2;
  {
    // console.log(dua);
  }
}

// hoisting => bentuk deklarasi dari variabel dinaikkan
// let variabel = "variabel"
// console.log(variabel); // undefined
var variabel = "variabel";
// console.log(variabel);

// a(); // bisa berjalan sebagaimana mestinya
function a() {
  console.log("fungsi A");
}
// a();

const fullName = "Matthew O'Connor";
// console.log(fullName);

const money = 2500000;
const moneyWithUnderscore = 2_500_000;
const moneyWithScience = 2.5e6;
// console.log(money);
// console.log(moneyWithUnderscore);
// console.log(moneyWithScience);

const isActive = true;
const isMarried = false;

// undefined vs null vs 0
// undefined -> belum diberikan nilai
// null -> diberikan nilai yang berarti kosong/tidak ada
// 0 -> melambangkan angka 0

// Array
// koleksi/kumpulan nilai/variabel
// nilai nilai nya bisa berbeda tipe data
const arr = [1, "0", true, function () {}, { key: "value" }, undefined, null,[1]];
// console.log(arr);
// untuk mendapatkan elemen array, bisa menggunakan index
// index => posisi, dimulai dari 0
// arr[index]
console.log(arr[7][0]); // 1
console.log(arr[4].key);
console.log(arr[4]["key"]);

// Object
// koleksi/kumpulan nilai/variabel
// pasangan key (number, string) dan value (any)
// biasa digunakan sebagai deskripsi
const student = {
  nisn: "0009321234",
  firstname: "Budi",
  lastname: "Siregar",
  isMarried: false,
  getFullName: function () {},
  major: null,
  hobbies: ["Membaca", "Membantu", "Berdoa"],
  address: undefined,
};
// untuk mendapatkan value dari objek, kita menggunakan key
// obj.key
// obj["key"]
console.log(student.firstname);
console.log(student["firstname"]);
console.log(student.hobbies[0]);
console.log(student["hobbies"][0]);
