import { DiceArray, rollFunction } from "./Types";
import { delay } from "./utils/utils";

export const rollDice = async (diceNum: number, delayTime: number) => {
  console.log(`Rolling a d${diceNum}!`);

  const num: number = Math.floor(Math.random() * diceNum) + 1;

  await delay(delayTime);

  console.log(`You rolled a ${num}!`);
  return num;
};

export const rollLoadsOfDice = async (
  rollFunc: rollFunction,
  arrayOfDice: DiceArray,
  modifier: number,
  delayTime: number
) => {
  let result: number = 0;

  for (const { numberOfDice, diceType } of arrayOfDice) {
    let count = 0;
    for (let i = 0; i < numberOfDice; i++) {
      const rolledDice: number = await rollFunc(diceType, delayTime);
      count += rolledDice;
    }
    result += count;
  }
  console.log(`Wow! You rolled ${result + modifier}!`);

  return result;
};
