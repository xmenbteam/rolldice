"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const utils_1 = require("../utils/utils");
class Messages {
    static async d20RollMessage(num, isCrit, isNatOne, modifier, delayTime) {
        let result = modifier;
        result += modifier;
        let rollMessage = `Rolled a ${num} on the dice... \n`;
        if (isCrit)
            rollMessage += "WOO YEAH NAT 20 YOOOO!!";
        if (isNatOne)
            rollMessage += "NATURAL 1 NOOOOO";
        rollMessage += "\n";
        console.log(rollMessage);
        await utils_1.utils.delay(delayTime);
        console.log(`Adding modifier... \n`);
        const finalMessage = `Wow! You rolled ${result}`;
        console.log(finalMessage);
        return num;
    }
    static async otherRollMessage(num, diceType, isCrit) {
        let result = num;
        let fullDice = 0;
        if (isCrit)
            fullDice += diceType;
        fullDice += result;
        let rollMessage = `Rolled a ${num} on the dice... \n`;
        console.log(rollMessage);
        return num;
    }
    static async advDisMessage(first, second, advantage, advDice, disadvDice) {
        await utils_1.utils.delay(200);
        const rolled = `You rolled ${first} and ${second}!\n`;
        console.log(rolled);
        await utils_1.utils.delay(200);
        const advMsg = `Because you have ${advantage ? "advantage" : "disadvantage"},
  \n This comes out as ${advantage ? advDice : disadvDice}!
  \n ${advantage ? "Lucky you!" : "Unlucky pal!"}
  `;
        console.log(advMsg);
        return advantage ? advDice : disadvDice;
    }
    static async rollLoadsOfDiceMessage(result, isCrit) {
        await utils_1.utils.delay(200);
        console.log(`Adding modifier... \n`);
        let rollMessage = `Wow! You rolled ${result}`;
        if (isCrit)
            rollMessage += " with your critical hit! Wowzers McGowzers!";
        rollMessage += "!! \n";
        console.log(rollMessage);
        return result;
    }
}
exports.Messages = Messages;
