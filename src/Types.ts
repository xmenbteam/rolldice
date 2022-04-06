export type Dice = {
  diceType: number;
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
