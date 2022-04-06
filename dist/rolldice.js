"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advDis = exports.rollLoadsOfDice = exports.rollDice = void 0;
const utils_1 = require("./utils/utils");
const rollDice = async (diceNum, delayTime) => {
    console.log(`Rolling a d${diceNum}! \n`);
    const num = 1 + Math.floor(Math.random() * diceNum);
    await (0, utils_1.delay)(delayTime);
    const isCrit = diceNum === 20 && num === 20;
    const isNatOne = diceNum === 20 && num === 1;
    let rollMessage = `Rolled a ${num} on the dice...`;
    if (isCrit)
        rollMessage += "FUCK YEAH NAT 20 YOOOO!!";
    if (isNatOne)
        rollMessage += "NATURAL 1 NOOOOO";
    rollMessage += "\n";
    console.log(rollMessage);
    return num;
};
exports.rollDice = rollDice;
const rollLoadsOfDice = async (rollFunc, arrayOfDice, modifier, delayTime, isCrit) => {
    let result = modifier;
    for (const { numberOfDice, diceType } of arrayOfDice) {
        let count = 0;
        for (let i = 0; i < numberOfDice; i++) {
            const rolledDice = await rollFunc(diceType, delayTime);
            count += rolledDice;
        }
        result += count;
    }
    let fullDice = 0;
    arrayOfDice.forEach((dice) => {
        fullDice += dice.diceType;
    });
    if (isCrit)
        result += fullDice;
    await (0, utils_1.delay)(delayTime);
    console.log(`Adding modifier... \n`);
    let rollMessage = `Wow! You rolled ${result}`;
    if (isCrit)
        rollMessage += " with your critical hit! Wowzers McGowzers!";
    rollMessage += "!! \n";
    console.log(rollMessage);
    return result;
};
exports.rollLoadsOfDice = rollLoadsOfDice;
const advDis = async (rollFunc, arrayOfDice, modifier, delayTime, isCrit, advantage) => {
    const props = [
        rollFunc,
        arrayOfDice,
        modifier,
        delayTime,
        false,
    ];
    const first = await (0, exports.rollLoadsOfDice)(...props);
    const second = await (0, exports.rollLoadsOfDice)(...props);
    const advDice = Math.max(first, second);
    const disadvDice = Math.min(first, second);
    await (0, utils_1.delay)(delayTime);
    const rolled = `You rolled ${first} and ${second}!\n`;
    console.log(rolled);
    await (0, utils_1.delay)(delayTime);
    const advMsg = `Because you have ${advantage ? "advantage" : "disadvantage"},
  \n This comes out as ${advantage ? advDice : disadvDice}!
  \n ${advantage ? "Lucky you!" : "Unlucky pal!"}
  `;
    console.log(advMsg);
    return advantage ? advDice : disadvDice;
};
exports.advDis = advDis;
