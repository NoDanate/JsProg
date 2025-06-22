// 1. Сравнение чисел
function compare(a, b) {
  return a < b ? "<" : a > b ? ">" : "=";
}
alert(`1: 2 ${compare(2, 3)} 3`);

// 2. Факториал числа
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
alert(`2: ${factorial(4)}`);

// 3. Объединение цифр в число
function toNumber(a, b, c) {
  return +(`${a}${b}${c}`);
}
alert(`3: ${toNumber(2, 2 ,8)}`);

// 4. Площадь прямоугольника или квадрата
function area(a, b) {
  return b === undefined ? a * a : a * b;
}
alert(`4: ${area(4, 9)}`);

// 5. Проверка на совершенное число
function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum === n;
}
alert(`5: ${isPerfect(42)}`);
alert(`5: ${isPerfect(28)}`);

// 6. Поиск совершенных чисел в диапазоне
function findPerfect(min, max) {
  const perfects = [];
  for (let i = min; i <= max; i++) if (isPerfect(i)) perfects.push(i);
  return perfects;
}
alert(`6: ${findPerfect(13, 172)}`);

// 7. Форматирование времени в «чч:мм:сс»
function formatTime(h, m, s) {
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
alert(`7: ${formatTime(7, 23, 52)}`);

// 8. Перевод времени в секунды
function toSeconds(h, m, s) {
  return h * 3600 + m * 60 + s;
}
alert(`8: ${toSeconds(9, 21, 4)}`);

// 9. Перевод секунд в «чч:мм:сс»
function secondsToTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return formatTime(h, m, s);
}
alert(`9: ${secondsToTime(34212)}`);

// 10. Разница между датами
function dateDiff(h1, m1, s1, h2, m2, s2) {
  const diff = Math.abs(toSeconds(h1, m1, s1) - toSeconds(h2, m2, s2));
  return secondsToTime(Math.abs(diff));
}
alert(`10: ${dateDiff(5 ,26, 12, 2, 58, 1)}`);