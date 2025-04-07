//

let num = Number(prompt("Число для факториала: "));

if(isNaN(num) || num < 0){
    alert("Введите неотрицательное число");
}
else {
    let fact = 1;
    let i = num;

    while(i > 1) {
        fact *= i;
        i--;
    }

    alert(`Факториал числа ${num} равен ${fact}`);
}

//

let num1 = 1000;
let count = 0;

while (num1 >= 50){
    num1 /= 2;
    count++;
}

alert(`Итоговое число ${num1} делили ${count} раз`);

//

let num3 = Number(prompt("Enter number: "));

if(isNaN(num3) || num3 < 2 || !Number.isInteger(num3)) {
    alert("Введите нормальное число от 2 и более");
}
else{
     let IsPrime = true;
     let i = 2;

     while(i <= Math.sqrt(num3)){
        if(num3 % i === 0){
            
        }
     }
}