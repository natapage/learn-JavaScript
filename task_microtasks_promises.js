task_microtasks_promises.js;
const iCantGetRidOfPromise = () => {
  console.log(0);
  setTimeout(() => console.log(1), 50);
  setTimeout(console.log, 0, 2);
  new Promise((resolve) => {
    console.log(3);
    setTimeout(() => resolve(4));
  })
    .then(console.log)
    .then(() => console.log(5))
    .catch(() => console.log(6))
    .then(() => {
      setTimeout(() => console.log(7));
    });

  setTimeout(() => {
    console.log(8);
  });

  Promise.reject(9)
    .then(() => console.log(10))
    .catch(console.log);

  console.log(11);
};

// iCantGetRidOfPromise()

// 0 3 11 9 2 4 5 8 7 1

_________________________________________________________________________________________________;

// https://jsonplaceholder.typicode.com/

// Получить все посты, примешать к ним username юзера, а также общее количество постов
// Из этого:
// {
//     userId: number
//     id: number
//     title: string
//     body: string
// };

// // Получить вот это:
// {
//     userId: number
//     id: number
//     title: string
//     body: string
//     username: string
//     countUserPost: number
// };

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/").then((resp) =>
    resp.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/users/").then((resp) =>
    resp.json()
  ),
]).then(([posts, users]) => {
  for (let item of users) {
    for (let el of posts)
      if (item.id === el.id) {
        el.username = item.username;
        el.countUserPost = users.length;
      }
  }
  console.log(posts);
});
