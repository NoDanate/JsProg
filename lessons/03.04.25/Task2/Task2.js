let number1 = Number(prompt("Введите число", 0));
let number2 = Number(prompt("Введите число", 0));

let result = number1 === number2 ? "Числа равны" : `Наибольшее число: ${number1 > number2 ? number1 : number2}`;

alert(result);