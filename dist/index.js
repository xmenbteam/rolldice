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
    const { numberOfDice } = await inquirer_1.default.prompt(questions_1.diceCount);
    if (numberOfDice === "Single") {
        const { whatKindOfDiceSingle, isAdvantage, modifier } = await inquirer_1.default.prompt(questions_1.singleDiceQuestions);
        const type = utils_1.diceRef[whatKindOfDiceSingle];
        if (isAdvantage === "Normal") {
            (0, rollDice_1.rollLoadsOfDice)(rollDice_1.rollDice, [{ diceType: type, numberOfDice: 1 }], Number(modifier), 400);
        }
        else {
            const adv = utils_1.advRef[isAdvantage];
            (0, rollDice_1.advDis)(rollDice_1.rollDice, [{ diceType: type, numberOfDice: 1 }], Number(modifier), 400, adv);
        }
    }
    else {
        console.log("Gimme a minute mate");
    }
};
rollDiceProgram();
