//File 1 task 1

const car = {
  manufacturer: "Honda",
  model: "CR-V",
  year: 2013,
  avgSpeed: 120,
};

function showCarInfo(carObj) {
  alert(`Автомобиль: ${carObj.manufacturer} ${carObj.model}\nГод выпуска: ${carObj.year}\nСредняя скорость: ${carObj.avgSpeed} км/ч`);
}

function calcTravelTime(carObj, distance) {
  const speed = carObj.avgSpeed;
  const drivingTime = distance / speed;
  const breaks = Math.floor(drivingTime / 4);
  const totalTime = drivingTime + (breaks > 0 ? breaks - (drivingTime % 4 === 0 ? 1 : 0) : 0);
  
  const hours = Math.floor(totalTime);
  const minutes = Math.round((totalTime - hours) * 60);
  
  return `${hours} ч ${minutes} мин`;
}

showCarInfo(car); 
alert(`Время на 500 км: ${calcTravelTime(car, 500)}`);

//File 2 task 2

const receipt = [
  { name: "Молоко", quantity: 2, price: 80 },
  { name: "Хлеб", quantity: 1, price: 50 },
  { name: "Яблоки", quantity: 3, price: 120 },
  { name: "Шоколад", quantity: 5, price: 60 },
];

function printReceipt(receipt) {
  let receiptText = "=== Чек ===\n";
  receipt.forEach(item => {
    const total = item.quantity * item.price;
    receiptText += `${item.name} | ${item.quantity} × ${item.price} ₽ = ${total} ₽\n`;
  });
  alert(receiptText);
}

function getTotalSum(receipt) {
  return receipt.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function getMostExpensiveItem(receipt) {
  if (receipt.length === 0) return null;
  
  let maxItem = receipt[0];
  receipt.forEach(item => {
    const currentTotal = item.quantity * item.price;
    const maxTotal = maxItem.quantity * maxItem.price;
    if (currentTotal > maxTotal) maxItem = item;
  });
  
  return maxItem;
}

function getAveragePrice(receipt) {
  if (receipt.length === 0) return 0;
  
  const totalSum = getTotalSum(receipt);
  const totalQuantity = receipt.reduce((sum, item) => sum + item.quantity, 0);
  
  return totalSum / totalQuantity;
}

printReceipt(receipt);

const total = getTotalSum(receipt);
alert(`Общая сумма: ${total} ₽`); //710 ₽

const expensiveItem = getMostExpensiveItem(receipt);
alert(`Самая дорогая покупка: ${expensiveItem.name} (${expensiveItem.quantity * expensiveItem.price} ₽)`); 
//Яблоки 360 ₽

const avgPrice = getAveragePrice(receipt);
alert(`Средняя цена товара: ${avgPrice.toFixed(2)} ₽`); //79.09

//File 3 task

function toAbbreviation(phrase) {
  return phrase
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('');
}

alert(toAbbreviation('cascading style sheets')); // CSS
alert(toAbbreviation('object oriented programming')); // OOP
alert(toAbbreviation('application programming interface')); // API