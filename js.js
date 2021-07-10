let words = [
  "один",
  "два",
  "три",
  "четыре",
  "пять",
  "шесть",
  "семь",
  "восемь",
  "девять",
  "десять",
];

// Выбираем случайное слово
let pickWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};
// Создаем итоговый массив
let setupAnswerArray = function (word) {
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};
// Показываем состояние игры
let showPlayerProgress = function (answerArray) {
  return alert(answerArray.join(" ") + `  Осталось попыток:  ${count}`);
};
// Запрашиваем вариант ответа
let getGuess = function () {
  return (guess = prompt(
    `Угадайте букву. Осталось попыток:  ${count}`
  ).toLowerCase());
};
// Обновляем состояние игры
let updateGameState = function (guess, word, answerArray) {
  let countLetters = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
      answerArray[j] = guess;
      countLetters++;
      count++;
    }
  }
  return countLetters;
};

let word = pickWord();
// Отображение ответа
let showAnswer = function (word) {
  return alert(`Было загадано слово: ${word}`);
};
let count = word.length + 5;
let answerArray = setupAnswerArray(word);
// Сколько букв осталось угадать
let remainingLetters = word.length;
// Игровой цикл
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Введите 1 букву");
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    count--;
  }
  if (count === 0) {
    // Считаем количество попыток
    alert("Попытки кончились");
    showAnswer(word);
    break;
  }
}
// Конец игрового цикла
if (remainingLetters === 0) {
  showAnswer(answerArray.join(""));
}
