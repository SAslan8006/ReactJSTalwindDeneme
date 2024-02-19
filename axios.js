// const axios = require("axios");

// (async () => {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users")

//     //Yeniden adlandırmak için bu şekilde kullanılar
//     const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/1")

//     console.log("Userlar:", data)
//     console.log("Postlar:", posts)
// })();

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Comments");
//         console.log("reject:", reject);
//         console.log("resolve:", resolve);
//     });
// }

// getComments()
//     .then((data) => console.log(data))
//     .catch(e => console.log(e));

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number == 1) {
            resolve({ text: "Selam" });
        }
        reject("Bir Problem Oluştu!");
    });
}

getComments(2)
    .then((data) => console.log(data))
    .catch(e => console.log(e));