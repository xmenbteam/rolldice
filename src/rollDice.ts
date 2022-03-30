import { Dice, DiceArray } from "./Types";
import { delay } from "./utils/utils";

export const rollDice = async (diceNum: number) => {
  console.log(`Rolling a d${diceNum}!`);

  const num = Math.floor(Math.random() * diceNum) + 1;

  await delay(0);

  console.log(`You rolled a ${num}!`);
  return num;
};

export const rollLoadsOfDice = async (
  rollFunc: (diceNum: number) => Promise<number>,
  arrayOfDice: DiceArray
) => {
  let result = 0;

  for (const { numberOfDice, diceType } of arrayOfDice) {
    let count = 0;
    for (let i = 0; i < numberOfDice; i++) {
      const rolledDice = await rollFunc(diceType);
      count += rolledDice;
    }
    result += count;
  }
  console.log(`Wow! You rolled ${result}!`);

  return result;
};
