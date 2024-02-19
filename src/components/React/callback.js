//5 sn içinde içideki kodu yapar ne yapmasını istersen
setTimeout(() => {

}, 5000);

//her 1000 milisaniyede bir kodu yapar
setInterval(() => {

}, 1000);

const sayHi = () => {
    console.log("merhaba")
}

sayHi();

//callback fonksiyonu alarak bir fonksiyonu cagırır
const sayHi2 = (cb) => {
    cb()
}

//bir fonksiyonu cagırırken bir fonksiyonu parametre olarak verir
sayHi2(() => { console.log("merhaba") });

//Api den veri cekme islemi yapar
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => console.log(users)
    )

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Userlar:", users)
        fetch(`https://jsonplaceholder.typicode.com/post`)
            .then((data) => data.json())
            .then((posts) => console.log("Postlar", posts))
    }
    )

//api den veri cekme islemi async olarak yapılır 
async function getData() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
    console.log("Userlar:", users)
    console.log("Postlar:", posts)
}

getData();

//anonim fonksiyon
(async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
    console.log("Userlar:", users)
    console.log("Postlar:", posts)
})();

// //parametreli anonim fonksiyon
// ((name, surname) => console.log(`${name} ${surname}`))('hatice', 'nur');