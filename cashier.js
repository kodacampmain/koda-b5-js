// 1. mulai
// 2. menentukan besar uang kembalian
// 3. i <- 0
// 4. asumsi kan pecahan sudah diurutkan dari yang paling besar
// 5. jika uang kembalian sudah habis maka lanjut ke langkah 8
// 6. jika uang kembalian lebih besar dari pecahan ke-i, maka uang kembalian dikurangi dengan pecahan tsb, lalu tambahkan nilai counter dari pecahan tsb, kemudian kembali ke langkah 5
// 7. jika tidak, i = 1 + 1 lalu kembali ke langkah 5
// 8. tampilkan counter dari masing2 pecahan
// 9. selesai

const pecahan = [50_000, 10_000, 5_000, 2_000, 1_000];
let uangKembalian = 50_000;
let i = 0;
const counter = {
  1_000: 0,
  2_000: 0,
  5_000: 0,
  10_000: 0,
  50_000: 0,
};
// console.log(counter[pecahan[0]])

while (uangKembalian > 0) {
  if (uangKembalian >= pecahan[i]) {
    uangKembalian = uangKembalian - pecahan[i];
    counter[pecahan[i]]++;
  } else {
    i = i + 1;
  }
}

const keys = Object.keys(counter);
for (let i = 0; i < keys.length; i++) {
  if (counter[keys[i]] != 0) {
    console.log(keys[i], counter[keys[i]], "lembar");
  }
}
console.log("=====================================")
let j = 0;
while (keys[j]) {
  if (counter[keys[j]] != 0) {
    console.log(keys[j], counter[keys[j]], "lembar");
  }
  j++;
}
