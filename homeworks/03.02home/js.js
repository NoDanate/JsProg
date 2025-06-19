// 1. Сравнение чисел
function compare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

// 2. Факториал числа
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// 3. Объединение цифр в число
function toNumber(a, b, c) {
  return +(`${a}${b}${c}`);
}

// 4. Площадь прямоугольника или квадрата
function area(a, b) {
  return b === undefined ? a * a : a * b;
}

// 5. Проверка на совершенное число
function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum === n;
}

// 6. Поиск совершенных чисел в диапазоне
function findPerfect(min, max) {
  const perfects = [];
  for (let i = min; i <= max; i++) if (isPerfect(i)) perfects.push(i);
  return perfects;
}

// 7. Форматирование времени в «чч:мм:сс»
function formatTime(h, m = 0, s = 0) {
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// 8. Перевод времени в секунды
function toSeconds(h, m, s) {
  return h * 3600 + m * 60 + s;
}

// 9. Перевод секунд в «чч:мм:сс»
function secondsToTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return formatTime(h, m, s);
}

// 10. Разница между датами
function dateDiff(h1, m1, s1, h2, m2, s2) {
  const diff = Math.abs(toSeconds(h1, m1, s1) - toSeconds(h2, m2, s2));
  return secondsToTime(Math.abs(diff));
}

