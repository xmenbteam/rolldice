"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advDis = exports.rollLoadsOfDice = exports.rollDice = void 0;
const utils_1 = require("./utils/utils");
const rollDice = async (diceNum, delayTime) => {
    console.log(`Rolling a d${diceNum}! \n`);
    const num = Math.floor(Math.random() * diceNum) + 1;
    await (0, utils_1.delay)(delayTime);
    console.log(`Rolled a ${num} on the dice... \n adding modifier... \n`);
    return num;
};
exports.rollDice = rollDice;
const rollLoadsOfDice = async (rollFunc, arrayOfDice, modifier, delayTime) => {
    let result = modifier;
    for (const { numberOfDice, diceType } of arrayOfDice) {
        let count = 0;
        for (let i = 0; i < numberOfDice; i++) {
            const rolledDice = await rollFunc(diceType, delayTime);
            count += rolledDice;
        }
        result += count;
    }
    await (0, utils_1.delay)(delayTime);
    console.log(`Wow! You rolled ${result}! \n`);
    return result;
};
exports.rollLoadsOfDice = rollLoadsOfDice;
const advDis = async (rollFunc, arrayOfDice, modifier, delayTime, advantage) => {
    const first = await (0, exports.rollLoadsOfDice)(rollFunc, arrayOfDice, modifier, delayTime);
    const second = await (0, exports.rollLoadsOfDice)(rollFunc, arrayOfDice, modifier, delayTime);
    await (0, utils_1.delay)(delayTime);
    const rolled = `You rolled ${first} and ${second}!\n`;
    console.log(rolled);
    await (0, utils_1.delay)(delayTime);
    const advMsg = `Because you have ${advantage ? "advantage" : "disadvantage"},
  \n This comes out as ${advantage ? Math.max(first, second) : Math.min(first, second)}!
  \n ${advantage ? "Lucky you!" : "Unlucky pal!"}
  `;
    console.log(advMsg);
    return advantage ? Math.max(first, second) : Math.min(first, second);
};
exports.advDis = advDis;
