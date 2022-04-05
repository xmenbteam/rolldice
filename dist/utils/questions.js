"use strict";
// WHAT TO ASK?
/*
1. Do you want to roll a single dice?
    a. Yes - list - default d20
    b. No - checkbox
2. If d20 - do you have advantage?
3. What is the dice's modifier?

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplDiceQuestions = exports.singleDiceQuestions = exports.modifier = exports.isAdvantage = exports.howManyDice = exports.whatKindOfDiceMultiple = exports.whatKindOfDiceSingle = exports.diceCount = void 0;
exports.diceCount = {
    type: "list",
    name: "numberOfDice",
    message: "Do you want to roll a single dice?",
    choices: ["Single", "Multiple"],
    default: "Single",
};
exports.whatKindOfDiceSingle = {
    type: "list",
    name: "whatKindOfDiceSingle",
    message: "What dice are you rolling?",
    choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    default: "d20",
};
exports.whatKindOfDiceMultiple = {
    type: "checkbox",
    name: "whatKindOfDiceMultiple",
    message: "What dice are you rolling?",
    choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
};
exports.howManyDice = {
    type: "input",
    name: "howManyDice",
    message: "How many ",
};
exports.isAdvantage = {
    type: "list",
    name: "isAdvantage",
    message: "Normal roll, advantage or disadvantage?",
    choices: ["Normal", "Advantage", "Disadvantage"],
    default: "Normal",
};
exports.modifier = {
    type: "input",
    name: "modifier",
    message: "What is the modifier?",
};
exports.singleDiceQuestions = [
    exports.whatKindOfDiceSingle,
    exports.isAdvantage,
    exports.modifier,
];
exports.multiplDiceQuestions = [
    exports.whatKindOfDiceSingle,
    exports.isAdvantage,
    exports.modifier,
];
