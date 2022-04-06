import inquirer from "inquirer";
import { advDis, rollDice, rollLoadsOfDice } from "./rollDice";
import { DiceArray, rollDiceFuncProps } from "./Types";
import {
  diceCount,
  isAdvangageQuestion,
  multiplDiceQuestions,
  singleDiceQuestion,
} from "./utils/questions";
import { advRef, diceRef } from "./utils/utils";

const rollDiceProgram = async () => {
  const { numberOfDice } = await inquirer.prompt(diceCount);

  if (numberOfDice === "Single") {
    const { whatKindOfDiceSingle, modifier } = await inquirer.prompt(
      singleDiceQuestion
    );

    const type: number = diceRef[whatKindOfDiceSingle];

    const props: rollDiceFuncProps = [
      rollDice,
      [{ diceType: type, numberOfDice: 1 }],
      Number(modifier),
      400,
      false,
    ];

    if (type === 20) {
      const { isAdvantage } = await inquirer.prompt(isAdvangageQuestion);

      if (isAdvantage === "Normal") {
        rollLoadsOfDice(...props);
      } else {
        const adv = advRef[isAdvantage];
        advDis(...props, adv);
      }
    } else {
      rollLoadsOfDice(...props);
    }
  } else {
    const { whatKindOfDiceMultiple, modifier, isCrit } = await inquirer.prompt(
      multiplDiceQuestions
    );

    const multipleDiceArray: DiceArray = [];

    for (let i = 0; i < whatKindOfDiceMultiple.length; i++) {
      const { howManyDice } = await inquirer.prompt({
        type: "input",
        name: "howManyDice",
        message: `How many ${whatKindOfDiceMultiple[i]} do you want to roll?`,
      });

      multipleDiceArray.push({
        diceType: diceRef[whatKindOfDiceMultiple[i]],
        numberOfDice: Number(howManyDice),
      });
    }
    const props: rollDiceFuncProps = [
      rollDice,
      multipleDiceArray,
      Number(modifier),
      400,
      isCrit,
    ];

    rollLoadsOfDice(...props);
  }
};

rollDiceProgram();
