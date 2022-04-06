import { DiceArray, rollDiceFuncProps, RollFunction } from "./Types";
import { delay } from "./utils/utils";

export const rollDice = async (diceNum: number, delayTime: number) => {
  console.log(`Rolling a d${diceNum}! \n`);

  const num: number = 1 + Math.floor(Math.random() * diceNum);

  await delay(delayTime);

  const isCrit = diceNum === 20 && num === 20;
  const isNatOne = diceNum === 20 && num === 1;

  let rollMessage = `Rolled a ${num} on the dice...`;

  if (isCrit) rollMessage += "FUCK YEAH NAT 20 YOOOO!!";
  if (isNatOne) rollMessage += "NATURAL 1 NOOOOO";

  rollMessage += "\n";

  console.log(rollMessage);

  return num;
};

export const rollLoadsOfDice = async (
  rollFunc: RollFunction,
  arrayOfDice: DiceArray,
  modifier: number,
  delayTime: number,
  isCrit: boolean
) => {
  let result: number = modifier;

  for (const { numberOfDice, diceType } of arrayOfDice) {
    let count = 0;
    for (let i = 0; i < numberOfDice; i++) {
      const rolledDice: number = await rollFunc(diceType, delayTime);
      count += rolledDice;
    }
    result += count;
  }

  let fullDice = 0;
  arrayOfDice.forEach((dice) => {
    fullDice += dice.diceType;
  });

  if (isCrit) result += fullDice;

  await delay(delayTime);

  console.log(`Adding modifier... \n`);

  let rollMessage = `Wow! You rolled ${result}`;

  if (isCrit) rollMessage += " with your critical hit! Wowzers McGowzers!";

  rollMessage += "!! \n";

  console.log(rollMessage);

  return result;
};

export const advDis = async (
  rollFunc: RollFunction,
  arrayOfDice: DiceArray,
  modifier: number,
  delayTime: number,
  isCrit: boolean,
  advantage: boolean
) => {
  const props: rollDiceFuncProps = [
    rollFunc,
    arrayOfDice,
    modifier,
    delayTime,
    false,
  ];

  const first = await rollLoadsOfDice(...props);
  const second = await rollLoadsOfDice(...props);

  const advDice = Math.max(first, second);
  const disadvDice = Math.min(first, second);

  await delay(delayTime);

  const rolled = `You rolled ${first} and ${second}!\n`;
  console.log(rolled);

  await delay(delayTime);

  const advMsg = `Because you have ${advantage ? "advantage" : "disadvantage"},
  \n This comes out as ${advantage ? advDice : disadvDice}!
  \n ${advantage ? "Lucky you!" : "Unlucky pal!"}
  `;

  console.log(advMsg);

  return advantage ? advDice : disadvDice;
};
