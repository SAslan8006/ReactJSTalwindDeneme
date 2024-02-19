const users = [
    {
        name: "ahmet",
        age: 20,
    },
    {
        name: "veli",
        age: 30
    },
    {
        name: "mehmet",
        age: 40
    }
]

/*
push
map
find
some
every
includes
*/

const newAray = users.push("ali")
const newAray1 = users.push("yusuf")

console.log(newAray1, newAray, users) // [ 'ahmet', 'veli', 'mehmet', 'ali' ] []  
// map ile yeni bir array oluşturma

//map 
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}


users.map((item) => { console.log(item.name) })

// find ile belirli bir elemanı bulma
users.find((item) => {
    if (item.name === "ahmet") {
        console.log(item)
    }
})

const result = users.find((item) => item.name === "ahmet")
console.log(result);

const result1 = users.find((item) => item.name === "ahmet" && item.age === 20)
console.log(result1);

//Filter ile belirli bir elemanı bulma
const filtred = users.filter((item) => item.age > 30)
console.log(filtred);

// some ile en az bir tanesini kontrol etmek
console.log(users.some((item) => item.age > 30))

//every ile tüm tanesini kontrol etmek
console.log(users.every((item) => item.age > 30))

//includes
console.log(users.includes("veli"))
