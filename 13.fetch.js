const url = "https://jsonplaceholder.typicode.com/todos/200";
const userUrl = "https://jsonplaceholder.typicode.com/users";

fetchUrl(url)
  .then((body) => {
    let completed = "completed";
    if (!body.completed) {
      completed = "not completed";
    }
    console.log(`${body.title} is ${completed}`);
    return fetchUrl(userUrl);
  })
  .then((body) => {
    const names = [];
    for (let i = 0; i < body.length; i++) {
      names[i] = body[i].name;
    }
    // console.log(names);
    return names;
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

function fetchUrl(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.json();
  });
}
