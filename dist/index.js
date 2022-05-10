#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const Dice_1 = require("./Classes/Dice");
const questions_1 = require("./utils/questions");
const utils_1 = require("./utils/utils");
const rollDiceProgram = async () => {
    const { diceRef, advRef } = utils_1.utils.getRefs();
    try {
        const abilityCheckOrAttackRoll = questions_1.Questions.AbilityOrAttack();
        const { abilityOrAttack } = await inquirer_1.default.prompt(abilityCheckOrAttackRoll);
        console.log({ abilityOrAttack });
        if (abilityOrAttack === "Ability Check") {
            console.log("here");
            const { isAdvantage } = await inquirer_1.default.prompt(questions_1.Questions.isAdvantageQuestion());
            const { modifier } = await inquirer_1.default.prompt(questions_1.Questions.modifierQ());
            if (isAdvantage === "Normal") {
                new Dice_1.RollDice(Number(modifier)).diceMessage(20);
            }
            else {
                const adv = advRef[isAdvantage];
                new Dice_1.RollDice(Number(modifier)).AdvDis(adv);
            }
        }
        if (abilityOrAttack === "Attack Roll") {
            console.log("also here");
            const { isAdvantage } = await inquirer_1.default.prompt(questions_1.Questions.isAdvantageQuestion());
            const { modifier: mod20 } = await inquirer_1.default.prompt(questions_1.Questions.modifierQ());
            if (isAdvantage === "Normal") {
                new Dice_1.RollDice(Number(mod20)).diceMessage(20);
            }
            else {
                const adv = advRef[isAdvantage];
                new Dice_1.RollDice(Number(mod20)).AdvDis(adv);
            }
            await utils_1.utils.delay(200);
            console.log("Now roll damage!");
            const { whatKindOfDiceMultiple, modifier: modDamage, isCrit, } = await inquirer_1.default.prompt(questions_1.Questions.multipleDiceQuestions());
            const multipleDiceArray = [];
            for (let i = 0; i < whatKindOfDiceMultiple.length; i++) {
                const { howManyDice } = await inquirer_1.default.prompt({
                    type: "input",
                    name: "howManyDice",
                    message: `How many ${whatKindOfDiceMultiple[i]} do you want to roll?`,
                });
                multipleDiceArray.push({
                    diceType: diceRef[whatKindOfDiceMultiple[i]],
                    numberOfDice: Number(howManyDice),
                });
            }
            new Dice_1.RollDice(modDamage).RollLoadsOfDice(multipleDiceArray, isCrit);
        }
    }
    catch (err) {
        console.log("ERROR -->", err, "<-- ERROR");
    }
};
module.exports = rollDiceProgram();
