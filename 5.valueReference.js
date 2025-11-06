// value type
let a = 2;
let b = a;
b = 3;

console.log(a, b);

// reference type
const hobbies = ["Hiking", "Gaming"]; //0x001
const myHobbies = ["Hiking", "Gaming"]; //0x002
const hobbies2 = hobbies;

console.log(hobbies == myHobbies); // false
// karena referensi/alamat memori/pointer berbeda
console.log(hobbies == hobbies2);
hobbies2[1] = "Sleeping";
console.log(hobbies2);
console.log(hobbies);
