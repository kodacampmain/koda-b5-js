const url = "https://jsonplaceholder.typicode.com/todos/201";

fetch(url)
  .then(function (result) {
    if (!result.ok) {
      throw new Error(`${result.status} ${result.statusText}`);
    }
    return result.json();
  })
  .then((body) => {
    let completed = "completed";
    if (!body.completed) {
      completed = "not completed";
    }
    console.log(`${body.title} is ${completed}`);
  })
  .catch((err) => console.log(err.message));
