export type Dice = {
  diceType: DiceNums;
  numberOfDice: number;
};

export type DiceArray = Dice[];

export type RollFunction = (
  diceNum: number,
  delayTime: number
) => Promise<number>;

export type rollDiceFuncProps = [
  RollFunction,
  DiceArray,
  number,
  number,
  boolean
];

export type DiceNums = 4 | 6 | 8 | 10 | 12 | 20 | 100;
