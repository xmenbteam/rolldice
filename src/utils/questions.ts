import {
  CheckboxQuestion,
  InputQuestion,
  ListQuestion,
  QuestionCollection,
  Answers,
  ConfirmQuestion,
} from "inquirer";

export class Questions {
  diceCount: ListQuestion = {
    type: "list",
    name: "numberOfDice",
    message: "Do you want to roll a single dice?",
    choices: ["Single", "Multiple"],
    default: "Single",
  };

  abilityCheckOrAttackRoll: ListQuestion = {
    type: "list",
    name: "abilityOrAttack",
    message: "Is this an ability check or an attack roll?",
    choices: ["Ability Check", "Attack Roll"],
    default: "Ability Check",
  };

  whatKindOfDiceSingle: ListQuestion = {
    type: "list",
    name: "whatKindOfDiceSingle",
    message: "What dice are you rolling?",
    choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
    default: "d20",
  };

  whatKindOfDiceMultiple: CheckboxQuestion = {
    type: "checkbox",
    name: "whatKindOfDiceMultiple",
    message: "What dice are you rolling?",
    choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
  };

  isAdvantage: ListQuestion = {
    type: "list",
    name: "isAdvantage",
    message: "Normal roll, advantage or disadvantage?",
    choices: ["Normal", "Advantage", "Disadvantage"],
    default: "Normal",
  };

  modifier: InputQuestion = {
    type: "input",
    name: "modifier",
    message: "What is the modifier?",
    validate: (ans) => {
      if (isNaN(ans)) return "Please enter a valid number!";
      else return true;
    },
  };

  isCrit: ConfirmQuestion = {
    type: "confirm",
    name: "isCrit",
    message: "Did you roll a natural 20?!",
  };

  static singleDiceCount() {
    return new Questions().diceCount;
  }

  static modifierQ() {
    return new Questions().modifier;
  }

  static AbilityOrAttack() {
    return new Questions().abilityCheckOrAttackRoll;
  }

  static singleDiceQuestion(): QuestionCollection<Answers> {
    return [new Questions().whatKindOfDiceSingle, new Questions().modifier];
  }

  static isAdvantageQuestion(): QuestionCollection<Answers> {
    return [new Questions().isAdvantage];
  }

  static multipleDiceQuestions(): QuestionCollection<Answers> {
    return [
      new Questions().whatKindOfDiceMultiple,
      new Questions().modifier,
      new Questions().isCrit,
    ];
  }
}
