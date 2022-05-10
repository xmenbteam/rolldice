import { DiceNums } from "../Types";
import { utils } from "../utils/utils";

export class Messages {
  static async d20RollMessage(
    num: number,
    isCrit: boolean,
    isNatOne: boolean,
    modifier: number,
    delayTime: number
  ): Promise<number> {
    let result: number = modifier;

    result += modifier;

    let rollMessage = `Rolled a ${num} on the dice... \n`;

    if (isCrit) rollMessage += "WOO YEAH NAT 20 YOOOO!!";
    if (isNatOne) rollMessage += "NATURAL 1 NOOOOO";

    rollMessage += "\n";

    console.log(rollMessage);

    await utils.delay(delayTime);

    console.log(`Adding modifier... \n`);

    const finalMessage = `Wow! You rolled ${result}`;

    console.log(finalMessage);

    return num;
  }
  static async otherRollMessage(
    num: number,
    diceType: DiceNums,
    isCrit: boolean
  ): Promise<number> {
    let result = num;

    let fullDice: number = 0;

    if (isCrit) fullDice += diceType;

    fullDice += result;

    let rollMessage = `Rolled a ${num} on the dice... \n`;

    console.log(rollMessage);

    return num;
  }
  static async advDisMessage(
    first: number,
    second: number,
    advantage: boolean,
    advDice: number,
    disadvDice: number
  ) {
    await utils.delay(200);

    const rolled = `You rolled ${first} and ${second}!\n`;
    console.log(rolled);

    await utils.delay(200);

    const advMsg = `Because you have ${
      advantage ? "advantage" : "disadvantage"
    },
  \n This comes out as ${advantage ? advDice : disadvDice}!
  \n ${advantage ? "Lucky you!" : "Unlucky pal!"}
  `;

    console.log(advMsg);

    return advantage ? advDice : disadvDice;
  }
  static async rollLoadsOfDiceMessage(result: number, isCrit: boolean) {
    await utils.delay(200);

    console.log(`Adding modifier... \n`);

    let rollMessage = `Wow! You rolled ${result}`;

    if (isCrit) rollMessage += " with your critical hit! Wowzers McGowzers!";

    rollMessage += "!! \n";

    console.log(rollMessage);
    return result;
  }
}
