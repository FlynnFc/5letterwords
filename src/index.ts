import possibleAnswers from './words.json';
import allowedWords from './all5Letterwords.json'
const dataArray = Array.from(Object.keys(possibleAnswers));
const dataMap = new Set(Object.keys(allowedWords))

function random() {
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  return dataArray[randomIndex];
}

function isValid(word:string) {
  return dataMap.has(word);
}

export { random, isValid };
