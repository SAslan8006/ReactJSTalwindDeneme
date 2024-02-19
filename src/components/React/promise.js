const Axios = require("axios");

const getComments = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await Axios("https://jsonplaceholder.typicode.com/users")
        resolve(data);
    });
}

getComments(2)
    .then((data) => console.log(data))
    .catch(e => console.log(e));

const getPost = (post) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await Axios("https://jsonplaceholder.typicode.com/posts/" + post)
        resolve(data);
    });
}

getPost(2)
    .then((data) => console.log(data))
    .catch(e => console.log(e));

// (async () => {
//     await getComments(2)
//         .then((data) => console.log(data))
//         .catch(e => console.log(e));
//     await getPost(2)
//         .then((data) => console.log(data))
//         .catch(e => console.log(e));

// })();

// (async () => {
//     const user = await getComments(2)
//     const post = await getPost(2)

//     console.log(user)
//     console.log(post)
// })();

// (async () => {
//     try {
//         const user = await getComments(2)
//         const post = await getPost(2)
//         console.log(user)
//         console.log(post)
//     } catch (e) {
//         console.log(e)
//     }
// })();

//Tüm Promiseleri çalıştırmak için

Promise.all([getComments(1), getComments(2)])
    .then(console.log())
    .catch(e => console.log(e));
