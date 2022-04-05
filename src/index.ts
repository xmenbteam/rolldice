import inquirer from "inquirer";
import { advDis, rollDice, rollLoadsOfDice } from "./rollDice";
import { diceCount, singleDiceQuestions } from "./utils/questions";
import { advRef, diceRef } from "./utils/utils";

const rollDiceProgram = async () => {
  const { numberOfDice } = await inquirer.prompt(diceCount);

  if (numberOfDice === "Single") {
    const { whatKindOfDiceSingle, isAdvantage, modifier } =
      await inquirer.prompt(singleDiceQuestions);

    const type: number = diceRef[whatKindOfDiceSingle];

    if (isAdvantage === "Normal") {
      rollLoadsOfDice(
        rollDice,
        [{ diceType: type, numberOfDice: 1 }],
        Number(modifier),
        400
      );
    } else {
      const adv = advRef[isAdvantage];
      advDis(
        rollDice,
        [{ diceType: type, numberOfDice: 1 }],
        Number(modifier),
        400,
        adv
      );
    }
  } else {
    console.log("Gimme a minute mate");
  }
};

rollDiceProgram();
