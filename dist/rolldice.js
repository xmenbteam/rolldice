"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollLoadsOfDice = exports.rollDice = void 0;
const utils_1 = require("./utils/utils");
const rollDice = async (diceNum, delayTime) => {
    console.log(`Rolling a d${diceNum}!`);
    const num = Math.floor(Math.random() * diceNum) + 1;
    await (0, utils_1.delay)(delayTime);
    console.log(`You rolled a ${num}!`);
    return num;
};
exports.rollDice = rollDice;
const rollLoadsOfDice = async (rollFunc, arrayOfDice, modifier, delayTime) => {
    let result = 0;
    for (const { numberOfDice, diceType } of arrayOfDice) {
        let count = 0;
        for (let i = 0; i < numberOfDice; i++) {
            const rolledDice = await rollFunc(diceType, delayTime);
            count += rolledDice;
        }
        result += count;
    }
    console.log(`Wow! You rolled ${result + modifier}!`);
    return result;
};
exports.rollLoadsOfDice = rollLoadsOfDice;
