import data from './words.json';

const dataArray = Array.from(Object.keys(data));
const dataMap = new Map(Object.entries(data));

function random() {
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  return dataArray[randomIndex];
}

function isValid(word:string) {
  return dataMap.has(word);
}

export { random, isValid };
