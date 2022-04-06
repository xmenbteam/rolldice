import {
  CheckboxQuestion,
  InputQuestion,
  ListQuestion,
  QuestionCollection,
  Answers,
  ConfirmQuestion,
} from "inquirer";

export const diceCount: ListQuestion = {
  type: "list",
  name: "numberOfDice",
  message: "Do you want to roll a single dice?",
  choices: ["Single", "Multiple"],
  default: "Single",
};

export const whatKindOfDiceSingle: ListQuestion = {
  type: "list",
  name: "whatKindOfDiceSingle",
  message: "What dice are you rolling?",
  choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
  default: "d20",
};

export const whatKindOfDiceMultiple: CheckboxQuestion = {
  type: "checkbox",
  name: "whatKindOfDiceMultiple",
  message: "What dice are you rolling?",
  choices: ["d4", "d6", "d8", "d10", "d12", "d20", "d100"],
};

export const isAdvantage: ListQuestion = {
  type: "list",
  name: "isAdvantage",
  message: "Normal roll, advantage or disadvantage?",
  choices: ["Normal", "Advantage", "Disadvantage"],
  default: "Normal",
};

export const modifier: InputQuestion = {
  type: "input",
  name: "modifier",
  message: "What is the modifier?",
  validate: (ans) => {
    if (isNaN(ans)) return "Please enter a valid number!";
    else return true;
  },
};

export const isCrit: ConfirmQuestion = {
  type: "confirm",
  name: "isCrit",
  message: "Did you roll a natural 20?!",
};

export const singleDiceQuestion: QuestionCollection<Answers> = [
  whatKindOfDiceSingle,
  modifier,
];

export const isAdvangageQuestion: QuestionCollection<Answers> = [isAdvantage];

export const multiplDiceQuestions: QuestionCollection<Answers> = [
  whatKindOfDiceMultiple,
  modifier,
  isCrit,
];
