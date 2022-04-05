import inquirer from "inquirer";
import { rollDice, rollLoadsOfDice } from "./rollDice";
import { diceCount, singleDiceQuestions } from "./utils/questions";
import { diceRef } from "./utils/utils";

const rollDiceProgram = async () => {
  const { numberOfDice } = await inquirer.prompt(diceCount);

  if (numberOfDice === "Single") {
    const { whatKindOfDiceSingle, isAdvantage, modifier } =
      await inquirer.prompt(singleDiceQuestions);

    const type: number = diceRef[whatKindOfDiceSingle];

    isAdvantage
      ? [
          await rollLoadsOfDice(
            rollDice,
            [{ diceType: type, numberOfDice: 1 }],
            modifier,
            200
          ),
          await rollLoadsOfDice(
            rollDice,
            [{ diceType: type, numberOfDice: 1 }],
            modifier,
            200
          ),
        ]
      : await rollLoadsOfDice(
          rollDice,
          [{ diceType: type, numberOfDice: 1 }],
          modifier,
          200
        );
  }
};

rollDiceProgram();
