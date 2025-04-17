const person = {
    name: "Ilia",
    age: 22,
    "likes birds": true,
    address:{
        city: "Moscow",
        zip: "643251",
    },
    
    add(a, b){
        alert(a+b)
    },

    greet(){
        alert(`Привет, я ${this.name}`);
    },
}

//const calcucateAB = person.add(123, 1);

//calcucateAB();

//person.greet();

let cat = new Object();
cat.breed = "Aby";

let array = new Array();
let array2 = ["first", "second"]
let array3 = [1,2,3,4,5, true, "string"];

//alert(array3.map(n => n * 2))
//alert(array3.filter(n => n % 2 === 0))
//alert(array3.reduce((sum, n) => sum + n, 0));
array3[3] = 6;

//array3.forEach((n,i) => alert(i, n));

const dogs= [
    { id: 1, name: "Jack"},
    { id: 2, name: "Moomin"}
]

let names = dogs.map(n => n.name);

//alert(names);


let fruits = ["apple", "banada"]

fruits.push("cherry");

for(let fruit in fruits){
    alert(fruits[fruit]);
}

let first = fruits.shift();

alert(fruits);

alert(first)

let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

//alert(stack);
//alert(stack.pop());
//alert(stack.pop());
//alert(stack);