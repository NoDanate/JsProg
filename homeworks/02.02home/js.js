/*let n = prompt('Как Вас зовут?', "Gubby");
alert(`Привет, ${n}!`);

let bYear = prompt('В каком году ты родился?', 2025);
alert(`Тебе ${2025 - bYear} лет!`);

let a = prompt(`Введи сторону квадрата`, 100);
alert(`Периметр: ${a*4}`);

let r = prompt(`Введи радииус окружности`, 10);
alert(`Площадь окружности: ${3.14 * r**2}`);

let S = prompt(`Какое расстояние между городами в км?`, 100);
let time = prompt(`За сколько часов ты хочешь его преодолеть?`, 100);
alert(`Ты проедешь это расстояние со скоростью ${S / time} км/ч`);*/

let dol = prompt('Enter dollars', 100);
const euro = 0.8775;
alert(`in euro: ${dol * euro}!`);

let Flashsize = prompt('Enter size of Flash in GB', 1);
alert(`You can ride ${Math.floor((Flashsize*1024) / 820)} files 820MB each`);

let money = prompt('Enter how much money do you have', 100);
let chock = prompt('Enter how much one chokolate cost', 47);
alert(`You can ride ${Math.floor(money / chock)} chocolates and after that you'll have ${money - Math.floor(money / chock)}`);

let num = prompt('Enter num', 123);
let rev1 = num % 10;
let rev2 = Math.floor(num / 10) % 10;
let rev3 = Math.floor(num/100);
alert(`Reverce number is ${rev1*100 + rev2*10 + rev3}`);

let number = prompt('Enter number', 2);
number % 2 == 0 ? alert('Even') : alert('Odd');