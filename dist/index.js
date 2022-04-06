#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const rollDice_1 = require("./rollDice");
const questions_1 = require("./utils/questions");
const utils_1 = require("./utils/utils");
const rollDiceProgram = async () => {
    try {
        const { numberOfDice } = await inquirer_1.default.prompt(questions_1.diceCount);
        if (numberOfDice === "Single") {
            const { whatKindOfDiceSingle, modifier } = await inquirer_1.default.prompt(questions_1.singleDiceQuestion);
            const type = utils_1.diceRef[whatKindOfDiceSingle];
            const props = [
                rollDice_1.rollDice,
                [{ diceType: type, numberOfDice: 1 }],
                Number(modifier),
                400,
                false,
            ];
            if (type === 20) {
                const { isAdvantage } = await inquirer_1.default.prompt(questions_1.isAdvangageQuestion);
                if (isAdvantage === "Normal") {
                    (0, rollDice_1.rollLoadsOfDice)(...props);
                }
                else {
                    const adv = utils_1.advRef[isAdvantage];
                    (0, rollDice_1.advDis)(...props, adv);
                }
            }
            else {
                (0, rollDice_1.rollLoadsOfDice)(...props);
            }
        }
        else {
            const { whatKindOfDiceMultiple, modifier, isCrit } = await inquirer_1.default.prompt(questions_1.multiplDiceQuestions);
            const multipleDiceArray = [];
            for (let i = 0; i < whatKindOfDiceMultiple.length; i++) {
                const { howManyDice } = await inquirer_1.default.prompt({
                    type: "input",
                    name: "howManyDice",
                    message: `How many ${whatKindOfDiceMultiple[i]} do you want to roll?`,
                });
                multipleDiceArray.push({
                    diceType: utils_1.diceRef[whatKindOfDiceMultiple[i]],
                    numberOfDice: Number(howManyDice),
                });
            }
            const props = [
                rollDice_1.rollDice,
                multipleDiceArray,
                Number(modifier),
                400,
                isCrit,
            ];
            (0, rollDice_1.rollLoadsOfDice)(...props);
        }
    }
    catch (err) {
        console.log("ERROR -->", err, "<-- ERROR");
    }
};
module.exports = rollDiceProgram();
