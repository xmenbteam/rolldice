import { DiceArray, rollFunction } from "./Types";
import { delay } from "./utils/utils";

export const rollDice = async (diceNum: number, delayTime: number) => {
  console.log(`Rolling a d${diceNum}! \n`);

  const num: number = Math.floor(Math.random() * diceNum) + 1;

  await delay(delayTime);

  console.log(`Rolled a ${num} on the dice... \n adding modifier... \n`);
  return num;
};

export const rollLoadsOfDice = async (
  rollFunc: rollFunction,
  arrayOfDice: DiceArray,
  modifier: number,
  delayTime: number
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

  await delay(delayTime);

  console.log(`Wow! You rolled ${result}! \n`);

  return result;
};

export const advDis = async (
  rollFunc: rollFunction,
  arrayOfDice: DiceArray,
  modifier: number,
  delayTime: number,
  advantage: boolean
) => {
  const first = await rollLoadsOfDice(
    rollFunc,
    arrayOfDice,
    modifier,
    delayTime
  );
  const second = await rollLoadsOfDice(
    rollFunc,
    arrayOfDice,
    modifier,
    delayTime
  );

  await delay(delayTime);

  const rolled = `You rolled ${first} and ${second}!\n`;
  console.log(rolled);

  await delay(delayTime);

  const advMsg = `Because you have ${advantage ? "advantage" : "disadvantage"},
  \n This comes out as ${
    advantage ? Math.max(first, second) : Math.min(first, second)
  }!
  \n ${advantage ? "Lucky you!" : "Unlucky pal!"}
  `;

  console.log(advMsg);

  return advantage ? Math.max(first, second) : Math.min(first, second);
};
