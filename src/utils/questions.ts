import {
  CheckboxQuestion,
  InputQuestion,
  ListQuestion,
  QuestionCollection,
  Answers,
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

export const howManyDice: InputQuestion = {
  type: "input",
  name: "howManyDice",
  message: "How many ",
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
};

export const singleDiceQuestion: QuestionCollection<Answers> = [
  whatKindOfDiceSingle,
  modifier,
];

export const isAdvangageQuestion: QuestionCollection<Answers> = [isAdvantage];

export const multiplDiceQuestions: QuestionCollection<Answers> = [
  whatKindOfDiceMultiple,
  modifier,
];
