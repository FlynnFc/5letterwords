"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = exports.random = void 0;
const words_json_1 = __importDefault(require("./words.json"));
const all5Letterwords_json_1 = __importDefault(require("./all5Letterwords.json"));
const dataArray = Array.from(Object.keys(words_json_1.default));
const dataMap = new Set(Object.keys(all5Letterwords_json_1.default));
function random() {
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    return dataArray[randomIndex];
}
exports.random = random;
function isValid(word) {
    return dataMap.has(word);
}
exports.isValid = isValid;
