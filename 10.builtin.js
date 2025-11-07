let items = ["Apple", "Banana", "Cherry", "Durian", "Strawberry"];
//              0           1       2
// pada array dengan panjang 5, maka elemen yang baru akan ditempatkan di idx 5
// pada array dengan panjang 4, maka elemen yang baru akan ditempatkan di idx 4
// pada array dengan panjang 3, maka elemen yang baru akan ditempatkan di idx 3

// 1. assignment ke index yang ditambah
// items[4] = "Eggfruit";
// items[items.length] = "Eggfruit";
// console.log(items);

// 2. spread operator
// items = [...items, "Eggfruit"];

// 3. method array.push
items.push("Eggfruit");

// for loop
for (let i = 0; i < items.length; i++) {
  //   console.log(items[i]);
}
console.log("========================");
// array.forEach
items.forEach(function (item) {
  //   console.log(item);
});

// mencari item
let item = "Semangka";
let isFound = false;

for (let i = 0; i < items.length; i++) {
  if (items[i] === item) {
    isFound = true;
    // console.log(`Buah ${item} ditemukan`);
  }
  //   else {
  //     console.log(`Buah ${item} tidak ditemukan`);
  //   }
}

if (isFound) {
  console.log(`Buah ${item} ditemukan`);
} else {
  console.log(`Buah ${item} tidak ditemukan`);
}

const isItemFound = items.some((fruit) => {
  if (fruit === item) {
    return true;
  } else {
    return false;
  }
});

if (isItemFound) {
  console.log(`Buah ${item} ditemukan`);
} else {
  console.log(`Buah ${item} tidak ditemukan`);
}
