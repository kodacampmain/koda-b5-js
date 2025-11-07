console.log(1 + 1);
console.log(2 + 2);

// async
setTimeout(() => {
  console.log("async 1");
}, 1_000);
setTimeout(() => {
  console.log("async 2");
}, 3_000);
setTimeout(() => {
  console.log("async 3");
}, 999);

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 1000);
  }, 2000);
}, 1000);
