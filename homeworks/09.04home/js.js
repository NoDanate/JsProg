// Task1
const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);

// 1
function displayArray(arr) {
  console.log("Массив:", arr.join(', '));
}

// 2
function displayEvenElements(arr) {
  const evens = arr.filter(num => num % 2 === 0);
  console.log("Четные элементы:", evens.join(', '));
}

// 3
function getArraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 4
function getMaxElement(arr) {
  return Math.max(...arr);
}

// 5
function addElementAtIndex(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

// 6
function removeElementAtIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
}

displayArray(randomArray);
displayEvenElements(randomArray);
console.log("Сумма элементов:", getArraySum(randomArray));
console.log("Максимальный элемент:", getMaxElement(randomArray));

const newArray = addElementAtIndex([...randomArray], 3, 999);
console.log("Массив после добавления элемента:", newArray.join(', '));

const removedArray = removeElementAtIndex([...randomArray], 5);
console.log("Массив после удаления элемента:", removedArray.join(', '));




// Task2
const secondArray = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1);

// 1
function mergeArraysUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// 2
function findCommonElements(arr1, arr2) {
  return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

// 3
function findUniqueElements(arr1, arr2) {
  return [...new Set(arr1.filter(item => !arr2.includes(item)))];
}

console.log("Первый массив:", randomArray.join(', '));
console.log("Второй массив:", secondArray.join(', '));

console.log("Объединенный массив без повторений:", 
  mergeArraysUnique(randomArray, secondArray).join(', '));

console.log("Общие элементы:", 
  findCommonElements(randomArray, secondArray).join(', '));

console.log("Уникальные элементы первого массива:", 
  findUniqueElements(randomArray, secondArray).join(', '));


// Task3
const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Киви', 'Манго', 'Груша', 'Персик'];
fruits.sort((a, b) => a.localeCompare(b));

// 1
function displayFruitsList(fruitsArray) {
  document.write('<h3>Список фруктов:</h3><ul>');
  fruitsArray.forEach(fruit => {
    document.write(`<li>${fruit}</li>`);
  });
  document.write('</ul>');
}

// 2
function findFruitIndex(fruitsArray, fruitName) {
  const lowerCaseFruit = fruitName.toLowerCase();
  return fruitsArray.findIndex(
    fruit => fruit.toLowerCase() === lowerCaseFruit
  );
}

displayFruitsList(fruits);

console.log("Индекс 'банан':", findFruitIndex(fruits, 'банан')); // 1
console.log("Индекс 'БАНАН':", findFruitIndex(fruits, 'БАНАН')); // 1
console.log("Индекс 'Ананас':", findFruitIndex(fruits, 'Ананас')); // -1