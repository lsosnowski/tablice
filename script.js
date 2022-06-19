// const users = ['jan', 'beata', 'marta', 'anna', 'dawid', 'aaaa'];

// console.log(users[users.length-1]);

// users.push("john");

// users.push("adam");

// console.log(users);



const obj = {
    //klucz : wartość
    firstname: "Jan",
    lastname: "Kowalski",
    city: "Katowice",
    age: 20,
    userInfo: () => {
        console.log("To jest Jan Kowalski")
    }

};

obj.userInfo();
console.log(obj.city);



// const dog = {
//     name: "Azor";
//     color: "black";
//     age: 3;

// }

// console.log(dog.color);

const user = [
    {
        firstname: "Jan",
        age: 18,
        city: "Wrocław",
    },
    {
        firstname: "Beata",
        age: 21,
        city: "KAtowice", 
    },
    {
        firstname: "John",
        age: 35,
        city: "Londyn",
    },
]

console.log(user);
console.log(user[0].city);
console.log(Object.keys(user[0]));
console.log(Object.entries(user[0]));




const clock = document.getElementById("clock");
//oiekt Date

const addZero = (num) => {
    if (num < 10) {
        return `0${num}`
    }
    else {
        return num;
    }
}


const showTime = () => {
    const currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    clock.textContent = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}


setInterval(() => {
    showTime();
},1000)

