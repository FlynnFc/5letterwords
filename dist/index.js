"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = exports.random = void 0;
const words_json_1 = require("../words.json");
const dataArray = Array.from(Object.keys(words_json_1.default));
const dataMap = new Map(Object.entries(words_json_1.default));
function random() {
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    return dataArray[randomIndex];
}
exports.random = random;
function isValid(word) {
    return dataMap.has(word);
}
exports.isValid = isValid;
