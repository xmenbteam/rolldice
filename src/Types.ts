export type Dice = {
  diceType: number;
  numberOfDice: number;
};

export type DiceArray = Dice[];

export type rollFunction = (
  diceNum: number,
  delayTime: number
) => Promise<number>;
