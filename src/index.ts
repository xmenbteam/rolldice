#!/usr/bin/env node

import inquirer from "inquirer";
import { RollDice } from "./Classes/Dice";
import { DiceArray, DiceNums } from "./Types";
import { Questions } from "./utils/questions";
import { utils } from "./utils/utils";

const rollDiceProgram = async () => {
  const { diceRef, advRef } = utils.getRefs();
  try {
    const abilityCheckOrAttackRoll = Questions.AbilityOrAttack();

    const { abilityOrAttack } = await inquirer.prompt(abilityCheckOrAttackRoll);
    console.log({ abilityOrAttack });
    if (abilityOrAttack === "Ability Check") {
      console.log("here");
      const { isAdvantage } = await inquirer.prompt(
        Questions.isAdvantageQuestion()
      );
      const { modifier } = await inquirer.prompt(Questions.modifierQ());
      if (isAdvantage === "Normal") {
        new RollDice(Number(modifier)).diceMessage(20);
      } else {
        const adv = advRef[isAdvantage];
        new RollDice(Number(modifier)).AdvDis(adv);
      }
    }
    if (abilityOrAttack === "Attack Roll") {
      console.log("also here");
      const { isAdvantage } = await inquirer.prompt(
        Questions.isAdvantageQuestion()
      );
      const { modifier: mod20 } = await inquirer.prompt(Questions.modifierQ());

      if (isAdvantage === "Normal") {
        new RollDice(Number(mod20)).diceMessage(20);
      } else {
        const adv = advRef[isAdvantage];
        new RollDice(Number(mod20)).AdvDis(adv);
      }

      await utils.delay(200);

      console.log("Now roll damage!");

      const {
        whatKindOfDiceMultiple,
        modifier: modDamage,
        isCrit,
      } = await inquirer.prompt(Questions.multipleDiceQuestions());

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

      new RollDice(modDamage).RollLoadsOfDice(multipleDiceArray, isCrit);
    }
  } catch (err) {
    console.log("ERROR -->", err, "<-- ERROR");
  }
};

module.exports = rollDiceProgram();
