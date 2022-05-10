"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questions = void 0;
class Questions {
    constructor() {
        this.diceCount = {
            type: "list",
            name: "numberOfDice",
            message: "Do you want to roll a single dice?",
            choices: ["Single", "Multiple"],
            default: "Single",
        };
        this.abilityCheckOrAttackRoll = {
            type: "list",
            name: "abilityOrAttack",
            message: "Is this an ability check or an attack roll?",
            choices: ["Ability Check", "Attack Roll"],
            default: "Ability Check",
        };
        this.whatKindOfDiceSingle = {
            type: "list",
            name: "whatKindOfDiceSingle",
            message: "What dice are you rolling?",
            choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
            default: "d20",
        };
        this.whatKindOfDiceMultiple = {
            type: "checkbox",
            name: "whatKindOfDiceMultiple",
            message: "What dice are you rolling?",
            choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
        };
        this.isAdvantage = {
            type: "list",
            name: "isAdvantage",
            message: "Normal roll, advantage or disadvantage?",
            choices: ["Normal", "Advantage", "Disadvantage"],
            default: "Normal",
        };
        this.modifier = {
            type: "input",
            name: "modifier",
            message: "What is the modifier?",
            validate: (ans) => {
                if (isNaN(ans))
                    return "Please enter a valid number!";
                else
                    return true;
            },
        };
        this.isCrit = {
            type: "confirm",
            name: "isCrit",
            message: "Did you roll a natural 20?!",
        };
    }
    static singleDiceCount() {
        return new Questions().diceCount;
    }
    static modifierQ() {
        return new Questions().modifier;
    }
    static AbilityOrAttack() {
        return new Questions().abilityCheckOrAttackRoll;
    }
    static singleDiceQuestion() {
        return [new Questions().whatKindOfDiceSingle, new Questions().modifier];
    }
    static isAdvantageQuestion() {
        return [new Questions().isAdvantage];
    }
    static multipleDiceQuestions() {
        return [
            new Questions().whatKindOfDiceMultiple,
            new Questions().modifier,
            new Questions().isCrit,
        ];
    }
}
exports.Questions = Questions;
