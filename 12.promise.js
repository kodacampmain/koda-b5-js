const janjian = () => {
  return new Promise((resolve, reject) => {
    // resolve => handler keberhasilan
    // reject => handler kegagalan
    setTimeout(() => {
      let uang = 6000;
      let kas = 10000;
      if (uang >= kas) {
        resolve("Terimakasih");
      } else {
        reject("Kejaaaar.....");
      }
    }, 1000);
  });
};
console.log(janjian); // synchronous, maka tidak bisa print hasil dari janjian

janjian()
  .then((result) => {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// setTimeout(() => {
//   console.log("nasi goreng siap");
// }, 1000);
// setTimeout(() => {
//   console.log("sushi siap");
// }, 500);
// setTimeout(() => {
//   console.log("ramen siap");
// }, 600);

// Promise.all([])

// async function bayarKas(){}
// const bayarKas = async function(){}
// const bayarKas = async () => {}

async function bayarKas() {
  try {
    console.log("Sedang menunggu janji rahman untuk bayar kas");
    let result = await janjian();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
bayarKas();

function nasiGoreng() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Nasi Goreng selesai");
    }, 1000);
  });
}
function sushi() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Sushi selesai");
    }, 500);
  });
}
function ramen() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Ramen selesai");
    }, 700);
  });
}

nasiGoreng()
  .then((res) => {
    console.log(res);
    return sushi();
  })
  .then((res) => {
    console.log(res);
    return ramen();
  })
  .then((res) => {
    console.log(res);
    console.log("semua selesai");
  });

async function dapur() {
  try {
    let res = await nasiGoreng();
    console.log(res);
    res = await sushi();
    console.log(res);
    res = await ramen();
    console.log(res);
    console.log("semua selesai");
  } catch (error) {
    console.log(error);
  }
}
dapur();
