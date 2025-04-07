/*const person ={
    name: "Fedor",
    age: 16,
    "likes cats": true,
    address:{
        city: "Tymen",
        zip: "643251",
    },

    add(a, b){
        alert( a + b);
    },

    greet(){
        alert(`Привет, я ${this.name}`);
    }
};*/

//const calculateAB = person.add(123, 1);

//calculateAB();

//person.greet();

let cat = new Object();
cat.breed = "Aby";

let array = new Array();
let array2 = ["first", "second"];
let array3 = [1, 2, 3, 4, 5, true, "string"];

//alert(array3.map(n => n*2));
///alert(array3.filter(n => n % 2 === 0));
//alert(array3.reduce((sum, n) => sum + n, 0));
array3[3] = 6;

//array3.forEach((n, i) => alert(i, n));

const dogs = [
    {id: 1, name: "Jack"},
    {id: 2, name: "Malysh"}
];

let names = dogs.map(n => n.name);

//alert(names);

let fruits = ["apples", "banana"];

fruits.push("cherry");

let first = fruits.shift();

alert(fruits);

alert(first);
