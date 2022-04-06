"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplDiceQuestions = exports.isAdvangageQuestion = exports.singleDiceQuestion = exports.isCrit = exports.modifier = exports.isAdvantage = exports.whatKindOfDiceMultiple = exports.whatKindOfDiceSingle = exports.diceCount = void 0;
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
    validate: (ans) => {
        if (isNaN(ans))
            return "Please enter a valid number!";
        else
            return true;
    },
};
exports.isCrit = {
    type: "confirm",
    name: "isCrit",
    message: "Did you roll a natural 20?!",
};
exports.singleDiceQuestion = [
    exports.whatKindOfDiceSingle,
    exports.modifier,
];
exports.isAdvangageQuestion = [exports.isAdvantage];
exports.multiplDiceQuestions = [
    exports.whatKindOfDiceMultiple,
    exports.modifier,
    exports.isCrit,
];
