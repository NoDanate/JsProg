let yourCar = prompt("Какая у вас машина?", "машины нет");

const person ={
    name: "Fedor",
    age: 16,
    "likes cats": true,
    address:{
        city: "Tymen",
        zip: "643251",
    },

    [yourCar]: 1,

    greet(){
        alert(`Привет, я ${this.name}`);
    }
}

alert(yourCar["машины нет"]);